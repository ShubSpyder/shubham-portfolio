import { cvData } from "../../../data/cvData";

const TechnicalSkills = () => {
    const skills = [
        { label: "Languages", value: cvData.technicalSkills.languages },
        { label: "Frontend", value: cvData.technicalSkills.frontend },
        { label: "Backend", value: cvData.technicalSkills.backend },
        { label: "Cloud & DevOps", value: cvData.technicalSkills.cloudDevOps },
        { label: "Concepts", value: cvData.technicalSkills.concepts },
        { label: "Tools", value: cvData.technicalSkills.tools }
    ];

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3 border-b-2 border-base-300 pb-2">Technical Skills</h2>
            <div className="space-y-2">
                {skills.map((skill, index) => (
                    <div key={index} className="text-sm">
                        <span className="font-semibold">{skill.label}:</span> {skill.value}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSkills;
