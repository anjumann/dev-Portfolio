import React from 'react'

const Social = () => {
    return (
        <div className='screen-width grid grid-cols-1 md:grid-cols-5 mt-20  ' >
            <div className="relative">
                <div className="section-heading">
                    My Socials
                </div>
            </div>
            <div className=" py-2 px-6 col-span-4 font-rem text-justify space-y-2 ">
                <div className="">
                    <div className="text-xl font-rem flexStart">
                        Frontend
                    </div>
                   
                </div>
                <div className="">
                    <div className="text-xl font-rem flexStart">
                        Backend
                    </div>
                  
                </div>
                <div className="">
                    <div className="text-xl font-rem flexStart">
                        Languages
                    </div>
                   
                </div>
                <div className="">
                    <div className="text-xl font-rem flexStart">
                        Tools
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Social