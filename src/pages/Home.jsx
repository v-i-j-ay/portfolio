import React from 'react';
import vi from '../photos/vi.jpeg';

import { Typewriter } from 'react-simple-typewriter';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import Projects from './Projects.jsx';
const Home = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row  justify-between px-6 md:px-20 py-16 mt-20 md:mt-40  ">

      {/* Left Side (Text) */}
      <div className="flex flex-col max-w-xl text-center md:text-left md:ml-10">
        <h1 className="text-white text-3xl md:text-4xl font-bold">Hi there 👋</h1> 
        
        <div className="text-white text-3xl md:text-4xl font-bold mt-4">
          I'm <span className="text-cyan-400">Vijay Rama Reddy Karri,</span>
          <span className="text-white ml-2">
            <Typewriter
              words={[' Full Stack Developer 🚀', ' Mern Stack Developer 💻', ' Problem Solver 🔥']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>

        <p className="text-gray-300 mt-6 text-lg">
          Turning ideas into interactive experiences. I design sleek frontends with React and build powerful backends with Node.js, creating scalable and user-friendly web applications.
        </p>
      </div>

      {/* Right Side (Photo) */}
<div className="mt-10 md:mt-0 flex justify-center md:mr-27">
  <div className="relative group">
    <img
      src={vi}
      alt="Vijay Rama Reddy Karri"
      className="h-64 w-64 md:h-72 md:w-72
                 rounded-full object-cover
                 border-4 border-gray-700
                 shadow-[0_0_35px_rgba(156,163,175,0.35)]
                 transition-all duration-500
                 group-hover:scale-105"
    />

    {/* soft glow ring */}
    <div className="absolute inset-0 rounded-full
                    border-4 border-gray-500
                    blur-md opacity-40
                    group-hover:opacity-70
                    transition duration-500">
    </div>
  </div>
</div>






    </div>
    <Skills/>
    <Projects/>
    <Contact/>
   </>
  );
  
};

export default Home;
