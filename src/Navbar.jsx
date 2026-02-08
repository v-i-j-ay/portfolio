import React from 'react'
import { Link } from 'react-router-dom';
import logo from './photos/logo.jpg';
import resumeb from './photos/resumeb.jpeg'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import v from './v.txt';
const Navbar = () => {
  const location=useLocation();
  const pathname=location.pathname;
  // console.log(location.pathname);
  const[sidebarOpen,setSidebarOpen]=useState(false);
  return (
   <>
    <nav className=' bg-black w-full h-23 fixed top-0 text-white rounded-b-lg shadow-xl py-3 md:py-0 z-50'>
      <div className='flex justify-between items-center '>
          <div className='flex space-x-2 ml-5'>
            <img src={logo} className='h-16 mb-1' alt='Logo' />
            <h1 className='text-xl mt-6 '>Portfolio.</h1>
          </div>
          {/*Desktop*/}
          <div className=' hidden md:flex space-x-15 ml-96'>
          <li type="none" className=' hover:bg-gray-900 p-2 rounded-lg cursor-pointer ml-45' ><Link to='/home' className={`${pathname==='/home' ? 'bg-gray-900 p-2 rounded-lg':''}`}>Home</Link></li>
          <li type="none" className=' hover:bg-gray-900 p-2 rounded-lg cursor-pointer'><Link to='/skills' className={`${pathname==='/skills' ? 'bg-gray-900 p-2 rounded-lg':''}`} >Skills</Link></li>
          <li type="none" className=' hover:bg-gray-900 p-2 rounded-lg cursor-pointer'><Link to='/projects' className={`${pathname==='/projects' ? 'bg-gray-900 p-2 rounded-lg':''}`} >Projects</Link></li>
          <li type="none" className=' hover:bg-gray-900 p-2 rounded-lg cursor-pointer '><Link to='/contact' className={`${pathname==='/contact' ? 'bg-gray-900 p-2 rounded-lg':''}`} >Contact</Link></li></div>
         <div className='hidden md:block'><a href={v} download="v.text" ><img src={resumeb} className='  h-25 mr-20'></img></a></div>
         <button onClick={()=>{setSidebarOpen(!sidebarOpen)}} className='md:hidden text-white text-3xl mr-5'> ☰</button>

      </div>
   
    {/*mobile*/}
    {sidebarOpen && (  
    <div className=' md:hidden fixed top-21 left-0 h-screen w-64 bg-[#161616] rounded-tr-2xl text-white p-5'>
    <button
          onClick={() => setSidebarOpen(false)}
          className="text-right w-full text-2xl mb-6"
        >
          ✕
        </button>

        {/* Sidebar Menu */}
        <ul className="space-y-4  ">
          <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
            <Link to='/home' className={`${pathname==='/home' ? 'bg-gray-950 p-2  rounded-lg':''}`}>Home</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
            <Link to='/skills' className={`${pathname==='/skills' ? 'bg-gray-950 p-2 rounded-lg':''}`}>Skills</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
           <Link to='/projects' className={`${pathname==='/projects' ? 'bg-gray-950 p-2 rounded-lg':''}`}>Projects</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
           <Link to='/contact' className={`${pathname==='/contact' ? 'bg-gray-950 p-2 rounded-lg':''}`}>Contact</Link>
          </li>
        </ul>

        {/* Resume Image */}
        <div>
          <img src={resumeb} className="h-25 rounded-lg" alt="Resume" />
        </div>
      </div>
      
     )}
      </nav>
   </>
  )
}

export default Navbar;