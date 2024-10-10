"use client";
import { useTheme } from '../ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:ring-2 hover:ring-gray-300 bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-yellow-500" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-900" />
      )}
    </button>
  );
};

export default ThemeButton;