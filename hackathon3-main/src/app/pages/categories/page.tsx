"use client"
import { useEffect, useState } from 'react'
import { client } from "@/sanity/lib/client"
import ProductCard from "@/components/ProductCard";

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
  image: string;
}

export default function Filters() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
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
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="flex max-w-8xl bg-gray-100">
      {/* Filters Sidebar */}
      <div className="w-1/4 bg-white lg:px-8 p-4 border-r hidden lg:block">
        <h2 className="text-lg font-semibold mb-4">Type</h2>
        <ul className="mb-6 space-y-5">
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
            <li key={type} className="flex items-center text-lg text-gray-600">
              <input 
                type="checkbox" 
                id={type} 
                className="w-4 h-4 mr-3 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]" 
              />
              <label htmlFor={type}>{type}</label>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mb-4">Capacity</h2>
        <ul className="mb-6 space-y-5">
          {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
            <li key={capacity} className="flex items-center text-lg text-gray-600">
              <input 
                type="checkbox" 
                id={capacity} 
                className="w-4 h-4 mr-3 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]" 
              />
              <label htmlFor={capacity}>{capacity}</label>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mb-4">Price</h2>
        <div className="px-2">
          <input 
            type="range" 
            className="w-full accent-[#3563E9]" 
            min="0"
            max="100" 
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="flex-1 p-4 mx-auto mb-20">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-72 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <ProductCard
                  key={car._id}
                  {...car}
                />
              ))}
            </div>
            <div className="flex justify-center items-center mt-16 relative">
              <button className="bg-[#3563E9] hover:bg-blue-700 tracking-widest px-5 p-2 rounded-lg text-white lg:text-lg text-sm transition-colors">
                Show more cars
              </button>
              <span className="absolute right-0 text-gray-500 text-lg">
                {cars.length} Cars
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

