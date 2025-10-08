import React from "react";
import CoinTable from "../../components/CoinTable";
import { setQuery } from "../../redux";
import { debounce } from "../../utils";
import { useTheme } from "../../contexts/ThemeContext";
import { SunIcon, MoonIcon, SearchIcon, TrendingUpIcon } from "../Icons";
import "./Home.css";

const Home: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  
  const onChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <TrendingUpIcon className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CoinDash
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                  Real-time crypto tracker
                </p>
              </div>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="text-yellow-500" size={20} />
              ) : (
                <MoonIcon className="text-gray-700" size={20} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Search & Discover Cryptocurrencies
          </h2>
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="text-gray-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search coins and tokens..."
              onChange={debounce(onChange, 500)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       placeholder-gray-400 dark:placeholder-gray-500 
                       shadow-md focus:shadow-lg transition-all duration-200"
            />
          </div>
        </div>

        {/* Coin Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <CoinTable />
        </div>
      </section>
    </div>
  );
};

export default Home;
