import { AiOutlineStar } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const frontend = [
    {
        "name": "Next.js",
        "color": "border-black dark:border-white",
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
        "name": "SCSS",
        "color": "border-pink-500",
        "logo": "scss-logo.png"
    },
    {
        "name": "Famous UI Libraries",
        "color": "border-blue-500",
        "logo": "ui-libraries-logo.png"
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
        "logo": "python-logo.png"
    },
    {
        "name": "Java",
        "color": "border-blue-700",
        "logo": "java-logo.png"
    },
    {
        "name": "JavaScript (ES6)",
        "color": "border-yellow-400",
        "logo": "javascript-logo.png"
    },
    {
        "name": "TypeScript",
        "color": "border-blue-600",
        "logo": "typescript-logo.png"
    }
];

const backend = [
    {
        "name": "Next.js",
        "color": "border-black dark:border-white",
        "logo": "nextjs-logo.png"
    },
    {
        "name": "Node.js",
        "color": "border-green-600",
        "logo": "nodejs-logo.png"
    },
    {
        "name": "PostgreSQL",
        "color": "border-blue-700",
        "logo": "postgresql-logo.png"
    },
    {
        "name": "MongoDB",
        "color": "border-green-700",
        "logo": "mongodb-logo.png"
    },
    {
        "name": "Redis",
        "color": "border-red-500",
        "logo": "redis-logo.png"
    },
    {
        "name": "Firebase",
        "color": "border-yellow-300",
        "logo": "firebase-logo.png"
    },
    {
        "name": "WebSocket",
        "color": "border-blue-300",
        "logo": "websocket-logo.png"
    },
    {
        "name": "GraphQL",
        "color": "border-pink-600",
        "logo": "graphql-logo.png"
    },
    {
        "name": "Prisma",
        "color": "border-green-500",
        "logo": "prisma-logo.png"
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
        "name": "Kubernetes",
        "color": "border-blue-700",
        "logo": "kubernetes-logo.png"
    },
    {
        "name": "Figma",
        "color": "border-red-600",
        "logo": "figma-logo.png"
    }
];

export const techStack = {
    frontend,
    languages,
    backend,
    tools
};


export const SocialLink = [
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
