// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export default function BookSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);           // সার্চ রেজাল্ট
  const [allBooks, setAllBooks] = useState([]);     // সব বই ডিফল্ট লিস্ট
  const [loading, setLoading] = useState(false);

  // প্রথমে সব বই লোড করব (page load এ)
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setAllBooks(data);
      })
      .catch(() => setAllBooks([]));
  }, []);

  // সার্চ করলে API কল
  useEffect(() => {
    if (!searchTerm) {
      setBooks([]);  // খালি সার্চ হলে সার্চ ফলাফল খালি রাখবে
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      setLoading(true);
      fetch(`http://localhost:5000/api/books/search?q=${encodeURIComponent(searchTerm)}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setBooks(data);
          } else {
            setBooks([]);
          }
          setLoading(false);
        })
        .catch(() => {
          setBooks([]);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // দেখাবো কোন ডাটা:
  // যদি সার্চ টার্ম থাকে, তাহলে সার্চ রেজাল্ট
  // না হলে সব বইয়ের লিস্ট
  const displayBooks = searchTerm ? books : allBooks;

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Book Search</h2>
      <input
        type="text"
        placeholder="Search by title, author, or category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px 12px",
          fontSize: 16,
          color:"black",
          borderRadius: 4,
          border: "1px solid #ccc",
          marginBottom: 20,
        }}
      />

      {loading && <p>Loading...</p>}

      {!loading && displayBooks.length === 0 && <p>No books found.</p>}

      {!loading &&
        displayBooks.map((book) => (
          <div
            key={book._id}
            style={{
              display: "flex",
              marginBottom: 20,
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 6,
              gap: 15,
              alignItems: "center",
            }}
          >
            <img
              src={book.imageUrl}
              alt={book.title}
              style={{ width: 80, height: 120, objectFit: "cover", borderRadius: 4 }}
            />
            <div>
              <h3 style={{ margin: "0 0 6px" }}>{book.title}</h3>
              <p style={{ margin: "0 0 4px" }}>
                <strong>Author:</strong> {book.author}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Category:</strong> {book.category}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
