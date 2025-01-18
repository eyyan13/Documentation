'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Shield } from 'lucide-react';
import visa from '/public/Visa.png';
import paypal from '/public/PayPal.png';
import bitcoin from '/public/Bitcoin.png';

export default function PaymentForm() {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');

  return (
    <div className="max-w-5xl mt-5 p-6 space-y-8 bg-white shadow-md rounded-lg">
      {/* Payment Method Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
            <p className="text-sm text-gray-500">Please enter your payment method</p>
          </div>
          <span className="text-sm text-gray-500">Step 3 of 4</span>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm space-y-6">
          {/* Credit Card Option */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={selectedMethod === 'credit-card'}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring focus:ring-blue-300"
              />
              <span className="text-sm font-medium">Credit Card</span>
            </label>
            <div className="flex space-x-2">
              <Image src={visa} alt="Visa" width={40} height={25} />
            </div>
          </div>

          {selectedMethod === 'credit-card' && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  placeholder="Card number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVC</label>
                <input
                  type="text"
                  placeholder="CVC"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Card Holder</label>
                <input
                  type="text"
                  placeholder="Card holder"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
          )}

          {/* PayPal Option */}
          <div className="flex items-center justify-between border-t pt-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={selectedMethod === 'paypal'}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring focus:ring-blue-300"
              />
              <span className="text-sm font-medium">PayPal</span>
            </label>
            <Image src={paypal} alt="PayPal" width={80} height={30} />
          </div>

          {/* Bitcoin Option */}
          <div className="flex items-center justify-between border-t pt-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                value="bitcoin"
                checked={selectedMethod === 'bitcoin'}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring focus:ring-blue-300"
              />
              <span className="text-sm font-medium">Bitcoin</span>
            </label>
            <Image src={bitcoin} alt="Bitcoin" width={80} height={30} />
          </div>
        </div>
      </div>

      {/* Confirmation Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Confirmation</h2>
            <p className="text-sm text-gray-500">We are getting to the end. Just few clicks and your rental is ready!</p>
          </div>
          <span className="text-sm text-gray-500">Step 4 of 4</span>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm space-y-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring focus:ring-blue-300"
            />
            <span className="text-sm text-gray-600">
              I agree with sending marketing and newsletter emails. No spam, promised!
            </span>
          </label>

          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring focus:ring-blue-300"
            />
            <span className="text-sm text-gray-600">
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>
      </div>

      {/* Rent Now Button */}
      <Link href="/pages/dashboard">
        <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition mt-5">
          Rent Now
        </button>
      </Link>

      {/* Security Message */}
      <div className="flex items-center space-x-2 text-gray-500">
        <Shield className="w-5 h-5" />
        <div>
          <p className="text-sm font-medium">All your data are safe</p>
          <p className="text-xs">We are using the most advanced security to provide you the best experience ever.</p>
        </div>
      </div>
    </div>
  );
}
