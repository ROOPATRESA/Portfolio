import React from 'react'
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-[#0f1d3a] text-white px-6 py-24 scroll-mt-24 scroll-smooth">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-purple-400"
          whileHover={{ scale: 1.05, color: '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-gray-200"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          I'm Roopa Tresa A U, a passionate <span className="text-purple-300 font-semibold">MERN stack developer</span> with a strong interest in building web applications and solving real-world problems. Though I come from a non-IT background, I discovered a deep interest in coding and technology, and I've been continuously learning and developing full-stack applications.
        </motion.p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            className="bg-[#13254b] p-6 rounded-lg shadow-md hover:shadow-purple-600 transition duration-300 hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-300">My Strength</h3>
            <p className="text-gray-300 text-sm">Curious, self-driven, and highly motivated to keep learning new technologies. I enjoy breaking down complex tasks and solving them step by step.</p>
          </motion.div>
          <motion.div
            className="bg-[#13254b] p-6 rounded-lg shadow-md hover:shadow-purple-600 transition duration-300 hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Current Focus</h3>
            <p className="text-gray-300 text-sm">Creating full‑stack projects using React, Node.js, Express, and MongoDB to grow my skills and become job‑ready for developer roles.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
  
