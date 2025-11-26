/* eslint-disable no-unused-vars */
import React from "react";

import axios from "axios";
import { useBookForm } from "../hooks/useAddBook";
import CustomButton from "./CustomButton";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BookAddForm = () => {
  const {
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
  } = useBookForm();

 const handleSubmit = async (e) => {
  e.preventDefault();

  const bookData = {
    title,
    author,
    category,
    description: description || undefined,
    imageUrl: imageUrl || undefined,
    publishedYear: publishedYear ? Number(publishedYear) : undefined,
    availableCopies: Number(availableCopies),
    rating: rating ? Number(rating) : undefined,
    status,
    department,
  };

  try {
    const response = await axios.post(`${API_URL}/api/books`, bookData);
    alert("Book added successfully!");


    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
    setImageUrl("");
    setPublishedYear("");
    setAvailableCopies("");
    setRating("");
    setStatus("pending");
    setDepartment("CSE");

  } catch (error) {
    alert("Error: " + (error.response?.data?.message || "Validation failed"));
  }
};

  return (
     <div className="my-8">
  <form
    onSubmit={handleSubmit}
    className="text-black w-full max-w-4xl mx-auto bg-white rounded p-4 shadow-md space-y-4"
  >
    {/* Row 1: Title + Author */}
    <div className="flex flex-wrap justify-between gap-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="w-full md:w-[48%] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
        required
        className="w-full md:w-[48%] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Row 2: Category + Copies */}
    <div className="flex flex-wrap justify-between gap-4">
      <input
        type="text"
        value={category}
        onChange={e => setCategory(e.target.value)}
        placeholder="Category"
        required
        className="w-full md:w-[48%] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={availableCopies}
        onChange={e => setAvailableCopies(e.target.value)}
        placeholder="Available Copies"
        required
        className="w-full md:w-[48%] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Row 3: Image + Year */}
    <div className="flex flex-wrap justify-between gap-4">
      <input
        type="url"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        placeholder="Image URL"
        className="w-full md:w-[48%] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={publishedYear}
        onChange={e => setPublishedYear(e.target.value)}
        placeholder="Published Year"
        className="w-full md:w-[48%] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Row 4: Status + Department + Rating */}
    <div className="flex flex-wrap justify-between gap-4">
      <select
        value={status}
        onChange={e => setStatus(e.target.value)}
        required
        className="w-full md:w-[31%] border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
      </select>
              
      <select
        value={department}
        onChange={e => setDepartment(e.target.value)}
        required
        className="w-full md:w-[31%] border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="CSE">CSE</option>
        <option value="EEE">EEE</option>
        <option value="Civil">Civil</option>
        <option value="Law">Law</option>
        <option value="English">English</option>
        <option value="Business">Business</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Bangla">Bangla</option>
        <option value="Related Subjects">Related Subjects</option>
      </select>

      <input
        type="number"
        value={rating}
        onChange={e => setRating(e.target.value)}
        placeholder="Rating (1-5)"
        className="w-full md:w-[31%] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Row 5: Description */}
    <div>
      <textarea
        name="description"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div>
      <CustomButton type="submit" className="w-full">
        Add Book
      </CustomButton>
    </div>
  </form>
</div>


  );
};

export default BookAddForm;
