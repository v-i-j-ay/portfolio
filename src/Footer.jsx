import React from 'react'
import linkedin from './photos/linkedin.png'
import github from './photos/github.png'
const Footer = () => {
    const year=new Date().getFullYear();
  return (
    
   <>
   <div className='flex flex-col space-y-2 bg-black w-full mb-0 p-10 font-semibold ' align="center">
    <h1>©{year} KVR. All rights reserved</h1>
    <div>Connect with</div>
    <div className='flex justify-center space-x-5 mt-2' ><a href='https://www.linkedin.com/in/vijayramareddykarri' target='blank'><img src={linkedin} className='h-10 '/></a>
    <a href='https://github.com/v-i-j-ay' target='blank'><img src={github} className='h-10 bg-white rounded-xl'/></a></div>
   </div>
   </>
  )
}

export default Footer;
