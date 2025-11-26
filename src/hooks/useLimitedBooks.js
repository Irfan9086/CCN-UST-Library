// hooks/useLimitedBooks.js
import { useState, useEffect } from "react";
import { fetchBooksApi } from "../../api/booksApi";


export const useLimitedBooks = (limit = 6) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await fetchBooksApi();
        setBooks(response.data.slice(0, limit));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [limit]);

  return { books, loading };
};
