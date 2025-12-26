import ClientProduct from './ClientProduct'

async function getProduct(id) {
  const res = await fetch(`http://localhost:5000/api/products`);
  const products = await res.json();
  return products.find(p => p.id === id) || null;
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
