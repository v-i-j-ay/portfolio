import React from "react";
import rps from "../photos/rps.jpg";
import live from "../photos/live.png";
import github from "../photos/github.png";

const Projects = () => {
  const pro = [
    {
      id: 1,
      img: rps,
      title: "Rock Paper Scissors Game",
      matter:
        "I created a Rock–Paper–Scissors game using HTML, CSS, and JavaScript. The player plays against the computer, and the game shows who wins or if it’s a draw. I also used localStorage to save the player’s score so it stays even after refreshing the browser.",
      llink: "#",
      rlink: "#",
    },
    {
      id: 2,
      img: rps,
      title: "Rock Paper Scissors Game",
      matter:
        "I created a Rock–Paper–Scissors game using HTML, CSS, and JavaScript. The player plays against the computer, and the game shows who wins or if it’s a draw. I also used localStorage to save the player’s score so it stays even after refreshing the browser.",
      llink: "#",
      rlink: "#",
    },
  ];

  return (
    <div className="mt-24">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center p-4">
        Projects
      </h1>

      {pro.map((item) => (
        <div key={item.id} className="flex justify-center">
          
          <div className="m-10 w-full max-w-5xl rounded-xl shadow-2xl border p-6 bg-black">
            
            <div className="flex flex-col md:flex-row gap-6 items-center">

              {/* Image */}
              <img
                src={item.img}
                className="h-52 w-full md:w-64 object-cover rounded-xl shadow-lg"
                alt={item.title}
              />

              {/* Content */}
              <div>
                <h2 className="text-xl text-green-600 font-bold mb-3">
                  {item.title}
                </h2>

                <p className="leading-relaxed">
                  {item.matter}
                </p>

                {/* Links */}
                <div className="flex justify-center md:justify-end gap-8 mt-4">
                  <a href={item.llink}>
                    <img src={live} className="h-10" alt="Live Demo" />
                  </a>

                  <a href={item.rlink}>
                    <img
                      src={github}
                      className="h-9 bg-white rounded-3xl p-1"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Projects;