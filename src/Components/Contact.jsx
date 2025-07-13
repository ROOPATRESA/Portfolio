import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert(
            `Failed to send message. Please try again. Error: ${
              error.text || error
            }`
          );
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white px-6 py-24 scroll-mt-24 scroll-smooth"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full text-center"
        >
          <motion.h2
            className="text-4xl font-extrabold mb-10 text-purple-400 cursor-pointer"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            Contact Me
          </motion.h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="px-4 py-3 rounded bg-[#13254b] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="px-4 py-3 rounded bg-[#13254b] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="px-4 py-3 rounded bg-[#13254b] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="mt-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      <footer className="bg-[#0f1d3a] text-purple-200 text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Roopa Tresa A U. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default Contact;
