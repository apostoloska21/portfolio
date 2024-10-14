import React from "react";
import NavLink from "./NavLink";
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-lg shadow-lg transition-all duration-300">
      {links.map((link, index) => (
        <li key={index} className="w-full text-center">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
export default MenuOverlay;
