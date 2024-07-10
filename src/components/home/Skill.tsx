import React from 'react'
import { Button } from '../ui/button'
import { techStack } from '@/contants';



const Skill = () => {
    return (
        <div className='screen-width grid grid-cols-1 md:grid-cols-5 mt-20  ' >
            <div className="relative">
                <div className="section-heading">
                    Skill
                </div>
            </div>
            <div className=" py-2 px-6 col-span-4 font-rem text-justify space-y-2 ">
                <div className="">
                    <div className="text-xl font-rem flexStart">
                        Frontend
                    </div>
                    <div className='flex gap-4 mt-5 flex-wrap' >
                        {
                            techStack.frontend.map((item, index) => {
                                return (
                                    <Button key={index} className={` border-2 ${item.color} `} variant="outline" >
                                        {item.name}
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <div className="text-xl font-rem flexStart">
                        Backend
                    </div>
                    <div className='flex gap-4 mt-5 flex-wrap ' >
                        {
                            techStack.backend.map((item, index) => {
                                return (
                                    <Button key={index} className={` border-2 ${item.color} `} variant="outline" >
                                        {item.name}
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <div className="text-xl font-rem flexStart">
                        Languages
                    </div>
                    <div className='flex gap-4 mt-5 flex-wrap' >
                        {
                            techStack.languages.map((item, index) => {
                                return (
                                    <Button key={index} className={` border-2 ${item.color} `} variant="outline" >
                                        {item.name}
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <div className="text-xl font-rem flexStart">
                        Tools
                    </div>
                    <div className='flex gap-4 mt-5 flex-wrap' >
                        {
                            techStack.tools.map((item, index) => {
                                return (
                                    <Button key={index} className={` border-2 ${item.color} `} variant="outline" >
                                        {item.name}
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skill