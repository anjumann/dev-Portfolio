import SocialLinks from '@/components/SocialLinks'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import type { Metadata } from 'next'
import PDFPreviewer from '@/components/PDFPreviewer'

export const metadata: Metadata = {
    title: 'Anjuman - Resume',
    description: "Anjuman Raj's Resume",
  }


const page = () => {
    return (
        <div className=' w-fit mx-auto my-14' >
            <div className="my-12">
                <h1 className="text-3xl md:text-5xl py-2 text-yellow-300 tracking-loose font-borel  w-fit mx-auto lg:mx-0  ">my résumé  </h1>

                <div className="mt-10 flex flex-row gap-x-4 w-fit mx-auto lg:mx-0 flex-wrap gap-3 items-center justify-center ">
                    <Link href='/#contact' >
                        <Button variant="outline" className='group  ' > contactMe
                            <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                        </Button>
                    </Link>
                    <Link href='/' >
                        <Button variant="outline" className='group  ' > home
                            <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                        </Button>
                    </Link>
                    <Link href='/resume.pdf' download >
                        <Button variant="outline" className='group  ' > Download
                            <FaLongArrowAltRight className=" group-hover:translate-x-1 ml-2 transition-all duration-200 ease-in-out" />
                        </Button>
                    </Link>
                </div>
                <div className='mt-5 w-fit mx-auto lg:mx-2' >
                    <SocialLinks />
                </div>
            </div>
            {/* <iframe className=' w-[90vw] md:w-[60vw] h-[100vh] ' src="/resume.pdf" ></iframe> */}
            <PDFPreviewer src="/resume.pdf" />
        </div>
    )
}

export default page