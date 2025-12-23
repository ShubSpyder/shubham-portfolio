import { Link } from "react-router-dom";

interface HorizontalCardProps {
    title: string;
    img: string;
    desc: string;
    url: string;
    badge?: string;
    target?: string;
}

const HorizontalCard = ({ title, img, desc, url, badge, target }: HorizontalCardProps) => {
    return (
        <div className="rounded-lg bg-base-100 hover:shadow-xl transition-all mb-10 ease-in-out hover:scale-[102%]">
            <Link to={url} target={target}>
                <div className="hero-content flex-col md:flex-row">
                    {img && (
                        <img
                            src={img}
                            alt={title}
                            className="max-w-[750px] md:max-w-[20rem] rounded-lg shadow-2xl"
                        />
                    )}
                    <div className="grow w-full">
                        <h1 className="text-xl font-bold">
                            {title}
                            {badge && <div className="badge badge-secondary ml-2">{badge}</div>}
                        </h1>
                        <p className="py-1 text-1xl">{desc}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HorizontalCard;
