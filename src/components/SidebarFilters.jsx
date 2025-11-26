import { Star } from "lucide-react";
import PropTypes from "prop-types";

const SidebarFilters = ({ 
  selectedCategories, 
  setSelectedCategories, 
  selectedRating,
  setSelectedRating,

}) => {

  const handleCategoryChange = (category) => {
    // Radio button এর মতো কাজ করবে - শুধু একটা department select হবে
    setSelectedCategories([category]);
  };



  return (
    <aside className="space-y-8 bg-gradient-to-b from-[#0c4a6e] to-[#164e63] dark:from-gray-800 dark:to-gray-900 text-white p-5 rounded-xl shadow-xl sticky top-4">
      
      {/* Search by Types */}
      <div>
        <h2 className="font-bold text-xl mb-3 border-b border-gray-400 dark:border-gray-600 pb-2">Search By Department</h2>
        <div className="space-y-3 text-sm">
          {["All Books", "CSE", "EEE", "English", "Mathematics","Bangla"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 transition">
              <input 
                type="radio" 
                name="department"
                className="accent-cyan-500"
                checked={selectedCategories.includes(type)}
                onChange={() => handleCategoryChange(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>



      {/* Ratings */}
      <div>
        <h2 className="font-bold text-xl mb-3 border-b border-gray-400 dark:border-gray-600 pb-2">Ratings</h2>
        <div className="space-y-2 text-sm">
          {[5,4,3,2,1].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 transition">
              <input 
                type="radio" 
                name="rating" 
                className="accent-cyan-500"
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
              />
              <div className="flex text-yellow-400">
                {Array.from({length: rating}).map((_, i) => (
                  <Star key={i} size={16} fill="yellow" />
                ))}
              </div>
            </label>
          ))}
        </div>
        {selectedRating && (
          <button 
            onClick={() => setSelectedRating(null)}
            className="mt-2 text-xs bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Clear Rating Filter
          </button>
        )}
      </div>

    </aside>
  );
};

SidebarFilters.propTypes = {
  selectedCategories: PropTypes.array.isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
  selectedRating: PropTypes.number,
  setSelectedRating: PropTypes.func.isRequired,
};

export default SidebarFilters;
