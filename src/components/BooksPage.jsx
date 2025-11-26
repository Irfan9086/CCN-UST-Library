import { useState } from "react";
import { Search } from "lucide-react";
import BookList from "./BookList";
import SidebarFilters from "./SidebarFilters";

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(["All Books"]);
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 dark:bg-gray-900">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-4 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search books by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1 py-4">
          <SidebarFilters 
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
        </div>

        {/* Books */}
        <div className="md:col-span-3">
          <BookList 
            searchQuery={searchQuery}
            selectedCategories={selectedCategories}
            selectedRating={selectedRating}
    
          />
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
