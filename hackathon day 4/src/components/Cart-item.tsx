import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"

interface CartItemProps {
  _id: string
  name: string
  brand: string
  type: string
  pricePerDay: number
  image: string
  days: number
  onRemove: () => void
  onUpdateDays: (days: number) => void
}

export function CartItem({ name, brand, type, pricePerDay, image, days, onRemove, onUpdateDays }: CartItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="w-32 h-24">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} ${type}`}
          width={128}
          height={96}
          className="w-full h-full object-cover rounded-md grayscale hover:grayscale-0 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-gray-500">
              {brand} - {type}
            </p>
          </div>
          <button onClick={onRemove} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="h-8 w-8 flex items-center justify-center border rounded-full"
              onClick={() => onUpdateDays(Math.max(1, days - 1))}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-12 text-center">{days} days</span>
            <button
              className="h-8 w-8 flex items-center justify-center border rounded-full"
              onClick={() => onUpdateDays(days + 1)}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="text-right">
            <p className="font-semibold">${(pricePerDay * days).toFixed(2)}</p>
            <p className="text-xs text-gray-500">${pricePerDay.toFixed(2)}/day</p>
          </div>
        </div>
      </div>
    </div>
  )
}
