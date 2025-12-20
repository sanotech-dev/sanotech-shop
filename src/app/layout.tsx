import type { Metadata } from 'next'
import { CartProvider } from '@/context/CartContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sanotech Shop',
  description: 'فروشگاه آنلاین حرفه‌ای Sanotech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
