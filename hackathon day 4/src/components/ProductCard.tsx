"use client"

import type React from "react"
import { CiHeart } from "react-icons/ci"
import { FaHeart, FaShoppingCart } from "react-icons/fa"
import { FaGasPump, FaUsers } from "react-icons/fa"
import { GiGearStickPattern } from "react-icons/gi"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "./contexts/CartContext"

type ProductCardProps = {
  _id: string
  name: string
  brand: string
  type: string
  fuelCapacity: string
  transmission: string
  seatingCapacity: string
  pricePerDay: string
  originalPrice: string | null
  tags: string[]
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({
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
  image,
}) => {
  const { addToCart } = useCart()
  const isFavorite = tags.includes("popular") || tags.includes("recommended")

  const handleAddToCart = () => {
    addToCart({
      _id,
      name,
      brand,
      type,
      pricePerDay: Number.parseFloat(pricePerDay),
      image,
      days: 1,
    })
  }

  return (
    <div className="bg-white rounded-[10px] p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-[22px] font-bold text-gray-800">{name}</h3>
          <p className="text-[16px] text-gray-400">
            {brand} - {type}
          </p>
        </div>
        <button className="p-1">
          {isFavorite ? <FaHeart className="w-6 h-6 text-red-500" /> : <CiHeart className="w-6 h-6 text-gray-400" />}
        </button>
      </div>

      <div className="relative w-full h-[180px] mb-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-gray-500">
          <FaGasPump className="w-5 h-5" />
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <GiGearStickPattern className="w-5 h-5" />
          <span>{transmission}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaUsers className="w-5 h-5" />
          <span>{seatingCapacity}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-[20px] font-bold text-lg">${pricePerDay}</span>
            <span className="text-gray-400 text-sm">/day</span>
          </div>
          {originalPrice && <span className="text-gray-400 line-through">${originalPrice}</span>}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="p-2 text-[#3563E9] hover:bg-blue-50 rounded-lg transition-colors"
            aria-label="Add to cart"
          >
            <FaShoppingCart size={20} />
          </button>
          <Link href="/pages/detailcarRent">
            <button className="bg-[#3563E9] text-xs text-white px-3 py-2 rounded-[4px] hover:bg-blue-700 transition-colors">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

