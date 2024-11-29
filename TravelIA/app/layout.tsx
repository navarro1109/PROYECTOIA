import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'TravelIA',
  description: 'Encuentra tu destino ideal para viajar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={jost.className}>{children}</body>
    </html>
  )
}

