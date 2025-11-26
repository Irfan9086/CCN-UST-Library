import { useState } from "react";

export const useBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("pending");
  const [department, setDepartment] = useState("CSE");

  return {
    title, setTitle,
    author, setAuthor,
    category, setCategory,
    description, setDescription,
    imageUrl, setImageUrl,
    publishedYear, setPublishedYear,
    availableCopies, setAvailableCopies,
    rating, setRating,
    status, setStatus,
    department, setDepartment,
  };
};
