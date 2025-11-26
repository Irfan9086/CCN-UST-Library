import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${BASE_URL}/api/books`;

const getAuthHeader = () => {
  const token = localStorage.getItem("access-token");
  if (!token) throw new Error("No token found");
  return { Authorization: `Bearer ${token}` };
};

export const fetchBooksApi = async () => {
  return await axios.get(API_URL);
};

export const updateBookApi = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data, {
    headers: getAuthHeader(),
  });
};

export const deleteBookApi = async (id) => {
  return await axios.delete(`${API_URL}/${id}`, {
    headers: getAuthHeader(),
  });
};

