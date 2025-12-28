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
                        <div className="text-5xl font-bold">I'm Shubham Shukla</div>
                        <div className="text-3xl py-3 font-bold">Software Engineer</div>
                        <div className="py-2">
                            <text className="text-lg">
                                I am a passionate developer with over 6 years of experience building enterprise web applications using Angular, React, and Express.js. With a solid foundation in TypeScript, MongoDB, and Git, I specialize in designing scalable software and collaborating with cross-functional teams to deliver high-quality code. I hold a B.Sc. in IT and a proven track record of building maintainable, user-focused solutions.
                            </text>
                        </div>
                        <div className="mt-8">
                            <Link to="/contact" className="btn btn-outline ml-5">
                                Let's connect!
                            </Link>
                            <Link to="/projects" className="btn btn-outline ml-5">
                                View Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

