import Link from 'next/link'

export default function OrderSuccess() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center py-20">
      <h1 className="text-5xl font-bold text-green-600 mb-8">سفارش شما با موفقیت ثبت شد!</h1>
      <p className="text-2xl text-gray-700 mb-12">به زودی با شما تماس می‌گیریم</p>
      <Link href="/" className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-xl hover:bg-indigo-700">
        بازگشت به فروشگاه
      </Link>
    </div>
  )
}
