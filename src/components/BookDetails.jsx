import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = ({ user }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [requestLoading, setRequestLoading] = useState(false); // Request button loading state

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/books/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch book");
        }
        return res.json();
      })
      .then(data => {
        setBook(data);
        setError("");
      })
      .catch(err => {
        console.error(err);
        setError("Something went wrong!");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleRequest = async () => {
    if (!user || !user._id) {
      alert("You must be logged in to request a book.");
      return;
    }

    setRequestLoading(true);
    try {
      await axios.post("http://localhost:5000/api/bookRequests/request", {
        bookId: book._id,
        userId: user._id
      });
      alert("Book request sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Error sending request");
    } finally {
      setRequestLoading(false);
    }
  };

  if (loading) return <p className="text-center text-2xl py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-xl py-10">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-5 space-y-4">
      <img src={book.imageUrl} alt={book.title} className="w-full h-96 object-cover rounded-xl" />
      <h2 className="text-3xl font-bold">{book.title}</h2>
      <p className="text-lg">Author: {book.author}</p>
      <p className="text-yellow-500 font-semibold">⭐ {book.rating}/5</p>
      <p className="text-gray-700">{book.description}</p>

      {/* Request Button */}
      <button
        onClick={handleRequest}
        disabled={requestLoading}
        className="mt-4 bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {requestLoading ? "Sending..." : "Request Book"}
      </button>
    </div>
  );
};

export default BookDetails;
