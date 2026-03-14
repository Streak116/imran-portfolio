"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Sparkles, TrendingUp, Zap, Shield, Activity, Plane, HardDrive } from "lucide-react";
import { SiReact, SiNextdotjs, SiDjango, SiCelery, SiTypescript, SiPostgresql, SiTailwindcss, SiDocker, SiNestjs, SiExpress, SiPrisma, SiRedis } from "react-icons/si";
import { useLanguage } from "./LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const tAirStreak = t("projectItems.airStreak");
  const tProfit = t("projectItems.profitStreak");
  // const tCrm = t("projectItems.crm");
  // const tSupply = t("projectItems.supplyChain");

  const projects = [
    {
      title: tAirStreak.title,
      tagline: tAirStreak.tagline,
      description: tAirStreak.description,
      icon: "✈️",
      gradient: "from-sky-600 via-blue-700 to-indigo-900",
      techStack: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
      ],
      features: [
        { icon: Shield, text: tAirStreak.features[0] },
        { icon: Activity, text: tAirStreak.features[1] },
        { icon: HardDrive, text: tAirStreak.features[2] },
        { icon: Plane, text: tAirStreak.features[3] },
      ],
      image: null, 
      githubUrl: "https://github.com/Streak116",
      liveUrl: "https://airstreak-web.vercel.app/", 
    },
    {
      title: tProfit.title,
      tagline: tProfit.tagline,
      description: tProfit.description,
      icon: "📈",
      gradient: "from-blue-700 via-indigo-600 to-teal-500",
      techStack: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Django", icon: SiDjango, color: "#44B78B" },
        { name: "Celery", icon: SiCelery, color: "#37814A" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      ],
      features: [
        { icon: Sparkles, text: tProfit.features[0] },
        { icon: Zap, text: tProfit.features[1] },
        { icon: TrendingUp, text: tProfit.features[2] },
      ],
      image: null, 
      githubUrl: "https://github.com/Streak116",
      liveUrl: undefined, 
    },
    // {
    //   title: tCrm.title,
    //   tagline: tCrm.tagline,
    //   description: tCrm.description,
    //   icon: "⚙️",
    //   gradient: "from-blue-600 via-indigo-500 to-purple-500",
    //   techStack: [
    //     { name: "React Flow", icon: TrendingUp, color: "#FF6B9D" }, 
    //     { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    //     { name: "NestJS", icon: Zap, color: "#E0234E" },
    //     { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    //   ],
    //   features: [
    //     { icon: Sparkles, text: tCrm.features[0] },
    //     { icon: Zap, text: tCrm.features[1] },
    //     { icon: TrendingUp, text: tCrm.features[2] },
    //   ],
    //   image: null,
    //   githubUrl: "https://github.com/Streak116/enterprise-crm",
    //   liveUrl: "https://crm.yourportfolio.com",
    // },
    // {
    //   title: tSupply.title,
    //   tagline: tSupply.tagline,
    //   description: tSupply.description,
    //   icon: "🌍",
    //   gradient: "from-teal-500 via-emerald-500 to-green-500",
    //   techStack: [
    //     { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    //     { name: "React", icon: SiReact, color: "#61DAFB" },
    //     { name: "Node.js", icon: Zap, color: "#339933" }, 
    //   ],
    //   features: [
    //     { icon: Sparkles, text: tSupply.features[0] },
    //     { icon: Zap, text: tSupply.features[1] },
    //     { icon: TrendingUp, text: tSupply.features[2] },
    //   ],
    //   image: null,
    //   githubUrl: "https://github.com/Streak116/supply-chain-dashboard",
    //   liveUrl: "https://logistics.yourportfolio.com",
    // },
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Case Study Card */}
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-8 lg:p-12 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left Column: Content */}
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl lg:text-5xl">{project.icon}</div>
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
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
                      {t("projects.techStack")}
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
                                 className={`w-4 h-4 transition-transform duration-300 group-hover/badge:scale-110 ${(tech.name === "Next.js" || tech.name === "Express") ? 'text-gray-900 dark:text-white' : ''}`} 
                                 style={{ color: (tech.name === "Next.js" || tech.name === "Express") ? undefined : tech.color }}
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
                      {t("projects.keyFeatures")}
                    </h4>
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon className="w-4 h-4 mt-0.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-gray-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        {t("projects.viewSourceCode")}
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        {t("projects.liveDemo")}
                      </motion.a>
                    )}
                  </div>
                </div>

                  {/* Right Column: Image Wrapper */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                      {/* Placeholder generic UI if no image exists */}
                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={`${project.title} mock-up`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="text-center p-6">
                          <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="font-medium text-lg">{t("projects.visualsComingSoon")}</p>
                          <p className="text-sm opacity-70">{t("projects.mockupInfo")}</p>
                        </div>
                      )}
                      
                      {/* Glassmorphic overlay for extra premium feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* More Projects GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {t("projects.moreProjectsTitle")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              {t("projects.moreProjectsDesc")}
            </p>
            <motion.a
              href="https://github.com/Streak116"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              {t("projects.viewOnGithub")}
            </motion.a>
          </div>
        </motion.div>

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
            className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-teal-400/10 rounded-full blur-3xl"
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
            className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
