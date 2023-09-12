import SocialLinks from '@/components/SocialLinks'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const page = () => {
    return (
        <div className='min-h-screen w-fit mx-auto my-14' >
            <div className="my-14">
                <h1 className="text-3xl md:text-5xl py-2 text-yellow-300 tracking-loose font-borel  w-fit mx-auto lg:mx-0  ">my résumé  </h1>

                <div className="mt-10 flex flex-row gap-x-4 w-fit mx-auto lg:mx-0">
                    <Link href='/#projects' >
                        <Button variant="outline" className='group  ' > myProjects
                            <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                        </Button>
                    </Link>
                    <Link href='/' >
                        <Button variant="outline" className='group  ' > Home
                            <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                        </Button>
                    </Link>
                </div>
                <div className='mt-5 w-fit mx-auto lg:mx-2' >
                    <SocialLinks />
                </div>
            </div>
            <iframe className=' w-[90vw] md:w-[60vw] h-[100vh] ' src="/resume.pdf" ></iframe>
        </div>
    )
}

export default page