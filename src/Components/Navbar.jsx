import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="bg-[#0a192f] text-white fixed top-0 w-full z-50 shadow-lg border-b border-purple-500 backdrop-blur-md bg-opacity-90 dark:bg-white dark:text-black transition duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-extrabold tracking-widest text-purple-400 cursor-pointer dark:text-purple-600"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Roopa Tresa A U
        </motion.h1>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-wide">
          {navLinks.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="dark:hover:text-purple-600"
            >
              <a
                href={`#${item}`}
                className="transition-all duration-300 hover:text-purple-400 dark:hover:text-purple-700"
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col gap-6 text-sm font-semibold uppercase tracking-wide bg-[#0a192f] dark:bg-white px-6 pb-6"
        >
          {navLinks.map((item) => (
            <li key={item} className="border-b border-purple-500 py-2">
              <a
                href={`#${item}`}
                className="block w-full text-left hover:text-purple-400 dark:hover:text-purple-700"
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}

export default Navbar;
