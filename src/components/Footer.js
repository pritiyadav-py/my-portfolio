import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Copyright Text */}
        <p className="text-sm text-text/70 text-center sm:text-left">
          © {new Date().getFullYear()} Priti Yadav. All Rights Reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/pritiyadav-py"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/80 hover:text-accent transition-transform transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/pritiyadav-py"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/80 hover:text-accent transition-transform transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pritisunita6643@gmail.com"
            className="text-text/80 hover:text-accent transition-transform transform hover:scale-110"
            aria-label="Email Priti"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}