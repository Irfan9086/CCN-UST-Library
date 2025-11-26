/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import CustomButton from "./CustomButton";

const BookCard = ({ book }) => {
  return (
    <div className="group relative max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all hover:scale-105 duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer">
      
      {/* Image */}
      <div className="relative">
        <img
          src={book.imageUrl} 
          alt={book.title} 
          className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-full">
          {book.author}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="font-bold text-lg text-gray-800 dark:text-white truncate">{book.title}</h2>

        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={18}
              className={`${
                index < Math.floor(book.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400">({book.rating})</span>
        </div>

        <div className="flex justify-between items-center">
          <Link to={`/book/${book._id}`}>
            <CustomButton>Details</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
