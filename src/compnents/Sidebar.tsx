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
                    <li><NavLink to="/services" className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>Services</NavLink></li>
                    <li><NavLink to="/store" className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>Store</NavLink></li>
                    <li><NavLink to="/blog" className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>Blog</NavLink></li>
                    <li><NavLink to="/cv" className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>CV</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => `py-3 px-4 text-[16px] ${isActive ? 'bg-sidebar-active font-medium' : ''}`}>Contact</NavLink></li>
                </ul>
            </div>

            <div className="sticky bottom-0 flex justify-center bg-base-200 pb-8 pt-4">
                <div className="flex gap-6 opacity-60">
                    <a href="#" className="hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;