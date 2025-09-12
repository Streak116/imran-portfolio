"use client";

import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Associate Software Engineer - Pennant Technologies</h3>
          <p className="text-gray-600">Aug 2023 - Present | Visakhapatnam, India</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Developed reusable UI components for a drag-and-drop UI builder, improving efficiency by 40%.</li>
            <li>Built backend modules with NestJS & migrated legacy Spring Boot projects.</li>
            <li>Developed workflow builder with React + Redux for dynamic event mapping.</li>
            <li>Optimized frontend with lazy loading & Redux performance tuning.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Associate Software Engineer Intern - Pennant Technologies</h3>
          <p className="text-gray-600">Feb 2023 - Jul 2023 | Visakhapatnam, India</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Completed training in HTML, CSS, JS, PostgreSQL & Spring Boot.</li>
            <li>Led a 5-member team in building a bus ticket reservation system.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
