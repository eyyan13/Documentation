// components/Filters.jsx
import whitecar from "/public/whitecar.png"

import whiteswift from "/public/whiteswift.png"
import blackswift from "/public/blackswift.png"
import blueswift from "/public/blueswift.png"
import darkblueswift from "/public/darkblueswift.png"
import brownswift from "/public/brownswift.png"
import rollsroyce from "/public/rollsroyce.png"
import greyswift from "/public/greyswift.png"
import greycar from "/public/greycar.png"
import brightwhite from "/public/brightwhite.png"
import ProductCard from "@/components/ProductCard"; // Assuming your ProductCard component is in the same directory
export default function Filters() {
    const cars = [
        {
          image: whitecar, // Replace with your actual image URLs
          name: "Koenigsegg",
          type: "Sport",
          specs: { fuel: 90, transmission: "Manual", capacity: 2 },
          price: 99,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: greycar ,
          name: "Nissan GT-R",
          type: "Sport",
          specs: { fuel: 80, transmission: "Manual", capacity: 2 },
          price: 80,
          oldPrice: 100,
          isFavorite: false,
        },
        {
          image: rollsroyce,
          name: "Rolls-Royce",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: greycar ,
          name: "All New Rush",
          type: "Sport",
          specs: { fuel: 80, transmission: "Manual", capacity: 2 },
          price: 80,
          oldPrice: 100,
          isFavorite: false,
        },
        {
          image: greyswift ,
          name: "Nissan GT-R",
          type: "Sport",
          specs: { fuel: 80, transmission: "Manual", capacity: 2 },
          price: 80,
          oldPrice: 100,
          isFavorite: false,
        },
        {
          image: brownswift,
          name: "CR  - V",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: darkblueswift,
          name: "All New Terios",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: blackswift,
          name: "CR  - V",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: blueswift,
          name: "MG ZX Exclusice",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image:brightwhite,
          name: "New MG ZS",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: blueswift,
          name: "MG ZX Exclusice",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        
        {
          image: whiteswift,
          name: "New MG ZS",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
      ];
    return (
        <div className="flex max-w-8xl bg-gray-100 ">

        
      <div className="w-1/4 bg-white lg:px-8 p-4 border-t hidden lg:block">
        <h2 className="text-lg font-semibold mb-4">Type</h2>
        <ul className="mb-6 space-y-5">
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
            <li key={type} className="mb-2 text-lg text-gray-600">
              <input type="checkbox" id={type} className="mr-2" />
              <label htmlFor={type}>{type}</label>
            </li>
          ))}
        </ul>
  
        <h2 className="text-lg font-semibold mb-4">Capacity</h2>
        <ul className="mb-6 space-y-5">
          {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
            <li key={capacity} className="mb-2 text-lg text-gray-600">
              <input type="checkbox" id={capacity} className="mr-2" />
              <label htmlFor={capacity}>{capacity}</label>
            </li>
          ))}
        </ul>
  
        <h2 className="text-lg font-semibold mb-4">Price</h2>
        <input type="range" className="w-full" max="100" />

      </div>



      <div className="p-4   mx-auto mb-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <ProductCard
            key={index}
            image={car.image}
            name={car.name}
            type={car.type}
            specs={car.specs}
            price={car.price}
            oldPrice={car.oldPrice}
            isFavorite={car.isFavorite}
          />
        ))}
      </div>
        
      <div className="flex justify-center items-center mt-16 relative">
    <button className="bg-[#3563E9] tracking-widest px-5  p-2 rounded-lg text-white lg:text-lg text-sm">Showmorecar</button> 
    <span className="absolute right-0 text-gray-500 text-lg">120 Car</span>
      </div>
    </div>



      </div>
    );
  }
