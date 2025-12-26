'use client'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

export default function ClientProduct({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-96 md:h-full">
          <Image
            src={product.image || "/laptop.jpg"}
            alt={product.name}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl">⭐ {product.rating}</span>
            <span className="mr-2 text-gray-600">({product.reviews} نظر)</span>
          </div>
          <p className="text-lg text-gray-700 mb-4">موجودی: {product.stock} عدد</p>
          <p className="text-3xl font-bold text-indigo-600 mb-8">{product.price}</p>
          <p className="text-lg text-gray-700 mb-8">{product.description}</p>
          <button
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.priceNumber })}
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-indigo-700 transition"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  )
}
