import React, { useRef } from 'react';
import { motion } from "framer-motion";


function Projects() {

  const projects = [
    {
      name: "Concert Booking App",
      desc: "Full‑stack MERN app with QR ticketing and email delivery.",
      img: "/concert.png",
      github: "https://github.com/yourusername/concert-booking",
      live: "https://yourconcertapp.netlify.app",
    },
    {
      name: "Footwear eCommerce",
      desc: "React + Node storefront with Stripe payments and admin dashboard.",
      img: "/concert.png",
      github: "https://github.com/yourusername/footwear-ecommerce",
      live: "https://yourfootwearshop.vercel.app",
    },
    {
      name: "Event Registration System",
      desc: "Express + MongoDB CRUD system with authentication.",
      img: "/concert.png",
      github: "https://github.com/yourusername/event-registration",
      live: "https://youreventsite.netlify.app",
    },
  ];

  return (
    <>
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[#0f1d3a] text-white px-6 py-24 scroll-mt-24 scroll-smooth">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full text-center"
        >
          <motion.h2
            className="text-4xl font-extrabold mb-10 text-purple-400 cursor-pointer"
            whileHover={{ scale: 1.1, color: '#ffffff' }}
            transition={{ duration: 0.3 }}
          >
            Projects
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, idx) => (
              <motion.a
                key={p.name}
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#13254b] rounded-lg overflow-hidden shadow-md hover:shadow-purple-600 transition duration-300 hover:-translate-y-1 group block"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="p-5">
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-purple-300"
                    whileHover={{ scale: 1.05, color: '#fff' }}
                  >
                    {p.name}
                  </motion.h3>
                  <p className="text-gray-300 text-sm mb-4 min-h-[60px]">{p.desc}</p>
                  <div className="flex justify-center gap-4">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-800 rounded-full text-white text-sm transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-full text-white text-sm transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

    </>
  );
}

export default Projects;
