import React from 'react'
import CenterMenu from '@/components/elements/CenterMenu'
import ThemeToggle from '@/components/elements/ThemeToggle'
import HamburgerDropDown from './elements/HamburgerDropDown'

const Nav = () => {
  return (
    <>
      <div className="application-width flex justify-between px-2 py-2">
        <div className="logo">Anjuman</div>
        <div className="hidden md:block">
          <CenterMenu />
        </div>
        <div className="Side-btns">
          <div className="flex gap-x-2 items-center justify-center">
            <ThemeToggle />
            <span className='md:hidden' >
            <HamburgerDropDown  />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav