import HorizontalCard from "../compnents/HorizontalCard";
import profilePhoto from '../assets/images/profile-photo.jpg';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="pb-12 mt-5">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img src={profilePhoto} className="max-w-sm rounded-lg shadow-2xl w-40 md:w-60" />
                    <div>
                        <div className="text-xl py-1">Hi there 👋</div>
                        <div className="text-5xl font-bold">I'm Shubham</div>
                        <div className="text-3xl py-3 font-bold">Software Engineer</div>
                        <div className="py-2">
                            <text className="text-lg">
                                I am a passionate software engineer with expertise in building scalable web applications and solving complex problems. I love working with modern technologies like React, Node.js, and Cloud platforms to deliver exceptional user experiences.
                            </text>
                        </div>
                        <div className="mt-8">
                            <a className="btn btn-outline" href="mailto:contact@example.com" target="_blank">
                                Let's connect!
                            </a>
                            <Link to="/projects" className="btn btn-outline ml-5">
                                View Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-3xl w-full font-bold mb-2">Lastest Projects {"</>"}</div>
            </div>

            <HorizontalCard
                title="Portfolio Website"
                img="/project-1.jpg"
                desc="My personal portfolio website built with React and TailwindCSS. Features a responsive design, theme switcher, and dynamic routing."
                url="#"
                badge="NEW"
            />
            <div className="divider my-5"></div>
            <HorizontalCard
                title="E-commerce Dashboard"
                img="/project-2.jpg"
                desc="A comprehensive admin dashboard for managing products, orders, and customers. Built with Next.js and secure authentication."
                url="#"
            />
            <div className="divider my-5"></div>
            <HorizontalCard
                title="Task Management App"
                img="/project-3.jpg"
                desc="A productivity tool for organizing tasks and collaborating with teams. Includes real-time updates and drag-and-drop functionality."
                url="#"
                badge="BETA"
            />
        </div>
    );
}

export default Home;

