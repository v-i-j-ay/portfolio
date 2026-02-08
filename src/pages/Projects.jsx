import React from 'react'
import { motion } from 'framer-motion'
import rps from '../photos/rps.jpg'
import live from '../photos/live.png'
import github from '../photos/github.png'

const Projects = () => {
  const pro = [
    {
      id: 1,
      img: rps,
      matter:
      'I created a Rock–Paper–Scissors game using HTML, CSS, and JavaScript. The player plays against the computer, and the game shows who wins or if it’s a draw. The design is simple and easy to use with clickable buttons. I also used localStorage to save the player’s score, so it stays even after refreshing or reopening the browser.',
      llink:"",
      rlink:""
    },
    {
      id: 2,
      img: rps,
      matter:
        'I created a Rock–Paper–Scissors game using HTML, CSS, and JavaScript. The player plays against the computer, and the game shows who wins or if it’s a draw. The design is simple and easy to use with clickable buttons. I also used localStorage to save the player’s score, so it stays even after refreshing or reopening the browser.',
      llink:"",
      rlink:""
      }
     
  ]

  return (
    <>
      <div className="">
        <h1 className="text-5xl font-extrabold flex justify-center p-4 mt-25">
          Projects
        </h1>

        {pro.map((item, index) => (
          <li key={item.id} className="list-none">
            <div className="flex justify-center">
              <motion.div
                className="bg-black m-10 w-200 rounded-xl shadow-2xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.8,          // slower animation
                  ease: 'easeInOut',      // smooth effect
                  delay: index * 0.4,     // stagger each card
                }}
                viewport={{ once: true }}
              >
                <div className="p-5 sm:flex-col md:flex md:flex-row">
                  <img
                    src={item.img}
                    className="h-50 rounded-2xl shadow-2xl mx-auto"
                    alt="project"
                  />
                  <div>
                    <h1 className="p-3 ml-2 text-xl text-green-400 font-bold">
                      Rock Paper Scissors Game
                    </h1>
                    <p className="pl-3 ml-2">{item.matter}</p>
                    <div className="flex justify-center sm:justify-around md:justify-end pt-1">
                      <a href={item.llink}><img src={live} className="h-12" alt="live demo" /></a>
                      <a href={item.rlink}><img
                        src={github}
                        className="h-10 bg-white rounded-3xl ml-10"
                        alt="github"
                      /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </li>
        ))}
      </div>
    </>
  )
}

export default Projects
