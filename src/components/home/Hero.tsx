import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FaLongArrowAltRight } from 'react-icons/fa'
import SocialLinks from '../SocialLinks'

const Hero = () => {
    return (
        <div className='screen-width mt-10 grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1  ' >
            <div className="flex flex-col w-full justify-center text-center md:text-left md:justify-start items-start py-8 mt-6">
                <h1 className="text-4xl md:text-7xl py-2 dark:text-yellow-300 text-yellow-500 tracking-loose font-borel  w-fit mx-auto lg:mx-0  ">anjuman raj</h1>
                <h1 className="text-xl md:text-xl leading-relaxed md:leading-snug mb-2 font-rem ">
                    Crafting Digital Experiences Through Code: Where Pixels and Passion Converge.
                </h1>

                <div className="mt-10 flex flex-row gap-x-4 w-fit mx-auto lg:mx-0">
                    <Link href='/#projects' >
                        <Button variant="outline" className='group  ' > myProjects
                            <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                        </Button>
                    </Link>
                    <Link href='/resume' >
                        <Button variant="outline" className='group  ' > myRésumé
                            <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                        </Button>
                    </Link>
                </div>
                <div className='mt-5 w-fit mx-auto lg:mx-2' >
                    <SocialLinks />
                </div>
            </div>
            <div className=" flex items-center justify-center lg:justify-end ">
                <div className="w-fit h-fit overflow-hidden rounded-xl border-4 border-gray-600/40 dark:border-gray-200/40 p-1  ">
                    <Image priority={true} src='/images/anjuman3.png' width={280} height={300} alt='ofc my pic' className=' rounded-lg shadow-white hover:scale-125 cursor-pointer transition-all duration-500 ease-in-out ' />
                </div>
            </div>
        </div>
    )
}

export default Hero