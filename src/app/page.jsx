'use client';

import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Home() {
  const { getCartCount } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-right mb-8">
        <Link href="/cart" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 inline-block">
          سبد خرید ({getCartCount()} مورد)
        </Link>
      </div>

      <h1 className="text-5xl font-bold text-center text-indigo-700 mb-12">
        Sanotech Shop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/product/1" className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
          <h2 className="text-2xl font-bold">لپ‌تاپ گیمینگ Pro</h2>
          <p className="text-xl text-indigo-600 mt-2">۸۵,۰۰۰,۰۰۰ تومان</p>
        </Link>
        {/* ۲–۳ محصول دیگه اضافه کن */}
      </div>
    </div>
  )
}
