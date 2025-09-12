"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4 text-gray-600">Feel free to reach out to me:</p>
      <ul className="space-y-2 text-lg">
        <li>📧 <a href="mailto:md116imran@gmail.com" className="text-blue-600">md116imran@gmail.com</a></li>
        <li>📱 8985438536</li>
        <li>🔗 <a href="https://linkedin.com/in/md-116-imran" target="_blank" className="text-blue-600">LinkedIn</a></li>
      </ul>
    </motion.div>
  );
}
