"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                    <ul className="list-disc pl-4">
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Web Technologies</h3>
                    <ul className="list-disc pl-4">
                        <li>ThymeLeaf</li>
                        <li>Spring Boot</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Data Science & Analytics</h3>
                    <ul className="list-disc pl-4">
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>Data Visualization & Analytics</li>
                        <li>Tableau</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Databases & Cloud</h3>
                    <ul className="list-disc pl-4">
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Faculty of Computer Science and Engineering - Skopje</li>
            </ul>
        )
    }, 
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li className="mb-4">
                    <strong>BANZAE · Internship - Hybrid</strong>
                    <ul className="list-none mt-2">
                        <li><strong>Role:</strong> Software Engineer</li>
                        <li><strong>Technologies:</strong> TypeScript, React, MUI, Node.js, PostgreSQL</li>
                    </ul>
                </li>
                <li>
                    <strong>Innovation Doel · Internship - Online</strong>
                    <ul className="list-none mt-2">
                        <li><strong>Role:</strong> Data Science Engineer</li>
                        <li><strong>Technologies:</strong> Python, Pandas, NumPy, Jupyter Notebook</li>
                        <li>Data cleaning and preprocessing</li>
                    </ul>
                </li>
            </ul>
        )
    }, 
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    <a 
                        href="/certifications/cpp-certificate-udemy.jpg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        C++ certificate
                    </a>
                </li>
                <li>
                    <a 
                        href="/certifications/sql-certificate-udemy.jpg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        SQL certificate 
                    </a>
                </li>
            </ul>
        )
    }
]

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-black dark:text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-15 xl:py-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Computer Science student with a strong interest in design, data science,
          analytics, and data integration. I am actively seeking opportunities to
          expand my expertise in these areas. Currently, I am engaged in self
          learning through platforms like Udemy and edX, focusing on data science,
          data analytics, and web scraping using Python, numpy, pandas, and
          tkinter. My goal is to leverage my skills and knowledge to contribute
          effectively to data-driven projects and further my career in data science
          and engineering.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};
