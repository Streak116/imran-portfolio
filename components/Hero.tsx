"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-4">Streak</h2>
      <p className="text-lg max-w-2xl">
        Full Stack Developer with 2 years of hands-on experience in building
        scalable web applications using React, Next.js, Angular, NestJS, and
        Spring Boot. Passionate about solving problems and delivering
        user-centric solutions.
      </p>
      <a
        href="/Resume Imran.pdf"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Resume
      </a>
    </motion.div>
  );
}
