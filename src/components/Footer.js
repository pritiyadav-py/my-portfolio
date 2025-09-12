import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm text-gray-400 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Priti Yadav. All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/pritiyadav-py"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/pritiyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pritiyadav.email@example.com"
            className="hover:text-teal-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
