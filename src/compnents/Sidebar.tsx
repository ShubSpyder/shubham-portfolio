import { NavLink } from 'react-router-dom';
import profilePhoto from '../assets/images/profile-photo.jpg';

const Sidebar = () => {
    return (
        <aside className="flex h-screen w-[19rem] flex-col justify-between text-base-content bg-sidebar-bg">
            <div className="flex flex-col items-center">
                <div className="avatar mt-8 mb-8 transition ease-in-out hover:scale-[102%]">
                    <div className="w-38 rounded-full">
                        <img src={profilePhoto} alt="Profile Image" />
                    </div>
                </div>

                <ul className="menu w-full gap-1 p-2">
                    <li><NavLink to="/" end className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>Home</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>Projects</NavLink></li>
                    <li><NavLink to="/cv" className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>CV</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>Contact</NavLink></li>
                </ul>
            </div>

            <div className="sticky bottom-0 flex justify-center p-4">
                <div className="flex gap-6 opacity-60">
                    <a href="https://github.com/shubhamshukla" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/shubhamshukla" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="4.983" cy="5.009" r="2.188"></circle>
                            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;