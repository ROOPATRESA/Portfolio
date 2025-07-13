import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="bg-[#0a192f] text-white fixed top-0 w-full z-50 shadow-lg border-b border-purple-500 backdrop-blur-md bg-opacity-90 dark:bg-white dark:text-black transition duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.h1
          className="text-2xl font-extrabold tracking-widest text-purple-400 cursor-pointer dark:text-purple-600"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Roopa Tresa A U
        </motion.h1>
        <div className="flex items-center">
          <ul className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-wide">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="dark:hover:text-purple-600"
              >
                <a
                  href={`#${item}`}
                  className="transition-all duration-300 hover:text-purple-400 dark:hover:text-purple-700"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
