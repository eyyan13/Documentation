"use client"

import { useCart } from "@/components/contexts/CartContext"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CartSummary } from "@/components/Cart-summary"

export default function CartPage() {
  const { cartItems, removeFromCart, updateDays } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.pricePerDay * item.days, 0)
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + tax

  const handleCheckout = () => {
    console.log("Proceeding to checkout...")
  }

  return (
    <main className="container mx-auto py-8 max-w-7xl ">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Your cart is empty</div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center space-x-4 border-b pb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>
                      Model: {item.brand} - {item.type}
                    </p>
                    <p>Price: ${item.pricePerDay}/day</p>
                    <label>
                      Days:
                      <input
                        type="number"
                        value={item.days}
                        className="border rounded-md p-1 w-16 ml-2"
                        onChange={(e) => updateDays(item._id, Number(e.target.value))}
                        min="1"
                      />
                    </label>
                    <button className="text-red-500 hover:underline ml-4" onClick={() => removeFromCart(item._id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <CartSummary subtotal={subtotal} tax={tax} total={total} onCheckout={handleCheckout} />
        </div>
      </div>
      <div className="mt-8">
        <Link href="/">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    </main>
  )
}

