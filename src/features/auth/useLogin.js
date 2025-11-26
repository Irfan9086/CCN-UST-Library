import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./authService";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const { user, token } = await loginUser({ email, password });

      if (token) {
        // ✅ Store token and role for future use
        localStorage.setItem("access-token", token);
        localStorage.setItem("role", user.role);
        localStorage.setItem("student-info", JSON.stringify(user));

        // ✅ Redirect user based on role (optional)
        navigate("/dashboard");

        // ✅ Reload to re-trigger protected components/data
        window.location.reload();
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    loading,
    handleLogin,
  };
};
