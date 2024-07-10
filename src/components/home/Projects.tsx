import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ProjectList = [
    {
        name: "QuadxCare",
        github: "",
        url: "https://www.quadxcare.com/home",
        description: [
            "Built a web-app to for a drone company which provide drone repair services.",
        ],
        image: 'quadxcare.png'
    },
    {
        name: "Barbarik Landing Page",
        github: "",
        url: "https://www.barbarik.ai/",
        description: [
            "Built a landing page for a startup company.",
        ],
        image: 'Barbarik.png'
    },
    {
        name: "My Portfolio site",
        github: "https://github.com/anjumann/dev-Portfolio",
        url: "https://anjuman.site/",
        description: [
            "This portfolio Site.",
        ],
        image: 'portfolio-new.png'
    },
    {
        name: "Sloth UI",
        github: "https://github.com/anjumann/sloth-ui",
        url: "https://sloth-ui.vercel.app/",
        description: [
            "A SaaS landing Page Template.",
        ],
        image: 'slothui.png'
    },
    {
        name: "Incridea'22",
        github: "https://github.com/anjumann/Incridea22",
        url: "https://incridea.in/",
        description: [
            "A full stack application to handle Students during College Fest.",
        ],
        image: 'incridea.png'
    },
    {
        name: "Finite Loop",
        github: "https://github.com/anjumann/finiteLoop",
        url: "https://www.finiteloop.co.in/",
        description: [
            "A full stack application to handle Students during College Fest.",
        ],
        image: 'finiteloop.png'
    },
    {
        name: "Hacktive Code",
        github: "https://github.com/anjumann/hacktivcode",
        url: "https://hacktivcode.vercel.app/",
        description: [
            "An AI assistant to help with Code and logic.",
        ],
        image: 'hacktivcode.png'
    },
]

const Projects = () => {
    return (
        <div id='projects' className='screen-width grid grid-cols-1 md:grid-cols-5 mt-20  ' >
            <div className="relative">
                <div
                    className="section-heading">
                    My Work
                </div>
            </div>
            <div className=" py-2 px-6 col-span-4 font-rem text-justify">
                {
                    ProjectList.map((project, index) => {
                        return (
                            <div className="grid grid-rows-2 md:grid-cols-4 gap-x-3 place-content-center md:place-content-start h-fit group " key={index}>
                                <div className="text-xl font-rem flexStart">
                                    <Image src={`/projects/${project.image}`} alt="nextjs" width={300} height={300} className='rounded-lg  group-hover:filter-none group-hover:scale-110 transition-all duration-200 ease-in-out ' />
                                </div>
                                <div className='px-3 md:col-span-3'>
                                    <h3 className='text-lg font-medium' >
                                        {project.name}
                                    </h3>
                                    <ul className='text-base font-normal mt-3' >
                                        {project.description.map((item, itemIndex) => (
                                            <li key={itemIndex}>- {item}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap  gap-3 mt-5">
                                        {
                                            project.github && (
                                                <Link href={project.github} target='_blank' >
                                                    <Button variant='outline'  >
                                                        projectGithub
                                                    </Button>
                                                </Link>
                                            )
                                        }
                                        {
                                            project.url && (
                                                <Link href={project.url} target='_blank'>
                                                    <Button variant='outline'  >
                                                        projectLink
                                                    </Button>
                                                </Link>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>  
                        )
                    })
                }




            </div>
        </div>
    )
}

export default Projects