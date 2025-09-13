"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const details = {
  name: "Mohammed Imran",
  title: "Full Stack Developer",
  profileImage: "/profile.jpg",
  taglines: [
    "Building scalable, user-centric applications 🚀",
    "Specialized in React, Next.js, Angular, NestJS ⚡",
    "Exploring AI & LLM-powered systems 🤖",
  ],
  resumeLink: "/Resume Imran.pdf",
  linkedIn: "https://www.linkedin.com/in/md-116-imran",
  github: "https://github.com/Streak116",
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-1 md:px-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-shrink-0 mb-8 md:mb-0 md:mr-12"
      >
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <img
            src={details.profileImage}
            alt={details.name}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center md:text-left max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{details.name}</h1>
        <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-4">
          {details.title}
        </h2>

        {/* Typewriter Tagline */}
        <TypeAnimation
          sequence={details.taglines.flatMap((tagline) => [tagline, 2000])}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block text-lg text-gray-700 dark:text-gray-300 mb-6"
        />

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href={details.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
          <a
            href={details.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={details.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 text-2xl text-gray-600 dark:text-gray-300"
      >
        ↓
      </motion.div>
    </section>
  );
}
