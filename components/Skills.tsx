"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Angular", "TypeScript", "JavaScript",
  "Node.js", "NestJS", "Spring Boot", "Java", "PostgreSQL",
  "Redux", "Git", "Python", "LLM"
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
