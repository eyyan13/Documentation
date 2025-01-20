'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";

import { useSearch } from "./contexts/SearchContext";

interface Car {
  _id: string;
  name?: string;
  brand?: string;
  type?: string;
  fuelCapacity?: string;
  transmission?: string;
  seatingCapacity?: string;
  pricePerDay?: string;
  originalPrice?: string | null;
  tags?: string[];
  image?: string;
}

const CarGrid: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { searchQuery } = useSearch();

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await client.fetch(`*[_type == "cars"]{
          _id,
          name,
          brand,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          tags,
          "image": image.asset->url
        }`);
        setCars(result);
      } catch (err) {
        setError("Failed to fetch car data. Please try again later.");
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const query = searchQuery.toLowerCase();
    return (
      car.name?.toLowerCase().includes(query) ||
      car.brand?.toLowerCase().includes(query) ||
      car.type?.toLowerCase().includes(query) ||
      car.tags?.some(tag => tag.toLowerCase().includes(query)) ||
      false
    );
  });

  return (
    <div className="p-4 lg:px-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Popular Cars</h2>
        <Link href="/pages/categories" className="text-[#3563E9] hover:underline">
          View All
        </Link>
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading cars...</p>}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Cars Grid */}
      {!loading && !error && filteredCars.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <ProductCard key={car._id} {...car} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredCars.length === 0 && (
        <p className="text-center text-gray-500">No cars found matching your search.</p>
      )}

      {/* Footer Section */}
      {!loading && !error && filteredCars.length > 0 && (
        <div className="flex justify-center items-center mt-16 relative mb-10">
          <Link href="/pages/categories">
            <button className="bg-[#3563E9] hover:bg-blue-700 tracking-widest px-5 py-2 rounded-lg text-white lg:text-lg text-sm transition-colors">
              Show more cars
            </button>
          </Link>
          <span className="absolute right-0 text-gray-500 text-lg">{filteredCars.length} Cars</span>
        </div>
      )}
    </div>
  );
};

export default CarGrid;

