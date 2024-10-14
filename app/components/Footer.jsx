import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 text-gray-800 dark:text-white py-8 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Martina Apostoloska</h2>
            <p className="text-sm">Data Analyst | Data Scientist</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/martina-apostoloska2/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              LinkedIn
            </Link>
            <Link href="https://github.com/apostoloska21?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              GitHub
            </Link>
            <a href="mailto:apostoloska21@gmail.com" className="hover:text-purple-400">
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Martina Apostoloska. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
