import { cvData } from "../../../data/cvData";

const CVProjects = () => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3 border-b-2 border-base-300 pb-2">Projects</h2>
            {cvData.projects.map((project, index) => (
                <div key={index} className="mb-5">
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold inline">
                            {project.name}
                            {project.company && <span> ({project.company})</span>}
                        </h3>
                        <span className="text-sm italic ml-2">| {project.technologies}</span>
                        {project.url && (
                            <span className="text-sm ml-2">
                                | <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="link link-hover">{project.url}</a>
                            </span>
                        )}
                    </div>
                    <ul className="list-disc list-inside ml-2 text-sm space-y-1">
                        {project.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Personal Projects</h3>
                <ul className="list-disc list-inside ml-2 text-sm space-y-1">
                    {cvData.personalProjects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CVProjects;
