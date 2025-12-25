import ClientProduct from './ClientProduct'

async function getProduct(id) {
  const products = {
    "1": {
      id: "1",
      name: "لپ‌تاپ گیمینگ Sanotech Pro",
      price: "۸۵,۰۰۰,۰۰۰ تومان",
      priceNumber: 85000000,
      stock: 12,
      description: "لپ‌تاپ حرفه‌ای با RTX 4070، 32GB RAM، 1TB SSD",
      rating: 4.8,
      reviews: 127
    }
  }
  return products[id] || null
}

export default async function ProductPage({ params }) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return <div className="text-center py-20 text-2xl">محصول پیدا نشد</div>
  }

  return (
    <ClientProduct product={product} />
  )
}
