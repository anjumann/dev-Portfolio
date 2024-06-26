import React from 'react'


const experience = [
    {
        "position": "Full Web Developer",
        "company": "Barbarik AI · Fulltime Internship",
        "duration": "Jan 2024 - Apr 2024 · 4 mons",
        "description": {
            1: "Building an Incredible AI copilot for Financial Teams",
            2: "React, Next, TypeScript, Python, and more.",
        }
    },
    {
        "position": "Web Development Intern",
        "company": "PlotMyData · Internship",
        "duration": "Aug 2022 - Sep 2022 · 2 mons",
        "description": {
            1: " Develop visualizations with React.js & d3.js framework",
            2: " Designing of web application with the help of React.js, Tailwind",
        }
    },
    {
        "position": "Web Lead ",
        "company": "HacktivSpace Community · Community",
        "duration": "Jul 2023 - Present ",
        "description": {
            1: " Activily Developing Projects while collabrating with fellow members",
            2: " Built projects such as HacktivCode and Hacktive Blog ",
        }
    },
]

const Work = () => {
    return (
        <div className='screen-width grid grid-cols-1 md:grid-cols-5 mt-20  ' >
            <div className="relative">
                <div className="section-heading">
                    My Work Experience
                </div>
            </div>
            <div className=" py-2 px-6 col-span-4 font-rem text-justify space-y-8 place-content-center md:place-content-start ">
                {
                    experience.map((item, index) => {
                        return (
                            <div key={index} className="">
                                <div className="text-xl font-rem flexStart flex-wrap">
                                    {item.company} - <span className='text-base mt-1 font-thin px-1' >{" "}{item.position} </span>
                                </div>
                                <span  className='text-sm mt-3'> {item.duration} </span>
                                <ul className='text-sm mt-3' >
                                    <li className='list-disc list-inside' >
                                        {item.description[1]}
                                    </li>
                                    <li className='list-disc list-inside' >
                                        {item.description[2]}
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }



            </div>
        </div>
    )
}

export default Work