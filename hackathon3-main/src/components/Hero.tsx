import React from "react";
import Image from "next/image";
import heroWhite from "/public/heroWhite.png"; // Update with correct image path
import heroGray from "/public/heroGray.png"; // Update with correct image path
import PickUpSection from "./LocationComponent"; // Update with the correct file path

const Hero = () => {
  return (
    <div className="bg-gray-50 px-4 lg:px-20 py-10">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-blue-200 p-6 rounded-lg flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            The Best Platform for Car Rental
          </h2>
          <p className="text-white text-sm mb-4">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-6/12 lg:w-3/12">
            Rental Car
          </button>
          <div className="mt-6 flex justify-center">
            <Image src={heroWhite} objectFit="contain" alt="Hero Car" />
          </div>
        </div>
        

        {/* Right Card */}
        <div className="bg-blue-400 p-6 rounded-lg hidden lg:block">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 ">
            Easy way to rent a car at a low price
          </h2>
          <p className="text-white text-sm mb-4">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-3/12 hover:bg-blue-600">
            Rental Car
          </button>
          <div className="mt-6 flex justify-center">
            <Image src={heroGray} objectFit="contain" alt="Hero Car Gray" />
          </div>
        </div>
      </div>

      {/* Pick-Up and Drop-Off Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Pick-Up Section */}
 
          <PickUpSection />
       

        {/* Drop-Off Section */}
     
          <PickUpSection />
      
      </div>
    </div>
  );
};

export default Hero;
