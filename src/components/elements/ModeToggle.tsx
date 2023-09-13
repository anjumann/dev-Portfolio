"use client"

import { useTheme } from "next-themes"
import {FiMoon, FiSun} from 'react-icons/fi'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export default function ModeToggle() {
  // const { theme, setTheme } = useTheme()

  // return (
  //   <DropdownMenu  >
  //     <DropdownMenuTrigger asChild>
  //       <Button variant="outline" size="icon" className="rounded-lg border-0 active:border-0 " >
  //         <FiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  //         <FiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  //         <span className="sr-only">Toggle theme</span>
  //       </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent align="end">
  //       <DropdownMenuItem onClick={() => setTheme("light")}>
  //         Light
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("dark")}>
  //         Dark
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("system")}>
  //         System
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // )


  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      <div className="p-1.5 text-lg cursor-pointer " onClick={handleThemeChange} >
        {theme === "dark" ? (
          <span>
            <FiSun className='text-gray-100' />
          </span>
        ) : (
          <span>
            <FiMoon className='text-gray-700' />
          </span>
        )}
      </div>
    </>
  )

}
