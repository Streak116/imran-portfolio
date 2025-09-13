"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science",
    school: "Maharaja Vijayaram Gajapathi Raj College of Engineering",
    year: "2020 – 2023",
    location: "Visakhapatnam, India",
    logo: "/mvgr-logo.jpg",
  },
  {
    degree: "Diploma, Computer Engineering",
    school: "Sankethika Polytechnic College",
    year: "2017 – 2020",
    location: "India",
    logo: "/sankethika.webp",
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative py-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-600"></div>

        <div className="space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col lg:flex-row items-center"
            >
              {/* Icon on center line */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Card with arrow */}
              <div
                className={`relative bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full mt-12 lg:mt-0
                ${
                  index % 2 === 0
                    ? "lg:mr-auto lg:pr-12 lg:text-right"
                    : "lg:ml-auto lg:pl-12 lg:text-left"
                }`}
              >
                {/* Arrow pointing toward timeline */}
                <div
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent
                  ${
                    index % 2 === 0
                      ? "right-[-20px] border-l-[20px] border-l-gray-800"
                      : "left-[-20px] border-r-[20px] border-r-gray-800"
                  }`}
                ></div>

                {/* Logo + Degree */}
                <div className="flex items-center mb-3 space-x-3">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.school}
                      className="w-10 h-10 object-contain rounded-md"
                    />
                  )}
                  <h3 className="font-bold text-lg">{item.degree}</h3>
                </div>

                <p className="text-blue-400">{item.school}</p>
                <p className="text-sm text-gray-400">
                  {item.year} • {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
