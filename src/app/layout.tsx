import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import { Toaster } from "@/components/ui/toaster"
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import StarsCanvas from '@/components/StarryBackground'

const borel = localFont({ src: '../fonts/Borel-Regular.ttf', variable: '--font-borel' })
const rem = localFont({ src: '../fonts/Rem.ttf', variable: '--font-rem' })

export const metadata: Metadata = {
  applicationName : "Anjuman",
  title: 'Anjuman - Portfolio',
  description: '',
  generator: "Next.js",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title:"Anjuman" ,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/icon-192x192.png" },
  ],
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${borel.variable} ${rem.variable}  overflow-y-scroll overflow-x-hidden  `} >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange enableSystem>
        {/* <StarsCanvas /> */}
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
