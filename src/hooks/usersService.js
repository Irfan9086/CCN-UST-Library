import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_BASE = `${BASE_URL}/api/auth`;

const getAuthHeader = () => {
  const token = localStorage.getItem("access-token"); // ✅ correct name
  if (!token) throw new Error("No token found");
  return { Authorization: `Bearer ${token}` };
};
export const fetchAllUsers = async () => {
  const res = await axios.get(`${API_BASE}/all-users`, {
    headers: getAuthHeader(),
  });
  return res.data;
};

export const updateUserRole = async (id, role) => {
  const res = await axios.patch(
    `${API_BASE}/update-role/${id}`,
    { role },
    {
      headers: getAuthHeader(),
    }
  );
  return res.data;
};
