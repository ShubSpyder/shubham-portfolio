import { cvData } from "../../../data/cvData";

const Experience = () => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3 border-b-2 border-base-300 pb-2">Experience</h2>
            {cvData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-semibold">{exp.company}</h3>
                            <p className="italic text-sm">{exp.role}</p>
                        </div>
                        <div className="text-right text-sm">
                            <p>{exp.duration}</p>
                            <p className="text-gray-500">{exp.location}</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside ml-2 text-sm space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
