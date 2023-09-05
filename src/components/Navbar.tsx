import React from 'react'
import ModeToggle from './elements/ModeToggle'
import SocialLinks from './SocialLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10 lg:px-20 gap-y-9 pt-4">
            <Link href='/' > <div className=" font-borel text-2xl mt-3 cursor-pointer"> anjuman raj </div></Link>
            <div className="flex flex-row gap-x-4 ">
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