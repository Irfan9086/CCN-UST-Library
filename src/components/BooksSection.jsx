
import { useLimitedBooks } from "../hooks/useLimitedBooks";
import BookCard from "./ BookCard";


const BooksSection = () => {
  const { books, loading } = useLimitedBooks(24);

  if (loading) return <p className="text-center p-4">Loading books...</p>;

  return (
         <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
