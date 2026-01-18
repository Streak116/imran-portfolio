"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { Sparkles, Code2, Rocket } from "lucide-react";

const details = {
  name: "Mohammed Imran",
  title: "Full Stack Developer",
  profileImage: "/profile.jpg",
  taglines: [
    "Building scalable, user-centric applications 🚀",
    "Specialized in React, Next.js, Angular, NestJS ⚡",
    "Exploring AI & LLM-powered systems 🤖",
  ],
  resumeLink: process.env.NEXT_PUBLIC_RESUME_URL || "/Resume Imran.pdf",
  linkedIn: "https://www.linkedin.com/in/md-116-imran",
  github: "https://github.com/Streak116",
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-10 py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 hidden lg:block"
      >
        <Code2 className="w-12 h-12 text-blue-500/20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 hidden lg:block"
      >
        <Rocket className="w-12 h-12 text-purple-500/20" />
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Gradient ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75 animate-pulse" />
            
            {/* Profile image */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src={details.profileImage}
                alt={details.name}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Sparkle icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-2xl"
        >
          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            {details.name}
          </motion.h1>

          {/* Title with enhanced styling */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
          >
            <span className="text-purple-600 dark:text-purple-400">{details.title}</span>
          </motion.h2>

          {/* Typewriter Tagline with better styling */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <TypeAnimation
              sequence={details.taglines.flatMap((tagline) => [tagline, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium min-h-[2rem]"
            />
          </motion.div>

          {/* CTA Buttons with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            {/* Primary CTA - Download Resume */}
            <motion.a
              href={details.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </motion.a>

            {/* Secondary CTAs */}
            <motion.a
              href={details.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-gray-700 dark:text-gray-300"
            >
              <FaLinkedin className="text-blue-600" />
              LinkedIn
            </motion.a>

            <motion.a
              href={details.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-gray-700 dark:text-gray-300"
            >
              <FaGithub className="text-gray-800 dark:text-white" />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow with enhanced design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
