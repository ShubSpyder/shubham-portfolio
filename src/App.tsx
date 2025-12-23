import { useState } from 'react';
import './App.css'

import Header from './compnents/Header'
import Sidebar from './compnents/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);


  return (
    <BrowserRouter>
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          onChange={toggleDrawer}
        />

        <div className="drawer-content flex flex-col">
          <Header toggleDrawer={toggleDrawer} />


          <main className="p-6 pt-10 lg:max-w-[900px] md:pt-16">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>


        <div className="drawer-side z-40">
          <label
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={toggleDrawer}
          ></label>
          <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

