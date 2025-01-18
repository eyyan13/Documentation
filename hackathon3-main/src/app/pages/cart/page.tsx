'use client'

import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Button } from '@/components/ui/button';
// import { CartItem } from '@/components/Cart-item'
import { CartSummary } from '@/components/Cart-summary'

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Koenigsegg",
    model: "GT-R",
    price: 99,
    image: "/brownswift.png", // Ensure the path to the image is correct
    days: 3,
  },
  {
    id: 2,
    name: "Nissan",
    model: "GT-R",
    price: 85,
    image: "/greyswift.png",
    days: 2
  },
  {
    id: 3,
    name: "Rolls-Royce",
    model: "Phantom",
    price: 96,
    image: "/greyswift.png",
    days: 1
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const updateDays = (id: number, days: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, days } : item
      )
    )
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.days), 0)
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + tax

  const handleCheckout = () => {
    console.log('Proceeding to checkout...')
  }

  return (
    <main className="container mx-auto py-8 max-w-7xl ">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                  <Image
                    src={item.image} 
                    alt={item.name} 
                    width={100} 
                    height={100} 
                    className="rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>Model: {item.model}</p>
                    <p>Price: ${item.price}</p>
                    <label>
                      Days:
                      <input 
                        type="number" 
                        value={item.days} 
                        className="border rounded-md p-1 w-16 ml-2"
                        onChange={(e) => updateDays(item.id, Number(e.target.value))} 
                      />
                    </label>
                    <button 
                      className="text-red-500 hover:underline ml-4"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <CartSummary
            subtotal={subtotal}
            tax={tax}
            total={total}
            onCheckout={handleCheckout}
          />
        </div>
      <div className="mt-8">
        <Link href="/">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        </div>
      </div>
    </main>
  )
}
