import React from 'react';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiBootstrap } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-3xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-3xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-3xl text-yellow-300" /> },
    { name: "React", icon: <FaReact className="text-3xl text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-3xl text-gray-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-3xl text-red-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-3xl text-purple-500" /> },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white px-6 py-24 scroll-mt-24 scroll-smooth">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
      >
        <motion.h2
          className="text-4xl font-extrabold mb-10 text-purple-400 cursor-pointer"
          whileHover={{ scale: 1.1, color: '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-[#13254b] p-6 rounded-lg shadow-md text-purple-200 font-semibold hover:shadow-purple-500 transition duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer"
            >
              {skill.icon}
              <span className="text-base mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
