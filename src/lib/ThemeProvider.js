'use client'
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

const ThemeWrapper = ({children}) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem >{children}</NextThemesProvider>
  )
}

export default ThemeWrapper