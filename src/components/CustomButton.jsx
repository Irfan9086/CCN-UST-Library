/* eslint-disable react/prop-types */
import { Loader2 } from "lucide-react";

const CustomButton = ({
  children,
  onClick,
  className = "",
  isLoading = false,
  icon: Icon, // optional icon component
  iconPosition = "left", // left or right
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white 
        ${isLoading ? "cursor-not-allowed opacity-70" : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"}
        shadow-md shadow-cyan-500/40 transition duration-300 ${className}`}
      {...rest}
    >
      {/* Loader */}
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          {/* Icon Left */}
          {Icon && iconPosition === "left" && <Icon size={20} />}
          {children}
          {/* Icon Right */}
          {Icon && iconPosition === "right" && <Icon size={20} />}
        </>
      )}
    </button>
  );
};

export default CustomButton;
