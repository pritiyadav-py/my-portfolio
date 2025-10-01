import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new URLSearchParams(new FormData(form)).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 px-6 pb-20 overflow-x-hidden"
    >
      <h2
        className="text-5xl sm:text-6xl font-bold text-accent text-center mb-4 font-handwritten"
        data-aos="fade-down"
      >
        💌 Get In Touch
      </h2>
      <div className="text-center text-text/80 text-lg mb-10 max-w-2xl mx-auto font-quirky" data-aos="fade-up">
        <Typewriter
          words={[
            "Got questions, ideas, or just tired of 404s in life? Ping me!",
            'console.log("You should totally message me!")',
            "Whether it’s bugs, bytes, or brainstorming — I’m all ears.",
            "You ping, I pong. Let’s get the async started!",
            "I'm like an open API — send a POST request with your thoughts."
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={40}
          deleteSpeed={30}
          delaySpeed={2500}
        />
      </div>

      <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-2xl shadow-2xl relative z-10 border border-accent/20" data-aos="zoom-in-up">
        {!submitted ? (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="text-accent text-lg font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Elon Musk"
                className="mt-1 w-full px-4 py-3 rounded-lg bg-primary border border-text/20 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="text-accent text-lg font-semibold">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@awesome.com"
                className="mt-1 w-full px-4 py-3 rounded-lg bg-primary border border-text/20 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="text-accent text-lg font-semibold">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me something amazing..."
                className="mt-1 w-full px-4 py-3 rounded-lg bg-primary border border-text/20 focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/80 text-white py-3 rounded-lg font-bold text-lg shadow-lg transition-transform transform hover:scale-105"
            >
              🚀 Send It!
            </button>
          </form>
        ) : (
          <div className="bg-green-600 p-6 rounded-xl shadow-lg text-white text-center text-lg font-semibold">
            ✅ Thanks for messaging! I’ll get back to you faster than you expect .
          </div>
        )}
      </div>
    </motion.div>
  );
}