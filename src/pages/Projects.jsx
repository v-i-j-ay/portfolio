import React from "react";
import rps from "../photos/rps.jpg";
import bs from "../photos/bs.jpeg"
import sm from "../photos/sm.png"
import live from "../photos/live.png";
import github from "../photos/github.png";

const Projects = () => {
  const pro = [
    {
      id: 1,
      img: bs,
      title: "BuildSetu – Labour & Contractor Marketplace Platform",
      matter:
        `BuildSetu is a full-stack web platform designed to bridge the gap between skilled labourers and contractors.
The system allows workers to register their profiles, which are then verified by an admin before becoming publicly visible.

The platform ensures trust and quality by implementing an approval workflow, profile verification system, and category-based worker discovery.

Contractors and employers can easily browse workers by skill category and directly contact them via WhatsApp integration.

This project focuses on solving real-world problems in the unorganized labour market by digitizing hiring and making skilled workers discoverable online.`,
      llink: "https://BuildSetu.vercel.app/",
      rlink: "https://github.com/v-i-j-ay/BuildSetu-frontend",
    },
    {
      id: 2,
      img: sm,
      title: "Student Management System",
      matter:
        "Developed a console-based Student Management System with secure Admin Authentication and full CRUD operations using Python and MySQL. The system manages academic records and includes innovative features like a Student Skill Sharing module for peer learning and a Business Idea Submission section to encourage entrepreneurship and collaboration among students. Implemented using Python, MySQL, and MySQL Connector with proper database handling and a menu-driven terminal interface.",
      lrink: "https://github.com/v-i-j-ay/Student-Management-System",
      llink: "https://www.linkedin.com/posts/activity-7398044722914762754-uzGw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEn0PAwBIPT32i0IInFXeN-IHD-OEhQ6oCE",
    },
    {
      id: 3,
      img: rps,
      title: "Rock Paper Scissors Game",
      matter:
        "I created a Rock–Paper–Scissors game using HTML, CSS, and JavaScript. The player plays against the computer, and the game shows who wins or if it’s a draw. I also used localStorage to save the player’s score so it stays even after refreshing the browser.",
      llink: "https://v-i-j-ay.github.io/Rock-paper-scissor-Game/",
      rlink: "https://github.com/v-i-j-ay/Rock-paper-scissor-Game",
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