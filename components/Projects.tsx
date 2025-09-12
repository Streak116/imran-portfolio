"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Profit Streak</h3>
          <p className="mt-2 text-gray-600">
            LLM-Powered Stock Market Analysis Platform with real-time RAG system for financial insights.
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
            <li>Improved stock insights accuracy by 20% with RAG system.</li>
            <li>Automated stock news ingestion, indexing, and semantic search.</li>
            <li>Frontend in React + Next.js (TypeScript), backend in Django + Celery.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
