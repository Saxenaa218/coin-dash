import React from "react";
import { LoaderPropTypes } from "./types";
import "./Loader.css";

const SpinIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 30, 
  className = "" 
}) => (
  <svg
    className={`animate-spin ${className}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 11-6.219-8.56" />
  </svg>
);

const Loader: React.FC<LoaderPropTypes> = (props) => {
  const { fontSize, text } = props;
  
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-30 animate-pulse"></div>
        <div className="relative bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
          <SpinIcon 
            size={fontSize || 30} 
            className="text-blue-600 dark:text-blue-400" 
          />
        </div>
      </div>
      {text && (
        <p className="text-gray-600 dark:text-gray-400 font-medium animate-pulse">
          {text}
        </p>
      )}
      {!text && (
        <p className="text-gray-600 dark:text-gray-400 font-medium animate-pulse">
          Loading cryptocurrencies...
        </p>
      )}
    </div>
  );
};

export default Loader;
