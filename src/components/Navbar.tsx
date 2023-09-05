import React from 'react'
import ModeToggle from './elements/ModeToggle'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <>
        <div className="flex flex-row justify-between items-center px-2 md:px-10 lg:px-20 pt-4">
            <div className=" font-borel text-2xl "> anjuman raj </div>
            <div className="flex flex-row gap-x-4">
                <div className="">
                    <SocialLinks/>
                </div>
                <div className="">
                    <ModeToggle/>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Navbar