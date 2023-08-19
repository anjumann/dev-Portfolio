import React from 'react'
import { Button } from '../ui/button'

const frontend = [
    {
        "name": "Next.js",
        "color": "border-black dark:border-white ",
        "logo": "nextjs-logo.png"
    },
    {
        "name": "React.js",
        "color": "border-blue-400",
        "logo": "reactjs-logo.png"
    },
    {
        "name": "Tailwind CSS",
        "color": "border-teal-500",
        "logo": "tailwindcss-logo.png"
    },
    {
        "name": "Framer Motion",
        "color": "border-blue-500",
        "logo": "framer-motion-logo.png"
    }
];

const languages = [
    {
        "name": "Python",
        "color": "border-blue-600",
        "logo": "python_logo.png"
    },
    {
        "name": "Java",
        "color": "border-blue-700",
        "logo": "java_logo.png"
    },
    {
        "name": "JavaScript (ES6)",
        "color": "border-yellow-400",
        "logo": "javascript_logo.png"
    },
    {
        "name": "TypeScript",
        "color": "border-blue-600",
        "logo": "typescript_logo.png"
    }
];

const backend = [
    {
        "name": "Next.js",
        "color": "border-black dark:border-white",
        "logo": "nextjs_logo.png"
    },
    {
        "name": "Node.js",
        "color": "border-green-600",
        "logo": "nodejs_logo.png"
    },
    {
        "name": "Firebase",
        "color": "border-yellow-300",
        "logo": "firebase_logo.png"
    },
    {
        "name": "GraphQL",
        "color": "border-pink-600",
        "logo": "graphql_logo.png"
    },
    {
        "name": "Prisma",
        "color": "border-green-500",
        "logo": "prisma_logo.png"
    }
];

const tools = [
    {
        "name": "ChatGPT",
        "color": "border-green-600",
        "logo": "chatgpt-logo.png"
    },
    {
        "name": "GitHub",
        "color": "border-gray-800",
        "logo": "github-logo.png"
    },
    {
        "name": "Docker",
        "color": "border-blue-500",
        "logo": "docker-logo.png"
    },
    {
        "name": "Figma",
        "color": "border-red-600",
        "logo": "figma-logo.png"
    }
];


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
                    <div className='flex gap-4 mt-5 flex-wrap' >
                        {
                            backend.map((item, index) => {
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
                            languages.map((item, index) => {
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
                            tools.map((item, index) => {
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