'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, getCartTotal, getCartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">سبد خرید شما خالی است</h1>
        <Link
          href="/"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-xl hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">سبد خرید ({getCartCount()} مورد)</h1>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b dark:border-gray-700">
            <div className="flex-1">
              <h3 className="text-xl font-bold dark:text-white">{item.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">تعداد: {item.quantity}</p>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {(item.price * item.quantity).toLocaleString()} تومان
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600
                         dark:bg-red-600 dark:hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                {/* آیکون سطل زباله */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>حذف</span>
              </button>
            </div>
          </div>
        ))}

        <div className="mt-8 pt-8 border-t dark:border-gray-700">
          <div className="flex justify-between text-2xl font-bold">
            <span className="dark:text-white">مجموع:</span>
            <span className="text-indigo-600 dark:text-indigo-400">
              {getCartTotal().toLocaleString()} تومان
            </span>
          </div>
          <Link
            href="/checkout"
            className="w-full mt-6 bg-green-600 text-white py-4 rounded-xl text-xl hover:bg-green-700
                     dark:bg-green-500 dark:hover:bg-green-600 text-center block transition-colors"
          >
            پرداخت
          </Link>
        </div>
      </div>
    </div>
  );
}
