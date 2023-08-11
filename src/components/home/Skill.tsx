import React from 'react'
import { Button } from '../ui/button'

const frontend = [
    {
        "name": "Next.js",
        "color": "#000000",
        "logo": "nextjs-logo.png"
    },
    {
        "name": "React.js",
        "color": "#61DAFB",
        "logo": "reactjs-logo.png"
    },
    {
        "name": "Tailwind CSS",
        "color": "#38B2AC",
        "logo": "tailwindcss-logo.png"
    },
    {
        "name": "Framer Motion",
        "color": "#0055FF",
        "logo": "framer-motion-logo.png"
    }
]

const languages = [
    {
        "name": "Python",
        "color": "#3776AB",
        "logo": "python_logo.png"
    },
    {
        "name": "Java",
        "color": "#007396",
        "logo": "java_logo.png"
    },
    {
        "name": "JavaScript (ES6)",
        "color": "#F7DF1E",
        "logo": "javascript_logo.png"
    },
    {
        "name": "TypeScript",
        "color": "#007ACC",
        "logo": "typescript_logo.png"
    }
]

const backend = [
    {
        "name": "Next.js",
        "color": "#000000",
        "logo": "nextjs_logo.png"
    },
    {
        "name": "Node.js",
        "color": "#339933",
        "logo": "nodejs_logo.png"
    },
    {
        "name": "Firebase",
        "color": "#FFCA28",
        "logo": "firebase_logo.png"
    },
    {
        "name": "GraphQL",
        "color": "#E10098",
        "logo": "graphql_logo.png"
    },
    {
        "name": "Prisma",
        "color": "#3ECC52",
        "logo": "prisma_logo.png"
    }
]
const tools = [
    {
        "name": "ChatGPT",
        "color": "#000000",
        "logo": "chatgpt-logo.png"
    },
    {
        "name": "GitHub",
        "color": "#181717",
        "logo": "github-logo.png"
    },
    {
        "name": "Docker",
        "color": "#2496ED",
        "logo": "docker-logo.png"
    },
    {
        "name": "Figma",
        "color": "#F24E1E",
        "logo": "figma-logo.png"
    }
]
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
                            frontend.map((item, index) => {
                                return (
                                    <Button key={index} className={` border-4 border-${item.color} `} variant="outline" >
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
                    <div className='flex gap-4 mt-5 flex-wrap' >
                        {
                            backend.map((item, index) => {
                                return (
                                    <Button key={index} className={` border-4 border-[${item.color}] `} variant="outline" >
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
                            languages.map((item, index) => {
                                return (
                                    <Button key={index} className={` border-4 border-[${item.color}] `} variant="outline" >
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
                            tools.map((item, index) => {
                                return (
                                    <Button key={index} className={` border-4 border-[${item.color}] `} variant="outline" >
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