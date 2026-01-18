"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiAngular, 
  SiTypescript, 
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiPostgresql,
  SiRedux,
  SiGit,
  SiPython,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiExpress,
  SiDjango,
  SiGithub
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { Brain, Code2, Workflow } from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    ],
  },
  {
    category: "Frontend Development",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "React Flow", icon: Workflow, color: "#FF6B9D" },
    ],
  },
  {
    category: "Backend Development",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    category: "AI & Intelligent Systems",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    skills: [
      { name: "RAG Systems", icon: Brain, color: "#8B5CF6" },
      { name: "Semantic Search", icon: Code2, color: "#EC4899" },
    ],
  },
  {
    category: "Databases",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    category: "Tools & Platforms",
    gradient: "from-red-500 via-rose-500 to-pink-500",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    ],
  },
];


export default function Skills() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies I work with to build exceptional applications
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.gradient}`} />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.category}
                </h3>
                <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${category.gradient} opacity-20`} />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative"
                    >
                      {/* Glassmorphism Card */}
                      <div className="relative h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        {/* Gradient Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        {/* Animated Border Glow */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                          {/* Icon */}
                          <div className="relative">
                            <Icon 
                              className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
                              style={{ color: skill.color }}
                            />
                            {/* Icon Glow */}
                            <div 
                              className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                              style={{ backgroundColor: skill.color }}
                            />
                          </div>

                          {/* Skill Name */}
                          <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-100 text-center">
                            {skill.name}
                          </span>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
