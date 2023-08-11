import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'

import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const borel = localFont({ src: '../fonts/Borel-Regular.ttf', variable:'--font-borel' }) 


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
      <body className={`${borel.variable}  ${inter.className}`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
