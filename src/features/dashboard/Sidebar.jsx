/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { Home, BookOpen, PlusSquare, Users, Menu, X } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`bg-gray-900 text-white min-h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} flex flex-col`}>
      {/* Top Section */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        {isOpen && <h1 className="text-xl font-bold">Dashboard</h1>}
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded">
          <Home /> {isOpen && <span>Home</span>}
        </Link>
        <Link to="/dashboard/all-books" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded">
          <BookOpen /> {isOpen && <span>All Books</span>}
        </Link>
        <Link to="/dashboard/all-users" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded">
          <Users /> {isOpen && <span>All Users</span>}
        </Link>
        {/* Add DashboardApprove link */}
        <Link to="/dashboard/book-approve" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded">
          <Users /> {isOpen && <span>Approve Books</span>}  {/* Icon and label */}
        </Link>
         <Link to="/dashboard/request" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded">
          <Users /> {isOpen && <span>request</span>}  {/* Icon and label */}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
