import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-28 px-6 pb-20 font-quirky overflow-x-hidden">
      {/* Header bubble */}
      <h2
        className="text-5xl sm:text-6xl font-bold text-teal-400 text-center mb-4 animate-bounce font-handwritten"
        data-aos="fade-down"
      >
        💌 Slide into my inbox
      </h2>
      <div className="text-center text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-quirky" data-aos="fade-up">
      <Typewriter
        words={[
          "💬 I'm like an open API — send a POST request with your thoughts.",
          "🧠 Got questions, ideas, or just tired of 404s in life? Ping me!",
          "🛠️ Whether it’s bugs, bytes, or brainstorming — I’m all ears.",
          '🖥️ console.log("You should totally message me")',
          "🏓 You ping, I pong. Let’s get the async started!",
          "👾 I compile good code and better conversations. Let’s talk tech.",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={40}
        deleteSpeed={30}
        delaySpeed={2500}
      />
    </div>


      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl relative z-10 border border-teal-500" data-aos="zoom-in-up">
        {!submitted ? (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="flex flex-col gap-1">
              <label className="text-teal-300 text-lg font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Elon Musk 👀"
                className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-teal-300 text-lg font-semibold">
                Email <span className="text-gray-400 text-sm">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@awesome.com"
                className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-teal-300 text-lg font-semibold">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me something good 🌈"
                className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg transition hover:scale-105"
            >
              🚀 Send It!
            </button>
          </form>
        ) : (
          <div className="bg-green-600 p-6 rounded-xl shadow-lg text-white text-center text-lg font-semibold animate-pulse">
            ✅ Thanks for messaging! I’ll get back to you faster than you expect 😉
          </div>
        )}
      </div>

      {/* Contact Links */}
      <div className="mt-14 text-center space-y-6" data-aos="fade-up">
        <ContactLink icon={<FaEnvelope />} text="pritisunita6643@gmail.com" link="mailto:pritisunita6643@gmail.com" />
        <ContactLink icon={<FaLinkedin />} text="linkedin.com/in/pritiyadav-py" link="https://linkedin.com/in/pritiyadav-py" />
        <ContactLink icon={<FaGithub />} text="github.com/pritiyadav-py" link="https://github.com/pritiyadav-py" />
        <a
          href="/Priti_Yadav_Resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-md shadow-lg transition hover:scale-105 mt-4"
        >
          <FaDownload />
          Resume? Yes, please.
        </a>
      </div>
    </div>
  );
}

function ContactLink({ icon, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 text-lg text-teal-300 hover:text-white font-medium transition-transform transform hover:scale-105"
    >
      <span className="text-2xl">{icon}</span>
      <span>{text}</span>
    </a>
  );
}

// import { useEffect, useState } from "react";
// import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(new FormData(form)).toString(),
//     })
//       .then(() => setSubmitted(true))
//       .catch((error) => alert(error));
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-24 px-6 py-10">
//       {/* Background Accent */}
//       <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-r from-teal-600 to-transparent opacity-30 z-0 rounded-b-full blur-2xl"></div>

//       <div className="max-w-3xl mx-auto text-center relative z-10" data-aos="fade-up">
//         <h2 className="text-4xl font-bold text-teal-400 mb-4">📬 Contact Me</h2>
//         <p className="text-gray-300 text-lg mb-10">
//           Let's connect! I'm open to freelance, collaborations or full-time SDE roles.
//         </p>

//         {/* Contact Info */}
//         <div className="space-y-6 text-left sm:text-center">
//           <ContactItem
//             icon={<FaEnvelope />}
//             label="Email"
//             value="pritisunita6643@gmail.com"
//             link="mailto:pritisunita6643@gmail.com"
//           />
//           <ContactItem
//             icon={<FaLinkedin />}
//             label="LinkedIn"
//             value="linkedin.com/in/pritiyadav-py"
//             link="https://linkedin.com/in/pritiyadav-py"
//           />
//           <ContactItem
//             icon={<FaGithub />}
//             label="GitHub"
//             value="github.com/pritiyadav-py"
//             link="https://github.com/pritiyadav-py"
//           />
//         </div>

//         {/* Resume */}
//         <div className="mt-12" data-aos="fade-up">
//           <a
//             href="/Priti_Yadav_Resume.pdf"
//             download
//             className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:scale-105"
//           >
//             <FaDownload />
//             Download Resume
//           </a>
//         </div>

