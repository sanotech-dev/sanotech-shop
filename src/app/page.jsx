'use client';

import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Home() {
  const { getCartCount } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-right mb-8">
        <Link
          href="/cart"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 inline-block dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          سبد خرید ({getCartCount()} مورد)
        </Link>
      </div>

      <h1 className="text-5xl font-bold text-center text-indigo-700 mb-12 dark:text-indigo-400">
        Sanotech Shop
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          href="/product/1"
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition dark:hover:shadow-gray-700/50"
        >
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-xl mb-4"></div>
          <h2 className="text-2xl font-bold dark:text-white">لپ‌تاپ گیمینگ Pro</h2>
          <p className="text-xl text-indigo-600 dark:text-indigo-400 mt-2">۸۵,۰۰۰,۰۰۰ تومان</p>
        </Link>

        {/* محصول ۲ */}
        <Link
          href="/product/2"
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition dark:hover:shadow-gray-700/50"
        >
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-xl mb-4"></div>
          <h2 className="text-2xl font-bold dark:text-white">هدفون حرفه‌ای</h2>
          <p className="text-xl text-indigo-600 dark:text-indigo-400 mt-2">۱۲,۵۰۰,۰۰۰ تومان</p>
        </Link>

        {/* محصول ۳ */}
        <Link
          href="/product/3"
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition dark:hover:shadow-gray-700/50"
        >
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-xl mb-4"></div>
          <h2 className="text-2xl font-bold dark:text-white">ماوس گیمینگ</h2>
          <p className="text-xl text-indigo-600 dark:text-indigo-400 mt-2">۴,۸۰۰,۰۰۰ تومان</p>
        </Link>
      </div>
    </div>
  )
}
