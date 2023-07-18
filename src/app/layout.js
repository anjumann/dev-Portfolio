import './globals.css'

export const metadata = {
  title: 'Anjuman Raj',
  description: 'just living my life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
