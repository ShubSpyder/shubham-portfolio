import CVHeader from "./cv-components/CVHeader";
import Overview from "./cv-components/Overview";
import Education from "./cv-components/Education";
import Experience from "./cv-components/Experience";
import TechnicalSkills from "./cv-components/TechnicalSkills";
import CVProjects from "./cv-components/CVProjects";

const CV = () => {
    return (
        <div className="max-w-4xl">
            <CVHeader />
            <Overview />
            <Education />
            <Experience />
            <TechnicalSkills />
            <CVProjects />
        </div>
    );
};

export default CV;
