"use client";

import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-5xl px-6 py-12 m-5 rounded">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className={`text-6xl font-bold tracking-tight text-nowrap`}>
            QUAID TAHIR
          </h1>
          <h2 className="text-xl mt-2 font-semibold">SOFTWARE ENGINEER</h2> 
          <p className="mt-4 text-sm text-gray-400">
            <a href="mailto:quaidtahirw@gmail.com" className="hover:text-white">
              quaidtahirw@gmail.com |
            </a>
            <span> New Jersey |</span>
            <Link
              href="https://www.quaidtahir.com"
              target="_blank"
              className="underline mx-1 hover:text-white"
            >
              quaidtahir.com
            </Link>
            |
            <Link
              href="https://www.github.com/QuaidCodes"
              target="_blank"
              className="underline mx-1 hover:text-white"
            >
              github.com/QuaidCodes
            </Link>
          </p>
        </section>

        {/* Professional Summary */}
        <section className="mb-10">
          <h3 className="portfolio-headings">Professional Summary</h3>
          <p className="portfolio-content">
            Ambitious Software Engineer candidate actively pursuing a Bachelor's
            degree in Computer Science. Proficient in Python, TypeScript, React,
            Next.js, Tailwind CSS, Node.js, Java, and C++, with practical
            experience designing and developing scalable, high-performance web
            applications. Adept at writing clean, maintainable code and
            utilizing modern software development practices including versionc
            control and CI/CD workflows. Strong problem-solving abilities and a
            collaborative approach, committed to continuous learning and
            delivering robust software solutions.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h3 className="portfolio-headings">Technical Skills</h3>
          <p className="portfolio-content">
            Python | React | Node.js | Next.js | Tailwind CSS | TypeScript |
            Java | C++
          </p>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h3 className="portfolio-headings">Projects</h3>
          <div className="mb-6">
            <h4 className="text-lg font-bold text-white">
              Portfolio Website Project
            </h4>
            <p className="portfolio-content mb-1">04/2024</p>
            <ul className="list-disc list-inside portfolio-content space-y-1">
              <li>
                Developed a dynamic portfolio website using Next.js, React, and
                TypeScript, featuring an interactive and user-friendly interface
                to effectively showcase skills and projects.
              </li>
              <li>
                Applied Tailwind CSS for responsive, mobile-first design,
                ensuring consistent performance and visual quality across
                devices.
          
           ZZZZZZZ    </li>
              <li>
                Built modular, scalable components with efficient state
                management to maximize code reuse and maintainability. Employed
                Git and GitHub for version control, facilitating collaborative
                development and streamlined CI/CD deployment workflows.
              </li>
              <li>
                Optimized site performance using Next.js server-side rendering
                and code-splitting techniques, resulting in faster load times,
                improved SEO, and enhanced user experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h3 className="portfolio-headings">Work Experience</h3>
          <div>
            <h4 className="text-lg font-bold text-white">
              Amazon - IT Support Specialist II
            </h4>
            <p className="portfolio-content">
              11/2022 - Present · New Jersey
            </p>
            <ul className="list-disc list-inside portfolio-content space-y-1 mt-1">
              <li>
                Provide technical support to over 700 employees, efficiently
                troubleshooting hardware and software issues to maintain
                seamless IT operations and minimize downtime.
              </li>
              <li>
                Collaborated with cross-functional teams to implement IT
                solutions that improved operational efficiency by 15%,
                streamlining workflows and enhancing productivity across
                departments.
              </li>
              <li>
                Managed IT infrastructure including hardware/software
                installations, network configurations, and system upgrades,
                ensuring 99.9% system uptime and compliance with security
                protocols.
              </li>
              <li>
                Monitored and resolved an average of 50+ IT tickets weekly
                within defined SLAs, delivering timely and effective technical
                assistance that reduced issue resolution time by 99% and
                improved end-user satisfaction.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h3 className="portfolio-headings">Education</h3>
          <ul className="list-disc list-inside portfolio-content space-y-1">
            <li>
              Master's Degree in Computer Science - Western Governors
              University, Salt Lake City, Utah
            </li>
            <li>
              Bachelor's Degree in Computer Science - Western Governors
              University, Salt Lake City, Utah
            </li>
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="portfolio-headings">Achievements</h3>
          <ul className="list-disc list-inside portfolio-content space-y-1">
            <li className="font-bold">
              Foundation: Data, Data, Everywhere - Amazon, Coursera - 12/01/2021
            </li>

            <li className="font-bold">
              Amazon Web Services - Amazon, Coursera - 12/01/2020
            </li>
          </ul>
        </section>

        <div className="flex justify-end mt-5">
          <button className="hero-btns">
            <a href="/QuaidTahirResume.pdf">Download PDF</a>
          </button>

          <button className="hero-btns">
            <a href="/QuaidTahirResume.docx">Download docx</a>
          </button>
        </div>
      </div>
    </div>
  );
}
