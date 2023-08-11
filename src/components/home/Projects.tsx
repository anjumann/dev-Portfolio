import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Projects = () => {
    return (
        <div className='screen-width grid grid-cols-1 md:grid-cols-5 mt-20  ' >
            <div className="relative">
                <div
                 className="section-heading">
                    My Work
                </div>
            </div>
            <div className=" py-2 px-6 col-span-4 font-rem text-justify space-y-6 ">
                <div className="flex gap-x-2">
                    <div className="text-xl font-rem flexStart">
                        <Image src="/projects/portfolio.png" alt="nextjs" width={300} height={300} className='rounded-lg' />
                    </div>
                    <div className='px-3'>
                        loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        <div className="flex gap-3 mt-5">
                            <Button variant='outline'  >
                                projectGithub
                            </Button>
                            <Button variant='outline'  >
                                projectLink
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="flex gap-x-2">
                    <div className="text-xl font-rem flexStart">
                        <Image src="/projects/portfolio.png" alt="nextjs" width={300} height={300} className='rounded-lg' />
                    </div>
                    <div className='px-3'>
                        loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        <div className="flex gap-3 mt-5">
                            <Button variant='outline'  >
                                projectGithub
                            </Button>
                            <Button variant='outline'  >
                                projectLink
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="flex gap-x-2">
                    <div className="text-xl font-rem flexStart">
                        <Image src="/projects/portfolio.png" alt="nextjs" width={300} height={300} className='rounded-lg' />
                    </div>
                    <div className='px-3'>
                        loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        <div className="flex gap-3 mt-5">
                            <Button variant='outline'  >
                                projectGithub
                            </Button>
                            <Button variant='outline'  >
                                projectLink
                            </Button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Projects