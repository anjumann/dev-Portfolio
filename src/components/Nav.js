import React from 'react'
import CenterMenu from '@/components/elements/CenterMenu'
import ThemeToggle from '@/components/elements/ThemeToggle'

const Nav = () => {
  return (
    <>
      <div className="application-width flex justify-between px-2 py-2">
        <div className="logo">Anjuman</div>
        <div className="center-btns">
          <CenterMenu />

        </div>
        <div className="Side-btns">  <div className=""> <ThemeToggle /> </div> </div>
      </div>
    </>
  )
}

export default Nav