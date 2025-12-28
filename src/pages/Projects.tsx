import HorizontalCard from "../compnents/HorizontalCard";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div>
            <div className="text-3xl w-full font-bold mb-5">My Projects {"</>"}</div>

            {projects.map((project, index) => (
                <div key={project.id}>
                    <HorizontalCard
                        title={project.title}
                        img={project.image}
                        desc={project.description}
                        url={project.liveLink || project.githubLink || "#"}
                        target="_blank"
                        disclaimer={project.disclaimer}
                    />
                    {index < projects.length - 1 && <div className="divider my-5"></div>}
                </div>
            ))}
        </div>
    )
}

export default Projects;