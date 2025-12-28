import { cvData } from "../../../data/cvData";

const Overview = () => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3 border-b-2 border-base-300 pb-2">Overview</h2>
            <p className="text-base leading-relaxed">{cvData.overview}</p>
        </div>
    );
};

export default Overview;
