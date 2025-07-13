import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Home() {
  const [typedText, setTypedText] = useState("");
  const [clicked, setClicked] = useState(false);
  const fullText = "MERN Stack Developer | JavaScript | React | Node.js";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center text-center bg-[#0a192f] text-white px-6 py-24 gap-12"
    >
      {/* Left — Text */}
      <motion.div
        className={`flex flex-col items-center justify-center max-w-2xl text-center lg:text-left cursor-pointer ${
          clicked ? "scale-105" : ""
        } transition-transform duration-500 hover:scale-105`}
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        onClick={() => setClicked(true)}
      >
        <h2 className="text-5xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-purple-400">Roopa Tresa A U</span>
        </h2>
        <p className="text-xl sm:text-2xl text-purple-200 mb-6 min-h-[2rem]">
          {typedText}
        </p>

        <motion.a
          href="/roopatresa_resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full font-semibold tracking-wide shadow-lg transition-all duration-300 inline-block"
        >
           Resume
        </motion.a>
      </motion.div>

      <motion.div
        className="flex justify-center items-center"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-[320px] h-[320px] rounded-full group">
          <div className="absolute inset-0 animate-spin-slow bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-60 group-hover:opacity-80"></div>
          <img
            src="pic.jpg"
            alt="Roopa"
            className="relative z-10 w-[300px] h-[300px] rounded-full object-cover border-[6px] border-purple-400 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
