import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchBooksApi } from "../../api/booksApi";
import { Link } from "react-router-dom";
import LoaderSpinner from "../pages/LoaderSpinner";

const BookList = ({ searchQuery, selectedCategories, selectedRating, sortBy }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const response = await fetchBooksApi();
        setBooks(response.data || []);
        setError("");
      } catch (err) {
        setError("Failed to load books");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  // Filter and sort books
  const filteredBooks = books.filter((book) => {
    // Search filter
    if (searchQuery && !book.title?.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !book.author?.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Department/Category filter (using department field from sidebar)
    if (selectedCategories.length > 0 && !selectedCategories.includes("All Books")) {
      if (!selectedCategories.includes(book.department)) {
        return false;
      }
    }

    // Rating filter
    if (selectedRating && book.rating < selectedRating) {
      return false;
    }

    return true;
  });

  // Sort books
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "Recently Added") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortBy === "Alphabetical (A-Z)") {
      return a.title?.localeCompare(b.title);
    } else if (sortBy === "Alphabetical (Z-A)") {
      return b.title?.localeCompare(a.title);
    } else if (sortBy === "Most Borrowed") {
      return (b.borrowCount || 0) - (a.borrowCount || 0);
    }
    return 0;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
         <LoaderSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-semibold text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  if (sortedBooks.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-semibold text-gray-600 dark:text-gray-400">No books found</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-2 sm:p-4">
      {sortedBooks.map((book) => (
        <Link
          to={`/books/${book._id}`}
          key={book._id}
          className="group relative rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white dark:bg-gray-800 border-2 border-transparent hover:border-transparent"
          style={{
            background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%) border-box',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
          
          <img
            src={book.imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
            alt={book.title}
            className="w-full h-40 sm:h-48 object-cover relative z-10"
          />
          <div className="p-3 sm:p-4 relative z-10 dark:bg-gray-800">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{book.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm truncate">by {book.author}</p>
            {book.department && (
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-1">📚 {book.department}</p>
            )}
            {book.category && (
              <p className="text-xs text-green-600 dark:text-green-400 mt-1 truncate">{book.category}</p>
            )}
            <div className="mt-2 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`text-sm sm:text-base ${index < (book.rating || 0) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

BookList.propTypes = {
  searchQuery: PropTypes.string,
  selectedCategories: PropTypes.array,
  selectedRating: PropTypes.number,
  sortBy: PropTypes.string,
};

export default BookList;