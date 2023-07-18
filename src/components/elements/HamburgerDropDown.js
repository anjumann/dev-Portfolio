"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Navigation } from "./CenterMenu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import Link from "next/link"



export default function HamburgerDropDown() {


  return (
    <DropdownMenu  >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size='icon' >
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuLabel>Go to</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Navigation.map((item, index) => {

          return (
              <Link href={item.path} key={index} >
                <DropdownMenuItem className="border-0 hover:cursor-pointer hover:border-0 px-2 py-1.5 text-sm ">
                  {item.name}
                </DropdownMenuItem>
              </Link>
          )
        })
        }

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
