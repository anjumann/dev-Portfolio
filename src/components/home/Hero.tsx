import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='screen-width mt-10 grid grid-rows-2 md:grid-cols-2' >
            <div className="flex flex-col w-full justify-start items-start py-8 mt-6">
                <h1 className="text-3xl md:text-5xl py-2 text-yellow-300 tracking-loose font-borel ">Anjuman Raj</h1>
                <h2 className="text-xl md:text-xl leading-relaxed md:leading-snug mb-2 font-rem ">
                    Crafting Digital Experiences Through Code: Where Pixels and Passion Converge.
                </h2>

                {/* <Link href="/"
                    className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent mt-4">
                    Explore Now</Link> */}
                <div className="mt-10 flex flex-row gap-x-4 ">
                    <Button variant="outline" className='group  ' > myProjects
                        <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                    </Button>
                    <Button variant="outline" className='group  ' > myContact
                        <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                    </Button>
                </div>
            </div>
            <div className=" flexCenter">
                <Image src='/images/anjuman.png' width={300} height={700} alt='ofc my pic' />
            </div>
        </div>
    )
}

export default Hero