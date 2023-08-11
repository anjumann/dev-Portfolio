import React from 'react'
import ModeToggle from './elements/ModeToggle'
import MenuDropdown from './elements/MenuDropdown'

const Navbar = () => {
  return (
    <>
        <div className="flex flex-row justify-between items-center px-20 pt-4">
            <div className=""> Anjuman Raj </div>
            <div className="flex flex-row gap-2">
                <div className="">
                    <ModeToggle/>
                </div>
                <div className="">
                    <MenuDropdown/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar