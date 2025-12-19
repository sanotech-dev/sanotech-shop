import Image from 'next/image'

async function getProduct(id) {
  // بعداً از دیتابیس — الان فیک
  const products = {
    "1": {
      name: "لپ‌تاپ گیمینگ Sanotech Pro",
      price: "۸۵,۰۰۰,۰۰۰ تومان",
      description: "لپ‌تاپ حرفه‌ای با RTX 4070، 32GB RAM، 1TB SSD",
      image: "/laptop.jpg",
      rating: 4.8,
      reviews: 127
    }
  }
  return products[id] || null
}

export default async function ProductPage({ params }) {
  const { id } = await params;  // این خط جدید — خیلی مهمه!
  const product = await getProduct(id);

  if (!product) {
    return <div className="text-center py-20 text-2xl">محصول پیدا نشد</div>
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-200 rounded-2xl w-full h-96 flex items-center justify-center text-gray-500">
          تصویر محصول (بعداً اضافه می‌شه)
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl">⭐ {product.rating}</span>
            <span className="mr-2 text-gray-600">({product.reviews} نظر)</span>
          </div>
          <p className="text-3xl font-bold text-indigo-600 mb-8">{product.price}</p>
          <p className="text-lg text-gray-700 mb-8">{product.description}</p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-indigo-700 transition">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  )
}
