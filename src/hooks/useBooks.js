import { useState, useEffect } from "react";
import { deleteBookApi, fetchBooksApi, updateBookApi } from "../../api/booksApi";


export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetchBooksApi();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingBook({ ...editingBook, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id, ...updateData } = editingBook;
      const formattedData = {
        ...updateData,
        publishedYear: Number(updateData.publishedYear),
        availableCopies: Number(updateData.availableCopies),
        rating: Number(updateData.rating),
      };
      await updateBookApi(_id, formattedData);
      alert("Book updated successfully!");
      setEditingBook(null);
      fetchBooks();
    } catch (error) {
      console.error("Update failed:", error.response || error);
      alert("Update failed!");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      await deleteBookApi(id);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      alert("Book deleted!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed!");
    }
  };

  return {
    books,
    loading,
    editingBook,
    setEditingBook,
    handleEditClick,
    handleEditChange,
    handleEditSubmit,
    handleDelete,
  };
};
