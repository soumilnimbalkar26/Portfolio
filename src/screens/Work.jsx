import React from "react";
import { useSelector } from "react-redux";

const Work = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  const exp = [
    {
      startDate: "DEC 2023",
      endDate: "PRESENT",
      title: "Frontend Developer",
      company: "Lineup Technologies Pvt. Ltd.",
      description: `Frontend Developer with experience in React.js and Next.js, building scalable, user-focused web applications. Developed reusable dashboards, dynamic tables, and custom components aligned with business needs. Integrated REST APIs and managed state using Redux. Improved performance and code quality through refactoring and debugging UI, API, and state issues. Collaborated with backend teams on data flow and API contracts. Also contributed to React Native mobile apps and worked in Agile environments using Git-based workflows.`,
    },
  ];

  return (
    <>
      <section
        className={`min-h-screen flex justify-center items-center transition-colors duration-300 ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}
      >
        <div className="max-w-[1036px] mx-auto px-4 py-10">
          <div className="mb-[64px]">
            <div
              className="text-[24px] mb-[12px] font-bold text-light-primary dark:text-dark-primary"
            >
              JOURNEY
            </div>
            <div className="text-[36px] font-bold">
              Work Experience
            </div>
          </div>

          <div className="space-y-12">
            {exp?.map((item, index) => {
              return (
                <div key={index} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-[75px]">
                  <div className="text-[16px] text-nowrap font-medium opacity-60 min-w-[200px]">
                    {item?.startDate} - {item?.endDate}
                  </div>
                  <div>
                    <div
                      className="text-[22px] font-bold mb-[12px]"
                    >
                      {item?.title} <span className="text-light-primary dark:text-dark-primary">•</span> {item?.company}
                    </div>
                    <div className="text-justify opacity-80 leading-relaxed">{item?.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
