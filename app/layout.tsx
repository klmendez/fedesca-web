import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { Poppins, Inter } from 'next/font/google'

export const metadata = {
  title: 'FEDESCA ',
  description:
    'Fundación Educativa para el Desarrollo Social, Cultural y Ambiental (FEDESCA) – Colegio San Carlos.',
}
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FloatingButtons />
      </body>
    </html>
  )
}