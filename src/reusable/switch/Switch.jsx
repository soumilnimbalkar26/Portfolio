import React from "react";
import { useSelector } from "react-redux";

const Switch = ({ toggleSwitch = () => {}, leftMisc, rightMisc }) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          {leftMisc && (
            <div className={`mr-[18px] text-[16px] font-medium transition-colors duration-300 ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
              {leftMisc}
            </div>
          )}
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleSwitch}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-light-primary"></div>

          {rightMisc && (
            <div className={`ml-[18px] text-[16px] font-medium transition-colors duration-300 ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
              {rightMisc}
            </div>
          )}
        </label>
      </div>
    </>
  );
};

export default Switch;
