import portrait from "../assets/portrait.png";
import React from "react";

import { useSelector } from "react-redux";

const Screen1 = ({}) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <section
      className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex items-center w-[1036px] gap-[48px] relative">
          <div>
            <div className="mb-[32px]">
              <div
                className={`text-[80px] leading-[75px] font-bold ${darkMode ? 'text-dark-text' : 'text-light-text'}`}
              >
                Software
              </div>
              <div
                className="text-[80px] leading-[75px] font-bold text-light-primary dark:text-dark-primary"
              >
                Developer.
              </div>
            </div>

            <div className="text-justify opacity-80">
              I’m a software developer specializing in React.js and Next.js,
              building responsive, scalable, and high-performance user
              interfaces. I focus on creating maintainable architectures,
              dynamic dashboards, and reusable components, with strong state
              management using Redux and effective frontend–backend
              collaboration.
            </div>
          </div>

          <img
            src={portrait}
            alt="Portrait"
            className="h-[512px] w-[512px] object-contain rounded-[12px]"
          />

          {/* Absolut Section */}
          <div
            className={`absolute rounded-[12px] p-[16px] bottom-[-20px] right-[320px] shadow-md ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          >
            <div className="text-[30px] font-bold text-light-primary dark:text-dark-primary">
              2+
            </div>
            <div className="opacity-80">YEARS OF EXPERIENCE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screen1;
