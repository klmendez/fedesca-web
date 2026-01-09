import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import FloatingButtons from '@/components/FloatingButtons'

export const metadata = {
  title: 'FEDESCA – Colegio San Carlos',
  description:
    'Fundación Educativa para el Desarrollo Social, Cultural y Ambiental (FEDESCA) – Colegio San Carlos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  )
}