import { useEffect, useState } from "react";
import axios from "axios";

function BookRequestsPage() {
  const [requests, setRequests] = useState([]);

  const fetchRequests = () => {
    axios.get("http://localhost:5000/api/bookRequests/all")
      .then(res => setRequests(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Book Requests</h2>
      {requests.length === 0 ? (
        <p>No requests yet</p>
      ) : (
        <ul className="space-y-4">
          {requests.map(r => (
            <li key={r._id} className="border p-4 rounded">
              <p><b>User:</b> {r.user.name} ({r.user.email})</p>
              <p><b>Book:</b> {r.book.title} by {r.book.author}</p>
              <p><b>Status:</b> {r.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookRequestsPage;
