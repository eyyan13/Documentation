'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { client } from "@/sanity/lib/client";

interface Car {
  _id: string;
  name?: string;
  brand?: string;
  type?: string;
  tags?: string[];
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  suggestions: string[];
  setSuggestions: (suggestions: string[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [allCars, setAllCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const result = await client.fetch(`*[_type == "cars"]{
          _id,
          name,
          brand,
          type,
          tags
        }`);
        setAllCars(result);
      } catch (err) {
        console.error("Error fetching cars:", err);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const newSuggestions = allCars
        .filter(car => {
          const query = searchQuery.toLowerCase();
          return (
            car.name?.toLowerCase().includes(query) ||
            car.brand?.toLowerCase().includes(query) ||
            car.type?.toLowerCase().includes(query) ||
            car.tags?.some(tag => tag.toLowerCase().includes(query)) ||
            false
          );
        })
        .map(car => car.name ?? '')
        .filter(name => name !== '')
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, allCars]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, suggestions, setSuggestions }}>
      {children}
    </SearchContext.Provider>
  );
};

