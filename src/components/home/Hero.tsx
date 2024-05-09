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
            <div className=" flex justify-center lg:justify-end   ">
                <Image priority={true} src='/images/anjuman.png' width={300} height={700} alt='ofc my pic' className='rounded-md shadow-white  cursor-pointer ' />
            </div>
        </div>
    )
}

export default Hero