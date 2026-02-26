import React from 'react'
import { motion } from "framer-motion";
import java from '../photos/jav.png';
import python from '../photos/python.png';
import sql from '../photos/sql.png';
import html from '../photos/html.png';
import css from '../photos/css.png';
import js from '../photos/js.png';
import react from '../photos/react.png';
import tailwind from '../photos/tailwind.png';
import firebase from '../photos/firebase.png';
import node from '../photos/node.png';
import express from '../photos/express.png';
import mongodb from '../photos/mongodb.png';


const Skills = () => {
  const v= [
      { id:1, img:java, name:"Java"},
      { id:2, img:python, name:"Python"},
      { id:3, img:sql, name:"Sql"},
      { id:4, img:html, name:"Html"},
      { id:5, img:css, name:"Css"},
      { id:6, img:js, name:"Javascript"},
      { id:7, img:react, name:"React"},
      { id:8, img:tailwind, name:"Tailwind"},
      { id:9, img:firebase, name:"Firebase"},
      { id:10, img:node, name:"Node"},
      { id:11, img:express, name:"Express"},
      { id:12, img:mongodb, name:"Mongodb"}
 ]
  return (
    <>
      <div className="mt-22">
      <h1 className="text-5xl font-extrabold flex justify-center p-4  ">
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-10 p-10 ">
        {v.map((item, index) => (
          <motion.li
            key={item.id}
            className="bg-black flex flex-col shadow-2xl rounded-4xl w-40 h-45 p-6 space-y-10 items-center"
            initial={{ opacity: 0, y: 50 }}   // 👈 Entrance (fade + slide)
            animate={{ 
              opacity: 1, 
              y: [0, -10, 0]                 // 👈 Floating loop
            }}
            transition={{
              opacity: { duration: 0.8, delay: index * 0.2 }, // fade once
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.2,
              },
            }}
            
          >
            <div>
              <img src={item.img} className="h-16 w-16" alt={item.name} />
            </div>
            <p className="text-center font-semibold">{item.name}</p>
          </motion.li>
        ))}
      </div>
    </div>
    </>
  )
}

export default Skills