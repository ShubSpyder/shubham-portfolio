import comgoImg from '../assets/images/projects/comgo.png';
import mstockImg from '../assets/images/projects/mstock.png';
import nysaImg from '../assets/images/projects/nysa.png';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    githubLink?: string;
    liveLink?: string;
    disclaimer?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Nysa",
        description: "A comprehensive agent-facing application for ICICI Lombard designed to streamline vehicle insurance policy bookings. Built with Angular and .NET for robust performance.",
        image: nysaImg,
        techStack: ["Angular", ".Net", "TypeScript", "Vite"],
        githubLink: "",
        liveLink: "https://nysa.icicilombard.com/#/login",
        disclaimer: "This project belongs to ICICI Lombard."
    },
    {
        id: 2,
        title: "MStock",
        description: "An advanced stock management and tracking platform developed for Mirae Asset. Engineered using Angular and Spring Boot to ensure real-time data accuracy.",
        image: mstockImg,
        techStack: ["Angular", "Springboot", "TypeScript", "Vite"],
        githubLink: "",
        liveLink: "https://mstock.com",
        disclaimer: "This project belongs to Mirae Asset."
    },
    {
        id: 3,
        title: "Comgo",
        description: "A transparent platform for tracking donations and managing NGOs effectively. Powered by Angular, Node.js, and MongoDB for dynamic data management.",
        image: comgoImg,
        techStack: ["Angular", "Node.js", "MongoDB", "TypeScript", "Vite"],
        githubLink: "",
        liveLink: "https://comgo.io",
        disclaimer: "This project belongs to Comgo."
    },


];
