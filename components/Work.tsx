"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workExperience = [
  {
    id: "pennant-se",
    role: "Associate Software Engineer",
    company: "Pennant Technologies",
    logo: "/pennant-logo.png", // update logo path if needed
    duration: "Aug 2023 – Present",
    location: "Visakhapatnam, India",
    details: [
      "Engineered reusable UI components for a custom drag-and-drop UI builder in JavaScript (Total.js), improving developer productivity and design consistency by 40%.",
      "Built complex, schema-driven forms in Angular & TypeScript, enabling highly dynamic user experiences and reducing form development time.",
      "Redesigned and migrated critical backend modules from Spring Boot to Node.js (NestJS), streamlining authentication workflows and boosting backend maintainability.",
      "Developed a workflow automation builder in React + Redux, producing structured JSON for event-driven action mapping used in production systems.",
      "Delivered multiple client-facing POCs for HDFC Bank, directly contributing to successful enterprise conversions.",
      "Optimized frontend performance via lazy loading, memoization, and Redux fine-tuning, cutting render overhead and improving perceived load times.",
      "Integrated REST APIs with robust validation and error handling, while driving Agile delivery and participating in code reviews for quality assurance.",
    ],
  },
  {
    id: "pennant-intern",
    role: "Associate Software Engineer Intern",
    company: "Pennant Technologies",
    logo: "/pennant-logo.png", // update logo path if needed
    duration: "Feb 2023 – Jul 2023",
    location: "Visakhapatnam, India",
    details: [
      "Completed structured training in HTML, CSS, JavaScript, PostgreSQL, and Spring Boot, gaining strong foundations in full-stack development.",
      "Led a 5-member team in developing a Bus Ticket Reservation System, managing task allocation, sprint planning, and integration.",
      "Implemented features including real-time seat booking, payment simulation, passenger email notifications, and admin dashboards for route & fleet management.",
      "Introduced version control and Git workflows to the team, improving collaboration and reducing integration conflicts.",
      "Optimized SQL queries for booking and scheduling workflows, reducing response times for core modules.",
    ],
  },
];

export default function Work() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="work" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left list */}
          <nav aria-label="Work list" className="space-y-4">
            {workExperience.map((job, idx) => {
              const active = idx === selected;
              return (
                <button
                  key={job.id}
                  onClick={() => setSelected(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(idx);
                    }
                  }}
                  aria-pressed={active}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-shadow focus:outline-none
                    ${active ? "bg-blue-600 shadow-lg" : "bg-gray-800 hover:bg-gray-800/90"}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-white/5 flex items-center justify-center p-1">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className={`font-semibold ${active ? "text-white" : "text-gray-100"}`}>
                      {job.role}
                    </div>
                    <div className="text-sm text-gray-300">{job.company}</div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Right details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={workExperience[selected].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg min-h-[220px]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {workExperience[selected].role}
                      <span className="text-gray-400 font-medium"> — {workExperience[selected].company}</span>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      {workExperience[selected].duration} • {workExperience[selected].location}
                    </p>
                  </div>

                  <div className="hidden md:block flex-shrink-0 w-20 h-20 rounded-md bg-white/5 p-2">
                    <img
                      src={workExperience[selected].logo}
                      alt={`${workExperience[selected].company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <ul className="list-disc list-inside mt-6 space-y-3 text-gray-200">
                  {workExperience[selected].details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
