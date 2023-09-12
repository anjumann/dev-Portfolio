import { StarIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'

const SocialLink = [
    {
        name: 'Github - /anjumann',
        link: 'https://github.com/anjumann',
        logo: <FiGithub />
    },
    {
        name: 'Linkedin - /in/anjuman-raj/',
        link: 'https://www.linkedin.com/in/anjuman-raj/',
        logo: <FiLinkedin />
    },
    {
        name: 'Email - anjumanraj2@gmail.com',
        link: 'mailto:anjumanraj2@gmail.com',
        logo: <MdOutlineMail />
    },
    {
        name: 'Please consider giving a star to this portfolio on GitHub.',
        link: 'https://github.com/anjumann/dev-Portfolio',
        logo: <AiOutlineStar  />
    },
]

const Social = () => {
    return (
        <div id='social' className='screen-width grid grid-cols-1 md:grid-cols-5 mt-20  ' >
            <div className="relative">
                <div className="section-heading">
                    My Socials
                </div>
            </div>
            <div className=" py-2 px-6 col-span-4 font-rem text-justify space-y-2 ">
                {SocialLink.map((item, index) => {
                    return (
                        <div className="" key={index} >
                            <Link href={item.link} target='_blank'>
                                <div className="text-xl font-rem flexStart">
                                    <span className='mt-1 mr-2' > {item.logo}</span> {item.name}
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Social