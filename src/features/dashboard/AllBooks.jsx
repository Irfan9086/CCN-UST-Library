import { useBooks } from "../../hooks/useBooks";
import { Trash, Edit } from 'lucide-react';


const AllBooks = () => {
  const {
    books,
    loading,
    editingBook,
    setEditingBook,
    handleEditClick,
    handleEditChange,
    handleEditSubmit,
    handleDelete,
  } = useBooks();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📚 All Books</h2>

      {loading && <p className="text-center p-6">Loading Books...</p>}

      {!loading && books.length === 0 && <p>No books found!</p>}

      {!loading && books.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">Title</th>
                <th className="p-2">Author</th>
                <th className="p-2">Category</th>
                <th className="p-2">Department</th>
                <th className="p-2">Year</th>
                <th className="p-2">Rating</th>
                <th className="p-2">Copies</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="border-t">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{book.title}</td>
                  <td className="p-2">{book.author}</td>
                  <td className="p-2">{book.category}</td>
                  <td className="p-2">{book.department}</td>
                  <td className="p-2">{book.publishedYear}</td>
                  <td className="p-2">{book.rating}</td>
                  <td className="p-2">{book.availableCopies}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      className=" text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(book._id)}
                    >
                       <Trash className="text-red-500" size={28} />
                    </button>
                    <button
                      className=" text-white px-3 py-1 rounded"
                      onClick={() => handleEditClick(book)}
                    >
                     <Edit className="text-green-500"  size={28} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleEditSubmit}
            className="bg-white p-6 rounded-lg w-full max-w-md"
          >
            <h3 className="text-xl font-bold mb-4">Edit Book</h3>

            <input
              type="text"
              name="title"
              value={editingBook.title}
              onChange={handleEditChange}
              placeholder="Title"
              className="w-full mb-3 p-2 border rounded"
              required
            />

            <input
              type="text"
              name="author"
              value={editingBook.author}
              onChange={handleEditChange}
              placeholder="Author"
              className="w-full mb-3 p-2 border rounded"
              required
            />

            <input
              type="text"
              name="category"
              value={editingBook.category}
              onChange={handleEditChange}
              placeholder="Category"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              name="department"
              value={editingBook.department}
              onChange={handleEditChange}
              placeholder="Department"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="number"
              name="publishedYear"
              value={editingBook.publishedYear || ""}
              onChange={handleEditChange}
              placeholder="Published Year"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="number"
              name="rating"
              value={editingBook.rating || ""}
              onChange={handleEditChange}
              placeholder="Rating (1-5)"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="number"
              name="availableCopies"
              value={editingBook.availableCopies || ""}
              onChange={handleEditChange}
              placeholder="Available Copies"
              className="w-full mb-3 p-2 border rounded"
            />

            <textarea
              name="description"
              value={editingBook.description || ""}
              onChange={handleEditChange}
              placeholder="Description"
              className="w-full mb-3 p-2 border rounded"
            />

            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => setEditingBook(null)}
              className="ml-2 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AllBooks;