import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
// Importing icons to add visual interest
import { FaJava, FaDesktop, FaNetworkWired, FaYinYang } from 'react-icons/fa';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 px-6 pb-20 flex justify-center items-center"
    >
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        
        {/* --- Top Section: Intro --- */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

          <motion.img
  src={profile}
  alt="Priti Yadav"
  whileHover={{ scale: 1.05 }}
  className="w-48 h-64 object-cover border-4 border-accent shadow-lg flex-shrink-0
             rounded-full animate-gentle-tilt"
/>


          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-accent mb-2">About Me</h1>
            <p className="text-lg text-text/90">
              I am a detail-oriented Software Development Engineer with over two years of experience specializing in Java, Spring Boot, and REST APIs.  My passion lies in solving complex technical challenges and developing scalable, high-performance applications from scratch.
            </p>
          </div>
        </div>

        {/* --- Middle Section: What I Do --- */}
        <div className="bg-secondary p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-text text-center mb-6">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <FaJava className="text-4xl text-accent mb-2" />
              <h3 className="font-semibold text-lg">Backend Development</h3>
              <p className="text-sm text-text/70">Building robust server-side applications using Java, Spring Boot, and Hibernate.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <FaDesktop className="text-4xl text-accent mb-2" />
              <h3 className="font-semibold text-lg">Desktop Applications</h3>
              <p className="text-sm text-text/70">Experience designing and enhancing desktop tools for critical systems like VoIP communication. </p>
            </div>

            <div className="flex flex-col items-center">
              <FaNetworkWired className="text-4xl text-accent mb-2" />
              <h3 className="font-semibold text-lg">Full-Stack Solutions</h3>
              <p className="text-sm text-text/70">Developing full-stack web apps, from secure REST APIs to responsive user interfaces. </p>
            </div>

          </div>
        </div>

        {/* --- Bottom Section: Personal Touch --- */}
        <div className="text-center">
            <FaYinYang className="text-3xl text-accent mb-2 mx-auto" />
            <h3 className="font-semibold text-lg">Beyond The Code</h3>
            <p className="text-text/70">When I'm not programming, I practice yoga, where I'm a State & North Zone Gold Medalist.  This discipline helps me bring focus and balance to every project I undertake.</p>
        </div>

      </div>
    </motion.div>
  );
}