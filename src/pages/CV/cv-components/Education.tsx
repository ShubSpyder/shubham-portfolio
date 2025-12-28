import { cvData } from "../../../data/cvData";

const Education = () => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3 border-b-2 border-base-300 pb-2">Education</h2>
            {cvData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-semibold">{edu.institution}</h3>
                            <p className="italic text-sm">{edu.degree}</p>
                        </div>
                        <div className="text-right text-sm">
                            <p>{edu.duration}</p>
                            <p className="text-gray-500">{edu.location}</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside ml-2 text-sm">
                        {edu.coursework.map((course, idx) => (
                            <li key={idx}>{course}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Education;
