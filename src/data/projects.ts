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
        description: "An innovative solution for modern web challenges.",
        image: nysaImg,
        techStack: ["React", "TypeScript", "Vite"],
        githubLink: "https://github.com/yourusername/nysa",
        liveLink: "https://nysa.icicilombard.com/#/login",
        disclaimer: "This project belongs to ICICI Lombard."
    },
    {
        id: 2,
        title: "MStock",
        description: "Stock management and tracking application with real-time updates.",
        image: mstockImg,
        techStack: ["React", "TypeScript", "Node.js"],
        githubLink: "https://github.com/yourusername/mstock",
        liveLink: "https://mstock.com",
        disclaimer: "This project belongs to Mirae Asset."
    },
    {
        id: 3,
        title: "Comgo",
        description: "A comprehensive project showcasing modern web development practices.",
        image: comgoImg,
        techStack: ["React", "TypeScript", "Tailwind CSS"],
        githubLink: "https://github.com/yourusername/comgo",
        liveLink: "https://comgo.io",
        disclaimer: "This project belongs to Comgo."
    },


];
