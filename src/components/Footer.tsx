import React from 'react'
import ModeToggle from './elements/ModeToggle'
import SocialLinks from './SocialLinks'

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10 lg:px-20 py-2 mt-10 border-t-2">
            <div className=" font-borel text-sm "> anjuman raj </div>
            <div className="font-rem text-sm">
                Just a simple footer resting here
            </div>
            <div className="flex flex-row gap-x-4 text-sm">
                <SocialLinks />
                <div className="">
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Footer