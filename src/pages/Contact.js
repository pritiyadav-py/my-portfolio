import { useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
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
