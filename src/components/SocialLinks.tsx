import Link from 'next/link'
import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'

const SocialLinks = () => {

    const iconClass = 'hover:scale-110 hover:-translate-y-1 transition-transform ease-in-out duration-200 '
    const SocialLink = [
        {
            name: 'Github',
            link: 'https://github.com/anjumann',
            logo: <FiGithub className={iconClass}/>
        },
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/anjuman-raj/',
            logo: <FiLinkedin className={iconClass} />
        },
        {
            name: 'Email',
            link: 'mailto:anjumanraj2@gmail.com',
            logo: <MdOutlineMail className={iconClass} />
        },
        {
            name: 'Github',
            link: 'https://github.com/anjumann/dev-Portfolio',
            logo: <AiOutlineStar className={iconClass} />
        },
    ]
    return (
        <div className=" mt-1  flex flex-row  justify-center  font-rem text-justify space-x-4 ">
            {SocialLink.map((item, index) => {
                return (
                    <div className="" key={index} >
                        <Link href={item.link} target='_blank'>
                            <div className="text-xl font-rem flexStart">
                                <span className='mt-1 mr-2' > {item.logo}</span> 
                            </div>
                        </Link>
                    </div>
                )
            })}
            
        </div>
    )
}

export default SocialLinks