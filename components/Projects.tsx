"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, TrendingUp, Zap } from "lucide-react";
import { SiReact, SiNextdotjs, SiDjango, SiCelery, SiTypescript, SiPostgresql } from "react-icons/si";

const projects = [
  {
    title: "Profit Streak",
    tagline: "AI-Powered Stock Market Intelligence Platform",
    description: "An intelligent stock analysis platform that leverages RAG technology to transform real-time financial news into actionable insights. Features automated web scraping pipelines and vector-based semantic search to help investors make smarter decisions.",
    icon: "📈",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    techStack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Celery", icon: SiCelery, color: "#37814A" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
    features: [
      { icon: Sparkles, text: "RAG system for context-aware financial insights" },
      { icon: Zap, text: "Automated web scraping & ingestion with Celery" },
      { icon: TrendingUp, text: "Vector embeddings for semantic search" },
    ],
    githubUrl: "https://github.com/Streak116",
    liveUrl: undefined, // Add live demo URL when available
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{project.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <motion.div
                            key={tech.name}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="group/badge relative"
                          >
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 transition-all duration-300 hover:shadow-md">
                              <Icon 
                                className="w-4 h-4 transition-transform duration-300 group-hover/badge:scale-110" 
                                style={{ color: tech.color }}
                              />
                              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                {tech.name}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon className="w-4 h-4 mt-0.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
