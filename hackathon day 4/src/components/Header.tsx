'use client'

import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { TbBellFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import filter from "/public/filter.png";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Profile from "/public/Profile.png";
import Link from "next/link";

import { useSearch } from "./contexts/SearchContext";

const Header = () => {
  const { searchQuery, setSearchQuery, suggestions } = useSearch();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <main>
      <header className="flex justify-between items-center px-4 lg:px-20 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600">MORENT</div>

        {/* Search - Large screens */}
        <div className="hidden lg:flex items-center w-full max-w-lg border px-4 py-2 rounded-full relative">
          <span className="text-gray-600 px-4">
            <CiSearch size={28} />
          </span>
          <input
            type="text"
            placeholder="Search something here"
            className="flex-grow bg-transparent outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="text-gray-500">
            <Image src={filter || "/placeholder.svg"} alt="icon" height={20} width={20} />
          </button>
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-500 justify-center">
          {/* Heart Icon */}
          <span className="border rounded-full p-2 hidden lg:block">
            <GoHeartFill size={20} />
          </span>
          <span className="border rounded-full p-2 ">
           
          <Link href={"/pages/cart"}><FaShoppingCart size={20} /></Link> 
          </span>

          {/* Notification Icon */}
          <span className="relative border rounded-full p-2 hidden lg:block">
            <span className="border rounded-full w-3 h-3 absolute -top-1 left-5 bg-red-500 hidden lg:block"></span>
            <TbBellFilled size={20} />
          </span>
     
       

          {/* Settings Icon */}
          <span className="border rounded-full p-2 hidden lg:block">
            <IoMdSettings size={20} />
          </span>

          {/* Profile Icon */}
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">

            <Link href={"/"}><Image
              src={Profile || "/placeholder.svg"}
              alt="User"
              className="w-full h-full object-cover"
            /></Link>
          </div>
        </div>
      </header>

      {/* Mobile Search */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2 w-full">
        {/* Search Bar */}
        <div className="flex items-center w-full max-w-md border px-4 py-2 rounded-full relative">
          <span className="text-gray-600 px-2">
            <CiSearch size={24} />
          </span>
          <input
            type="text"
            placeholder="Search something here"
            className="flex-grow bg-transparent outline-none text-sm"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="text-gray-500">
            <Image src={filter || "/placeholder.svg"} alt="icon" height={20} width={20} />
          </button>
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default Header;
