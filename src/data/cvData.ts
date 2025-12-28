export interface Education {
    institution: string;
    degree: string;
    location: string;
    duration: string;
    coursework: string[];
}

export interface Experience {
    company: string;
    role: string;
    location: string;
    duration: string;
    achievements: string[];
    initialRole?: string;
}

export interface Project {
    name: string;
    company?: string;
    technologies: string;
    url?: string;
    description: string[];
}

export interface CVData {
    name: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    overview: string;
    education: Education[];
    experience: Experience[];
    technicalSkills: {
        languages: string;
        frontend: string;
        backend: string;
        cloudDevOps: string;
        concepts: string;
        tools: string;
    };
    projects: Project[];
    personalProjects: string[];
}

export const cvData: CVData = {
    name: "Shubham Shukla",
    location: "Powai, Mumbai",
    phone: "+91 8779720105",
    email: "shubham.is@protonmail.com",
    linkedin: "LinkedIn",
    github: "GitHub",
    overview: "Software Engineer with 6+ years of experience developing scalable web applications using Angular and the MEAN stack, with hands-on experience in React. Worked across fintech, insurance, and e-commerce domains.",

    education: [
        {
            institution: "Mumbai University",
            degree: "Bachelor of Science in Information Technology",
            location: "Mumbai",
            duration: "Jun 2018 - Apr 2019",
            coursework: [
                "Relevant Coursework: Programming language fundamentals (C++, Java, JS), Prob & Stat in CS (Python), Intro to CS II (C++), Linear Algebra w/Computational Applications (Python)"
            ]
        }
    ],

    experience: [
        {
            company: "ICICI Lombard",
            role: "Software Developer",
            location: "Mumbai",
            duration: "July 2022 - Current",
            achievements: [
                "Developed and worked on 4 micro frontend applications (Nysa, Nysa Rio, Nysa Floater, Nysa Lite) for scalable web solutions.",
                "Implemented 40+ new features in existing products, handled production bug fixes reducing bugs by 20%, and enhanced security compliance. Improved page load time by 25% by removing memory leaks and removing unnecessary api calls.",
                "Initially joined as a third-party consultant via Pinnacle Technologies before transitioning to a direct payroll role based on good performance."
            ]
        },
        {
            company: "Rupeeseed Technologies",
            role: "Software Developer",
            location: "Mumbai",
            duration: "July 2021 - July 2022",
            achievements: [
                "Built and maintained Angular-based user interfaces used by 10,000+ active users, improving page load performance by 25%.",
                "Collaborated with cross-functional teams (backend, QA, product) to deliver 15+ features and enhancements across multiple releases.",
                "Contributed to large-scale fintech platforms including MStock.com (Mirae Asset) and Motilal Oswal Trading Web App, supporting high-traffic trading workflows."
            ]
        },
        {
            company: "Shukul Infotech",
            role: "Software Developer",
            location: "Surat",
            duration: "Dec 2020 - Jun 2021",
            achievements: [
                "Worked closely with project managers to define milestones and successfully delivered features within 100% of planned timelines.",
                "Developed and optimized MEAN stack features for Itskeedi e-commerce platform, improving user flow efficiency and reducing reported UI issues by 30%. Implementing Various features."
            ]
        },
        {
            company: "Cateina Technologies",
            role: "Jr. Software Engineer",
            location: "Mumbai",
            duration: "Oct 2019 - Oct 2020",
            achievements: [
                "Gained hands-on experience in full-stack development using the MEAN stack at a fast-paced startup environment.",
                "Contributed to 2 client projects, with primary responsibility on Comgo.io, supporting feature development and bug resolution."
            ]
        }
    ],

    technicalSkills: {
        languages: "JavaScript (ES6+), TypeScript, HTML5, CSS3",
        frontend: "Angular, React.js, NgRx, RxJS, Redux, Recoil, Bootstrap, jQuery",
        backend: "Node.js, Express.js, REST APIs",
        cloudDevOps: "AWS (S3, CloudFront, IAM), CI/CD (GitHub Actions)",
        concepts: "State Management, Component Architecture, Asynchronous Programming, DSA (Foundational), Authentication & Authorization, Agile/Scrum",
        tools: "Git, npm, VS Code, Postman"
    },

    projects: [
        {
            name: "Nysa (ICICI Lombard)",
            technologies: "Angular, NgRx, RxJS, Microfrontends",
            url: "nysa.icicilombard.com",
            description: [
                "Contributed to the creation of a legacy ASP.NET insurance platform to a modern Angular-based microfrontend architecture.",
                "Implemented state management using NgRx and optimized data flows with RxJS, improving UI responsiveness and maintainability."
            ]
        },
        {
            name: "MStock (Mirae Asset)",
            technologies: "Angular",
            url: "trade.mstock.com",
            description: [
                "Developed and maintained core UI modules for a high-traffic stock trading platform supporting real-time market data.",
                "Worked on performance optimization and bug fixes for trading workflows used by thousands of daily active users."
            ]
        },
        {
            name: "It's Keedi",
            technologies: "Angular, Node.js, Express, MongoDB",
            description: [
                "Built features for a location-based e-commerce platform enabling users to discover products from nearby registered shops.",
                "Integrated frontend and backend services to improve product listing accuracy and user navigation flow."
            ]
        },
        {
            name: "Comgo.io",
            technologies: "Angular, Node.js, Express, MongoDB",
            url: "app.comgo.io",
            description: [
                "Worked on a donation platform for a Spain-based client, contributing to frontend features and backend API integrations.",
                "Collaborated with an international team to deliver stable releases in a startup environment."
            ]
        }
    ],

    personalProjects: [
        "Open Trivia Quiz, Lame Jokes, Resume Builder App (WIP)",
        "Built interactive Angular applications to strengthen frontend fundamentals, API integration, and state handling."
    ]
};
