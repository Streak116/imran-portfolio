"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-xl font-semibold">
            B.Tech - MVGR College of Engineering
          </h3>
          <p className="text-gray-600">
            Aug 2020 - May 2023 | Visakhapatnam, India
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">
            Diploma - Sankethika Polytechnic College
          </h3>
          <p className="text-gray-600">Aug 2017 - May 2020 | India</p>
        </li>
      </ul>
    </motion.div>
  );
}
