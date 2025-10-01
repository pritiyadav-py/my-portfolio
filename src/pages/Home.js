import { FaReact, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerAnimation from "../assets/developer-lottie.json";
import FallingSkills from "../components/FallingSkills";

// This component now lives in its own file
const skillIcons = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Python", icon: FaPython, color: "#306998" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
];
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-hidden"
    >
      <FallingSkills skills={skillIcons} />


      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center pt-32 px-10 pb-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left" data-aos="fade-right">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold text-accent mb-4"
          >
            Hi, I'm Priti Yadav
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text/80 mb-6"
          >
            Software Development Engineer | Full-Stack Java Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-md text-text/70 mb-10 leading-relaxed"
          >
            I build scalable Java-based systems and intuitive UIs with React.
            I love merging clean architecture with elegant design.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="/Priti_Yadav_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg shadow-lg transition text-center font-bold"
            >
              📄 Download Resume
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition text-center font-bold"
            >
              ✉️ Contact Me
            </motion.a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <Lottie animationData={developerAnimation} loop={true} className="w-full max-w-md" />
        </div>
      </div>
    </motion.div>
  );
}

// import { useEffect } from "react";
// import {
//   FaReact,
//   FaJava,
//   FaPython,
//   FaHtml5,
//   FaCss3Alt,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiSpringboot,
//   SiPostgresql,
// } from "react-icons/si";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const skills = [
//   { icon: <FaReact />, color: "bg-blue-500" },
//   { icon: <FaJava />, color: "bg-orange-600" },
//   { icon: <FaPython />, color: "bg-yellow-500" },
//   { icon: <FaHtml5 />, color: "bg-red-500" },
//   { icon: <FaCss3Alt />, color: "bg-blue-700" },
//   { icon: <SiTailwindcss />, color: "bg-cyan-500" },
//   { icon: <SiSpringboot />, color: "bg-green-600" },
//   { icon: <SiPostgresql />, color: "bg-indigo-600" },
//   { icon: <FaGithub />, color: "bg-gray-800" },
// ];

// export default function Home() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex flex-col justify-center items-center px-6 pt-32">
//       {/* Draggable + falling skill balls */}
//       {skills.map((skill, index) => {
//         const left = `${10 + index * 9}%`; // position left in %
//         const delay = `${index * 0.3}s`;

//         return (
//           <motion.div
//             key={index}
//             drag
//             dragMomentum={false}
//             className={`${skill.color} absolute top-0 text-white text-xl p-4 rounded-full shadow-lg animate-fall z-10 cursor-pointer`}
//             style={{
//               left,
//               animationDelay: delay,
//             }}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {skill.icon}
//           </motion.div>
//         );
//       })}

//       {/* Hero content */}
//       <div className="min-h-screen bg-gray-900 text-white pt-24 px-6 py-10">

//         <h1 className="text-5xl font-extrabold mb-4 text-teal-400">
//           Hi, I'm Priti Yadav
//         </h1>
//         <h2 className="text-xl text-gray-300 mb-6">
//           Software Development Engineer | Full-Stack Java Developer
//         </h2>
//         <p className="text-md text-gray-400 mb-10 leading-relaxed">
//           I build scalable Java-based systems and intuitive UIs with React.
//           I love merging clean architecture with elegant design.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
//           <a
//             href="/Priti_Yadav_Resume.pdf"
//             download
//             className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:scale-105"
//           >
//             📄 Download Resume
//           </a>
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 border border-teal-400 text-teal-400 font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition hover:scale-105"
//           >
//             ✉️ Contact Me
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
