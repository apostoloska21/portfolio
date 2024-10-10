"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation';


export const HeroSection = () => {
  const handleHireMeClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m Martina
            </span> 
            <br></br>
            <TypeAnimation
              sequence={[
                'A Data Analyst',
        1000,
        'A Data Scientist',
        1000,
        'I visualize data',
        1000,
        'Train models',
        1000,
        'Derive insights',
        1000,
        'I build solutions',
        1000,
        'I love working with big data',
        1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1> 
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            My goal is to leverage my skills and knowledge to contribute
            effectively to data-driven projects and further my career in data science
            and engineering.
          </p>
          <div>
            <button 
              onClick={handleHireMeClick}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <a
              href="/resume/MArtina Apostoloska (3).pdf" 
              download="Martina_Apostoloska_CV.pdf"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br hover:bg-slate-800 text-white border-gradient from-blue-500 vie-purple-500 to-pink-500 mt-3 inline-block"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};