import React from "react";

export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-gray-800 dark:text-white border-b border-purple-500"
    : "text-gray-500 dark:text-[#ADB7BE]"; 

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-gray-800 dark:hover:text-white ${buttonClasses}`}> 
        {children}
      </p>
    </button>
  );
};


