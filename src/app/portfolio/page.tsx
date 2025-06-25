"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
  }),
};

export default function Portfolio() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto selection:bg-gray-700 selection:text-white">
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeIn}
        className="text-center mb-16 mt-10"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight uppercase select-none">
          Quaid Tahir
        </h1>
        <p className="mt-2 text-lg sm:text-xl font-light text-gray-400">
          Software Engineer
        </p>
        <p className="mt-3 max-w-xl mx-auto text-gray-300 leading-relaxed">
          I build scalable, elegant software solutions that solve problems that
          matter.
        </p>
        <div className="mt-6 flex justify-center space-x-6 text-gray-500 text-sm sm:text-base">
          <a
            href="mailto:quaidtahirw@gmail.com"
            className="hover:text-white transition"
            aria-label="Send email"
          >
            quaidtahirw@gmail.com
          </a>
          <span>|</span>
          <Link
            href="https://quaidtahir.com"
            target="_blank"
            className="hover:text-white transition underline"
            aria-label="Visit personal website"
          >
            quaidtahir.com
          </Link>
          <span>|</span>
          <Link
            href="https://github.com/QuaidCodes"
            target="_blank"
            className="hover:text-white transition underline"
            aria-label="Visit GitHub profile"
          >
            github.com/QuaidCodes
          </Link>
          <span>|</span>
          <Link
            href="https://linkedin.com/in/quaidtahir"
            target="_blank"
            className="hover:text-white transition underline"
            aria-label="Visit LinkedIn profile"
          >
           linkedin.com/quaidtahir
          </Link>
        </div>
      </motion.header>

      <section className="space-y-14 leading-relaxed">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold text-gray-200 uppercase tracking-wide mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-400 max-w-3xl">
            Ambitious software engineer candidate pursuing a Bachelor&#39;s
            degree in Computer Science. Proficient in multiple languages with
            hands-on experience designing scalable, high-performance
            applications. Passionate about writing clean, maintainable code and
            continuously learning modern best practices to solve real-world
            problems.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold text-gray-200 uppercase tracking-wide mb-3">
            Technical Skills
          </h2>
          <p className="text-gray-500 font-mono tracking-wide select-text">
            Python &nbsp;|&nbsp; React &nbsp;|&nbsp; Node.js &nbsp;|&nbsp;
            Next.js &nbsp;|&nbsp; Tailwind CSS &nbsp;|&nbsp; TypeScript
            &nbsp;|&nbsp; Java &nbsp;|&nbsp; C++
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeIn}
          className=""
        >
          <h2 className="text-2xl font-semibold text-gray-200 uppercase tracking-wide mb-3">
            Projects
          </h2>

          <article className="mb-3">
            <h3 className="text-xl font-bold mb-1 text-white">
              Portfolio Website Project
            </h3>
            <time className="text-sm text-gray-600 mb-3 block">June 2025</time>
            <ul className="list-disc list-inside space-y-2 text-gray-400 max-w-3xl">
              <li>
                Developed a dynamic portfolio website using Next.js, React, and
                TypeScript featuring an interactive and user-friendly interface.
              </li>
              <li>
                Applied Tailwind CSS for responsive, mobile-first design
                ensuring consistent performance across devices.
              </li>
              <li>
                Built modular components with efficient state management to
                maximize reuse and maintainability.
              </li>
              <li>
                Optimized performance using server-side rendering and
                code-splitting, resulting in faster load times and improved SEO.
              </li>
            </ul>
          </article>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold text-gray-200 uppercase tracking-wide mb-3">
            Work Experience
          </h2>
          <article>
            <h3 className="text-xl font-bold mb-1 text-white">
              Amazon - IT Support Specialist II
            </h3>

            <time className="text-sm text-gray-600 mb-3 block">
              Nov 2022 - Present · New Jersey
            </time>

            <ul className="list-disc list-inside space-y-2 text-gray-400 max-w-3xl">
              <li>
                Provide technical support to 700+ employees, troubleshooting
                hardware and software issues to maintain seamless IT operations.
              </li>

              <li>
                Collaborated with cross-functional teams to improve operational
                efficiency by 15%, streamlining workflows and boosting
                productivity.
              </li>

              <li>
                Managed IT infrastructure including installs, network configs,
                and system upgrades, ensuring 99.9% uptime and security
                compliance.
              </li>

              <li>
                Resolved 50+ IT tickets weekly within SLAs, reducing issue
                resolution time by 99% and improving end-user satisfaction.
              </li>
            </ul>
          </article>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold text-gray-200 uppercase tracking-wide mb-3">
            Education
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 max-w-3xl text-lg">
            {/* <li>
              Master&#39;s Degree in Computer Science - Western Governors
              University, Salt Lake City, Utah
            </li> */}
            <li>
              Bachelor&#39;s Degree in Computer Science - Western Governors
              University, Salt Lake City, Utah
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold text-gray-200 uppercase tracking-wide mb-3">
            Achievements
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-400 max-w-3xl text-lg">
            <li className="font-semibold">
              Foundation: Data, Data, Everywhere - Amazon, Coursera (2022)
            </li>

            <li className="font-semibold">
              Amazon Web Services - Amazon, Coursera (2020)
            </li>

            <li className="font-semibold">CompTIA Security+ (2025)</li>
          </ul>
        </motion.div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={7}
        variants={fadeIn}
        className="mt-16 flex justify-center gap-8"
      >
        <a
          href="/QuaidTahirPortfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg border border-gray-600 text-gray-500 font-semibold hover:border-white hover:text-white transition"
        >
          Download PDF
        </a>
        <a
          href="/QuaidTahirPortfolio.doc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg border border-gray-600 text-gray-500 font-semibold hover:border-white hover:text-white transition"
        >
          Download DOC
        </a>
      </motion.div>
    </main>
  );
}
