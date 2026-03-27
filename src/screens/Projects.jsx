import React from "react";
import { useSelector } from "react-redux";
import todo from "../assets/todo.png";
import imageSearch from "../assets/image-search.png";
import passwordGen from "../assets/password-gen.png";

const Projects = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  const projects = [
    {
      title: "TODO App",
      date: "2024",
      description: "A feature-rich TODO application with state persistence.",
      link:"https://potatotodos.vercel.app/todo",
      image:todo
    },
    {
      title: "Image Search App",
      date: "2024",
      description: "A dynamic image search engine powered by Unsplash API.",
      link:"https://image-search-app-chi.vercel.app/",
      image:imageSearch
    },
    {
      title: "Password Generator",
      date: "2025",
      description: "Secure and customizable password generation tool.",
      link:"https://password-generator-lake-sigma.vercel.app/",
      image:passwordGen
    },
  ];

  return (
    <>
      <section
        className={`flex items-center justify-center min-h-screen transition-colors duration-300 ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}
      >
        <div className="w-full max-w-[1036px] px-4">
          <div
            className="text-[24px] mb-[12px] font-bold text-light-primary dark:text-dark-primary"
          >
            PROJECTS
          </div>
          <div className="text-[36px] font-bold mb-[48px]">
            THE WORK
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {projects?.map((project, index) => {
              return (
                <a 
                  key={index} 
                  href={project?.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[12px] mb-4 shadow-md transition-transform duration-300 group-hover:scale-105 bg-white dark:bg-gray-800">
                    <img className="h-[256px] w-full object-cover" src={project?.image} alt={project?.title} />
                  </div>
                  <div className="text-[18px] font-bold mb-2">{project?.title}</div>
                  <div className="text-justify opacity-70 mb-2 text-[14px]">{project?.description}</div>
                  <div className="text-[12px] font-medium opacity-50">{project?.date}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
