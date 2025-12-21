'use client';

import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import Link from 'next/link'

export default function CheckoutPage() {
  const { cart, getCartTotal, getCartCount } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert('لطفاً همه فیلدها رو پر کن');
      return;
    }
    alert(`سفارش شما با موفقیت ثبت شد!\nمجموع: ${getCartTotal().toLocaleString()} تومان\nبه زودی با شما تماس می‌گیریم`);
    // بعداً سبد خرید رو خالی می‌کنیم
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-8">سبد خرید خالی است</h1>
        <Link href="/" className="bg-indigo-600 text-white px-8 py-4 rounded-xl">
          بازگشت به فروشگاه
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">پرداخت نهایی</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">اطلاعات ارسال</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border rounded-lg mb-4"
              required
            />
            <input
              type="tel"
              placeholder="شماره موبایل"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 border rounded-lg mb-4"
              required
            />
            <textarea
              placeholder="آدرس کامل"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-4 border rounded-lg mb-6 h-32"
              required
            />
            <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-xl text-xl hover:bg-green-700">
              پرداخت و ثبت سفارش
            </button>
          </form>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">خلاصه سفارش ({getCartCount()} مورد)</h2>
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>{(item.price * item.quantity).toLocaleString()} تومان</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 text-2xl font-bold flex justify-between">
            <span>مجموع:</span>
            <span className="text-green-600">{getCartTotal().toLocaleString()} تومان</span>
          </div>
        </div>
      </div>
    </div>
  )
}
