import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("student-info");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("student-info");
    setUser(null);
    navigate("/");
    window.location.reload(); // Optional, if needed to reload app state
  };

  const isLoggedIn = !!localStorage.getItem("access-token");

  return (
    <nav className={`w-full ${darkMode ? "bg-gray-900" : "bg-blue-700"} text-white`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to="/" className="font-bold text-xl">📚 UST Library</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
           
          {/* Only student can see Book Post */}
          {user?.role === "student" && (
            <Link to="/add-books" className="hover:text-yellow-300">Books Post</Link>
          )}

          {/* Only admin can see Dashboard */}
          {user?.role === "admin" && (
            <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
          )}

          {/* Admin can also post books if needed */}
          {user?.role === "admin" && (
            <Link to="/add-books" className="hover:text-yellow-300">Books Post</Link>
          )}

          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Login
            </Link>
          )}

          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-indigo-500 dark:to-purple-600 hover:from-yellow-500 hover:to-orange-600 dark:hover:from-indigo-600 dark:hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`flex flex-col gap-4 p-4 ${darkMode ? "bg-gray-800" : "bg-blue-600"} md:hidden`}>
          <Link to="/" onClick={toggleMenu} className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/books" onClick={toggleMenu} className="hover:text-yellow-300 transition">Books</Link>

          {user?.role === "student" && (
            <Link to="/add-books" onClick={toggleMenu} className="hover:text-yellow-300 transition">Books Post</Link>
          )}

          {user?.role === "admin" && (
            <>
              <Link to="/dashboard" onClick={toggleMenu} className="hover:text-yellow-300 transition">Dashboard</Link>
              <Link to="/add-books" onClick={toggleMenu} className="hover:text-yellow-300 transition">Books Post</Link>
            </>
          )}

          <Link to="/about" onClick={toggleMenu} className="hover:text-yellow-300 transition">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-yellow-300 transition">Contact</Link>

          {isLoggedIn ? (
            <button 
              onClick={() => { handleLogout(); toggleMenu(); }}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Logout
            </button>
          ) : (
            <Link 
              to="/login" 
              onClick={toggleMenu}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all text-center"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