//         {/* Interactive Contact Form */}
//         <div className="mt-16" data-aos="fade-up">
//           <h3 className="text-2xl font-semibold text-teal-400 mb-4">💬 Send Me a Message</h3>

//           {!submitted ? (
//             <form
//               name="contact"
//               method="POST"
//               data-netlify="true"
//               onSubmit={handleSubmit}
//               className="bg-gray-800 p-8 rounded-lg shadow-2xl space-y-6 text-left border border-gray-700"
//             >
//               <input type="hidden" name="form-name" value="contact" />

//               <div>
//                 <label className="block text-teal-300 mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Your name"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-teal-300 mb-1">Email <span className="text-gray-400">(optional)</span></label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="your@email.com"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-teal-300 mb-1">Message</label>
//                 <textarea
//                   name="message"
//                   rows="5"
//                   required
//                   placeholder="Type your message..."
//                   className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
//               >
//                 🚀 Send Message
//               </button>
//             </form>
//           ) : (
//             <div className="bg-green-600 text-white p-6 mt-6 rounded-lg shadow-md">
//               ✅ Thank you! Your message has been submitted.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ContactItem({ icon, label, value, link }) {
//   return (
//     <div
//       className="flex items-center justify-start sm:justify-center gap-3 text-lg group transition-transform duration-300 hover:scale-105"
//       data-aos="fade-up"
//     >
//       <div className="text-2xl text-teal-400">{icon}</div>
//       <div>
//         <p className="text-sm text-gray-400">{label}</p>
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-teal-400 font-medium transition-colors"
//         >
//           {value}
//         </a>
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-24 px-6 py-10">
//       {/* Background Accent */}
//       <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-r from-teal-600 to-transparent opacity-30 z-0 rounded-b-full blur-2xl"></div>

//       <div className="max-w-3xl mx-auto text-center relative z-10" data-aos="fade-up">
//         <h2 className="text-4xl font-bold text-teal-400 mb-4">📬 Contact Me</h2>
//         <p className="text-gray-300 text-lg mb-10">
//           Let's connect! I'm open to freelance, collaborations or full-time SDE roles.
//         </p>

//         {/* Contact Info */}
//         <div className="space-y-6 text-left sm:text-center">
//           <ContactItem
//             icon={<FaEnvelope />}
//             label="Email"
//             value="pritisunita6643@gmail.com"
//             link="mailto:pritisunita6643@gmail.com"
//           />
//           <ContactItem
//             icon={<FaLinkedin />}
//             label="LinkedIn"
//             value="linkedin.com/in/pritiyadav-py"
//             link="https://linkedin.com/in/pritiyadav-py"
//           />
//           <ContactItem
//             icon={<FaGithub />}
//             label="GitHub"
//             value="github.com/pritiyadav-py"
//             link="https://github.com/pritiyadav-py"
//           />
//         </div>

//         {/* Resume */}
//         <div className="mt-12" data-aos="fade-up">
//           <a
//             href="/Priti_Yadav_Resume.pdf"
//             download
//             className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:scale-105"
//           >
//             <FaDownload />
//             Download Resume
//           </a>
//         </div>

//         {/* Contact Form */}
//         <div className="mt-16" data-aos="fade-up">
//           <h3 className="text-2xl font-semibold text-teal-400 mb-4">💬 Send Me a Message</h3>

//           {!submitted ? (
//             <form
//               name="contact"
//               method="POST"
//               data-netlify="true"
//               onSubmit={() => setSubmitted(true)}
//               className="bg-gray-800 p-6 rounded-lg shadow-xl space-y-6 text-left"
              
//             >
//               <input type="hidden" name="form-name" value="contact" />

//               <div>
//                 <label className="block text-teal-300 mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-teal-300 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-teal-300 mb-1">Message</label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   required
//                   className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-400"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded shadow-md transition hover:scale-105"
//               >
//                 📩 Send Message
//               </button>
//             </form>
//           ) : (
//             <div className="bg-green-600 text-white p-6 mt-6 rounded-lg shadow-md">
//               ✅ Thank you! Your message has been submitted.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ContactItem({ icon, label, value, link }) {
//   return (
//     <div
//       className="flex items-center justify-start sm:justify-center gap-3 text-lg group transition-transform duration-300 hover:scale-105"
//       data-aos="fade-up"
//     >
//       <div className="text-2xl text-teal-400">{icon}</div>
//       <div>
//         <p className="text-sm text-gray-400">{label}</p>
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-teal-400 font-medium transition-colors"
//         >
//           {value}
//         </a>
//       </div>
//     </div>
//   );
// }
