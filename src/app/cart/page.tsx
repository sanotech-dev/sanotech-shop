'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, getCartTotal, getCartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-8">سبد خرید شما خالی است</h1>
        <Link
          href="/"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-xl hover:bg-indigo-700"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">سبد خرید ({getCartCount()} مورد)</h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b">
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600">تعداد: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-indigo-600">
                {(item.price * item.quantity).toLocaleString()} تومان
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 mt-2"
              >
                حذف
              </button>
            </div>
          </div>
        ))}

        <div className="mt-8 pt-8 border-t">
          <div className="flex justify-between text-2xl font-bold">
            <span>مجموع:</span>
            <span className="text-indigo-600">{getCartTotal().toLocaleString()} تومان</span>
          </div>
          <Link
            href="/checkout"
            className="w-full mt-6 bg-green-600 text-white py-4 rounded-xl text-xl hover:bg-green-700 text-center block"
          >
            پرداخت
          </Link>
        </div>
      </div>
    </div>
  );
}
