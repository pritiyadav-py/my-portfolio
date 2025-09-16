import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-24 px-6 py-10">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-r from-teal-600 to-transparent opacity-30 z-0 rounded-b-full blur-2xl"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-teal-400 mb-4">📬 Contact Me</h2>
        <p className="text-gray-300 text-lg mb-10">
          Let's connect! I'm open to freelance, collaborations or full-time SDE roles.
        </p>

        {/* Contact Info */}
        <div className="space-y-6 text-left sm:text-center">
          <ContactItem
            icon={<FaEnvelope />}
            label="Email"
            value="pritisunita6643@gmail.com"
            link="mailto:pritisunita6643@gmail.com"
          />
          <ContactItem
            icon={<FaLinkedin />}
            label="LinkedIn"
            value="linkedin.com/in/pritiyadav-py"
            link="https://linkedin.com/in/pritiyadav-py"
          />
          <ContactItem
            icon={<FaGithub />}
            label="GitHub"
            value="github.com/pritiyadav-py"
            link="https://github.com/pritiyadav-py"
          />
        </div>

        {/* Resume */}
        <div className="mt-12" data-aos="fade-up">
          <a
            href="/Priti_Yadav_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">💬 Send Me a Message</h3>

          {!submitted ? (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={() => setSubmitted(true)}
              className="bg-gray-800 p-6 rounded-lg shadow-xl space-y-6 text-left"
              
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-teal-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-teal-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-teal-300 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded shadow-md transition hover:scale-105"
              >
                📩 Send Message
              </button>
            </form>
          ) : (
            <div className="bg-green-600 text-white p-6 mt-6 rounded-lg shadow-md">
              ✅ Thank you! Your message has been submitted.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, link }) {
  return (
    <div
      className="flex items-center justify-start sm:justify-center gap-3 text-lg group transition-transform duration-300 hover:scale-105"
      data-aos="fade-up"
    >
      <div className="text-2xl text-teal-400">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 font-medium transition-colors"
        >
          {value}
        </a>
      </div>
    </div>
  );
}


// import { useEffect } from "react";
// import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Contact() {
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
