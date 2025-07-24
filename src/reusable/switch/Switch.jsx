import React from "react";

const Switch = ({ toggleSwitch = () => {}, leftMisc, rightMisc }) => {
  return (
    <>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          {leftMisc && (
            <div className="mr-[18px] text-[16px] font-medium text-white">
              {leftMisc}
            </div>
          )}
          <input
            type="checkbox"
            value=""
            onClick={toggleSwitch}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

          {rightMisc && (
            <div className="ml-[18px] text-[16px] font-medium text-white">
              {rightMisc}
            </div>
          )}
        </label>
      </div>
    </>
  );
};

export default Switch;
