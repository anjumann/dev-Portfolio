import React from 'react';

const experience = [
    {
        "position": "SDE I",
        "company": "Heyhomie.me",
        "duration": "July 2024 - Present · 6+ mons",
        "description": [
            "Developed and maintained scalable web applications using NestJS and Next.js, enhancing user experience and operational efficiency.",
            "Implemented intuitive UI/UX components with Material UI and React Hook Form, optimizing data handling and validation in complex forms.",
            "Led backend integrations with third-party APIs, including Google Maps API for address autofill, boosting functionality and user convenience in the product."
        ]
    },
    {
        "position": "Full Web Developer",
        "company": "Barbarik AI · Fulltime Internship",
        "duration": "Jan 2024 - Apr 2024 · 4 mons",
        "description": [
            "Building an Incredible AI copilot for Financial Teams",
            "React, Next, TypeScript, Python, and more."
        ]
    },
    {
        "position": "Web Development Intern",
        "company": "PlotMyData · Internship",
        "duration": "Aug 2022 - Sep 2022 · 2 mons",
        "description": [
            "Develop visualizations with React.js & d3.js framework",
            "Designing of web application with the help of React.js, Tailwind"
        ]
    },
    {
        "position": "Web Lead",
        "company": "HacktivSpace Community · Community",
        "duration": "Jul 2023 - Present",
        "description": [
            "Actively Developing Projects while collaborating with fellow members",
            "Built projects such as HacktivCode and Hacktive Blog"
        ]
    }
];

const Work = () => {
    return (
        <div className='screen-width grid grid-cols-1 md:grid-cols-5 mt-20'>
            <div className="relative">
                <div className="section-heading">
                    My Work Experience
                </div>
            </div>
            <div className="py-2 px-6 col-span-4 font-rem text-justify space-y-8 place-content-center md:place-content-start">
                {experience.map((item, index) => (
                    <div key={index} className="">
                        <div className="text-xl font-rem flexStart flex-wrap">
                            {item.company} - <span className='text-base mt-1 font-thin px-1'>{item.position}</span>
                        </div>
                        <span className='text-sm mt-3'>{item.duration}</span>
                        <ul className='text-sm mt-3'>
                            {item.description.map((desc, idx) => (
                                <li key={idx} className='list-disc list-inside'>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
