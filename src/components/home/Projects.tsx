import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ProjectList = [
    {
        name: "INCRIDEA '22 OFFICIAL WEBSITE",
        github: "https://github.com/anjumann/Incridea22",
        url: "https://github.com/anjumann/Incridea22",
        description: [
            "Build to manage Students during the college fest.",
            "Used by 8000+ students from my college and other colleges"
        ],
        image: 'incridea.png'
    },
    {
        name: "This Portfolio",
        github: "https://github.com/anjumann/dev-Portfolio",
        url: "http://anjuman.site/",
        description: [
            "My portfolio build using NextJs 13",
        ],
        image: 'portfolio-new.png'

    },
    {
        name: "HacktivCode",
        github: "https://github.com/anjumann/hacktivcode",
        url: "https://hacktivcode.site/",
        description: [
            "AI powered Chatbot for coders",
        ],
        image: 'hacktivcode.png'

    },
    {
        name: "HyperLoom",
        github: "https://github.com/anjumann/HyperLoom",
        url: "https://hyperloom.anjuman.site/",
        description: [
            "UI for HyperLoom",
        ],
        image: 'hyperloom.png'

    },
    {
        name: "TechExhibit",
        github: "https://github.com/anjumann/TechExhibit",
        url: "https://tech-exhibit.vercel.app/",
        description: [
            "E commerce website for tech products (under-contruction) ",
        ],
        image: 'techexihibit.png'
    },
    {
        name: "Finite Loop",
        github: "https://github.com/anjumann/resumeBuilder",
        url: "https://github.com/anjumann/resumeBuilder",
        description: [
            "Developed using MERN Stack.",
            "Build to Manage and interact with club members.",
            "Used for 150+ Members of club."
        ],
        image: 'finiteloop.png'
    },
    // {
    //     name: "Resume Builder",
    //     github: "https://github.com/anjumann/resumeBuilder",
    //     url: "https://github.com/anjumann/resumeBuilder",
    //     description: [
    //         "Resume builder ",
    //     ],
    //     image:''
    // },

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
            <div className=" py-2 px-6 col-span-4 font-rem text-justify space-y-6 ">
                {
                    ProjectList.map((project, index) => {
                        return (
                            <div className="grid grid-rows-2 md:grid-cols-4 gap-x-3 place-content-center md:place-content-start h-fit group " key={index}>
                                <div className="text-xl font-rem flexStart">
                                    <Image src={`/projects/${project.image}`} alt="nextjs" width={300} height={300} className='rounded-lg md:grayscale group-hover:filter-none group-hover:scale-110 transition-all duration-200 ease-in-out ' />
                                </div>
                                <div className='px-3 md:col-span-3'>
                                    <h3>
                                        {project.name}
                                    </h3>
                                    <ul className='text-base font-thin mt-3' >
                                        {project.description.map((item, itemIndex) => (
                                            <li key={itemIndex}>- {item}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap  gap-3 mt-5">
                                        <Link href={project.github} target='_blank' >
                                            <Button variant='outline'  >
                                                projectGithub
                                            </Button>
                                        </Link>
                                        <Link href={project.url} target='_blank'>
                                            <Button variant='outline'  >
                                                projectLink
                                            </Button>
                                        </Link>
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