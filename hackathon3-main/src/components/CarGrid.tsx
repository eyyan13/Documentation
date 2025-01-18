"use client"
import React from "react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client"
import ProductCard from "./ProductCard";

interface Car {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string | null;
  tags: string[];
  image: string; // Change the type to string
}

const CarGrid: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
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
        "image": image.asset->url // Ensure this returns a string URL
      }`);
      setCars(result);
    };

    fetchCars();
  }, []);

  return (
    <div className="p-4 lg:px-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Popular Cars</h2>
        <Link href="/pages/categories" className="text-[#3563E9] hover:underline">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <ProductCard
            key={car._id}
            {...car}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-16 relative mb-10">
        <Link href="/pages/categories">
          <button className="bg-[#3563E9] hover:bg-blue-700 tracking-widest px-5 py-2 rounded-lg text-white lg:text-lg text-sm transition-colors">
            Show more cars
          </button>
        </Link>
        <span className="absolute right-0 text-gray-500 text-lg">{cars.length} Cars</span>
      </div>
    </div>
  );
};

export default CarGrid;