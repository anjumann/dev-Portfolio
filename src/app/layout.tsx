import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import { Toaster } from "@/components/ui/toaster"
import localFont from 'next/font/local'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const borel = localFont({ src: '../fonts/Borel-Regular.ttf', variable: '--font-borel' })
const rem = localFont({ src: '../fonts/Rem.ttf', variable: '--font-rem' })

export const metadata: Metadata = {
  title: 'Anjuman - Portfolio',
  description: '',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${borel.variable} ${rem.variable} ${inter.className}`} >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
            <Navbar />
            {children}
            <Footer />
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
