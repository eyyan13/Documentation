import React from "react";
import Image from "next/image";
import bluemercedes from "/public/bluemercedes.png"; // Update path if needed
import PaymentForm from "@/components/Payment";
import Link from "next/link";

const RentalForm = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Main Container */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Billing Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800">Billing Info</h2>
            <p className="text-sm text-gray-500 mb-4">Please enter your billing information</p>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-gray-600 font-semibold">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
                />
              </label>
              <label className="block">
                <span className="text-sm text-gray-600 font-semibold">Phone Number</span>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
                />
              </label>
              <label className="block">
                <span className="text-sm text-gray-600 font-semibold">Address</span>
                <input
                  type="text"
                  placeholder="Address"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
                />
              </label>
              <label className="block">
                <span className="text-sm text-gray-600 font-bold">Town / City</span>
                <input
                  type="text"
                  placeholder="Town or city"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
                />
              </label>
            </div>
          </div>

          {/* Rental Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800">Rental Info</h2>
            <p className="text-sm text-gray-500 mb-4">Please select your rental details</p>

            {/* Pick-Up Section */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="pickup"
                  name="rentalOption"
                  className="accent-blue-600 w-4 h-4"
                  defaultChecked
                />
                <span className="ml-2 font-semibold text-gray-800">Pick-Up</span>
              </label>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <label className="block">
                  <span className="text-sm text-gray-600">Location</span>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1">
                    <option>Select your city</option>
                    <option>Los Angeles</option>
                    <option>New York</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600">Date</span>
                  <input
                  placeholder="Select Your Date"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
                  />
            
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600">Time</span>
                  <input
                  placeholder="Select Your Time"
                    
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
                  />
                </label>
              </div>
            </div>

            {/* Drop-Off Section */}
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="dropoff"
                  name="rentalOption"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="ml-2 font-semibold text-gray-800">Drop-Off</span>
              </label>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <label className="block">
                  <span className="text-sm text-gray-600">Location</span>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1">
                    <option>Select your city</option>
                    <option>Los Angeles</option>
                    <option>New York</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600">Date</span>
                  <input
                  placeholder="Select Your Date"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600">Time</span>
                  <input
                  placeholder="Select Your Time"
                   
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800">Rental Summary</h2>
          <p className="text-sm text-gray-500 mb-4">
            Prices may change depending on the length of the rental and the price of your rental car.
          </p>
          <div className="flex items-center space-x-4">
            <Image src={bluemercedes} alt="Car" className="rounded-lg" />
            <div>
              <h3 className="text-gray-800 text-xl lg:text-2xl font-bold">Nissan GT - R</h3>
              <p className="text-sm text-gray-500">440+ Reviewer</p>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-semibold">$80.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Tax</p>
              <p className="font-semibold">$0</p>
            </div>
          </div>
          <div className="mt-4">
            <label className="block">
              <span className="text-sm text-gray-600">Promo Code</span>
              <input
                type="text"
                placeholder="Apply promo code"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 mt-1"
              />
            </label>
            <Link href={"/pages/dashboard"}>
            <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
              Apply now
            </button>
            </Link>
          </div>
          <div className="mt-4 border-t border-gray-200 pt-4 flex justify-between items-center">
            <p className="font-semibold text-lg">Total Rental Price</p>
            <p className="font-bold text-black text-2xl">$80.00</p>
          </div>
          <p className="text-sm text-gray-500">Overall price includes rental discount</p>
        </div>
      </div>
      <PaymentForm/>
    </div>
  );
};

export default RentalForm;
