
import { useEffect } from "react";
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase,
  FaGithub, FaAndroid, FaTools,
} from "react-icons/fa";
import {
  SiPostgresql, SiMysql, SiSpringboot, SiHibernate, SiJquery,
  SiTailwindcss, SiMongodb, SiRabbitmq, SiApachekafka, SiJupyter,
} from "react-icons/si";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticleBackground from "../components/ParticleBackground";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getRandomColor = () => {
    const colors = [
      "bg-teal-500",
      "bg-rose-500",
      "bg-sky-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-emerald-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const skills = [
    {
      category: "Languages",
      icon: "🧠",
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "jQuery", icon: <SiJquery /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend",
      icon: "🛠️",
      items: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Hibernate", icon: <SiHibernate /> },
        { name: "JSP", icon: <FaTools /> },
        { name: "Servlets", icon: <FaTools /> },
      ],
    },
    {
      category: "Database",
      icon: "🗄️",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      category: "Tools",
      icon: "⚙️",
      items: [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Jupyter", icon: <SiJupyter /> },
        { name: "Android Studio", icon: <FaAndroid /> },
      ],
    },
    {
      category: "Other",
      icon: "🚀",
      items: [
        { name: "RabbitMQ", icon: <SiRabbitmq /> },
        { name: "Kafka", icon: <SiApachekafka /> },
        { name: "Multithreading", icon: <FaTools /> },
        { name: "Microservices", icon: <FaTools /> },
        { name: "COM Port", icon: <FaTools /> },
      ],
    },
  ];

  return (
    <div className="relative">
      <ParticleBackground />
      <div className="relative z-10 min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-24 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-teal-400 mb-12">
            🧰 My Technical Toolkit
          </h2>

          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {skills.map((group, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ rotateY: 10, rotateX: 5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">{group.icon}</span>
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex items-center gap-2 ${getRandomColor()} text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:shadow-md cursor-pointer transition-all duration-300`}>
                    
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}



// import { useEffect } from "react";
// import {
//   FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase,
//   FaGithub, FaAndroid, FaTools,
// } from "react-icons/fa";
// import {
//   SiPostgresql, SiMysql, SiSpringboot, SiHibernate, SiJquery,
//   SiTailwindcss, SiMongodb, SiRabbitmq, SiApachekafka, SiJupyter,
// } from "react-icons/si";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ParticleBackground from "../components/ParticleBackground";

// export default function Skills() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const getRandomColor = () => {
//     const colors = [
//       "bg-teal-500",
//       "bg-rose-500",
//       "bg-sky-500",
//       "bg-indigo-500",
//       "bg-purple-500",
//       "bg-yellow-500",
//       "bg-pink-500",
//       "bg-emerald-500",
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const skills = [
//     {
//       category: "Languages",
//       icon: "🧠",
//       items: [
//         { name: "Java", icon: <FaJava /> },
//         { name: "Python", icon: <FaPython /> },
//         { name: "SQL", icon: <FaDatabase /> },
//       ],
//     },
//     {
//       category: "Frontend",
//       icon: "🎨",
//       items: [
//         { name: "HTML5", icon: <FaHtml5 /> },
//         { name: "CSS3", icon: <FaCss3Alt /> },
//         { name: "JavaScript", icon: <FaJs /> },
//         { name: "React.js", icon: <FaReact /> },
//         { name: "jQuery", icon: <SiJquery /> },
//         { name: "Tailwind", icon: <SiTailwindcss /> },
//       ],
//     },
//     {
//       category: "Backend",
//       icon: "🛠️",
//       items: [
//         { name: "Spring Boot", icon: <SiSpringboot /> },
//         { name: "Hibernate", icon: <SiHibernate /> },
//         { name: "JSP", icon: <FaTools /> },
//         { name: "Servlets", icon: <FaTools /> },
//       ],
//     },
//     {
//       category: "Database",
//       icon: "🗄️",
//       items: [
//         { name: "MySQL", icon: <SiMysql /> },
//         { name: "PostgreSQL", icon: <SiPostgresql /> },
//         { name: "MongoDB", icon: <SiMongodb /> },
//       ],
//     },
//     {
//       category: "Tools",
//       icon: "⚙️",
//       items: [
//         { name: "GitHub", icon: <FaGithub /> },
//         { name: "Jupyter", icon: <SiJupyter /> },
//         { name: "Android Studio", icon: <FaAndroid /> },
//       ],
//     },
//     {
//       category: "Other",
//       icon: "🚀",
//       items: [
//         { name: "RabbitMQ", icon: <SiRabbitmq /> },
//         { name: "Kafka", icon: <SiApachekafka /> },
//         { name: "Multithreading", icon: <FaTools /> },
//         { name: "Microservices", icon: <FaTools /> },
//         { name: "COM Port", icon: <FaTools /> },
//       ],
//     },
//   ];

//   return (
//     <div className="relative">
//       <ParticleBackground />

//       <div className="relative z-10 min-h-screen bg-transparent text-white pt-24 px-6 py-10">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-extrabold text-center text-teal-400 mb-12">
//             🧰 My Technical Toolkit
//           </h2>

//           <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//             {skills.map((group, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ rotateY: 10, rotateX: 5 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                 className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform"
//                 data-aos="fade-up"
//               >
//                 <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//                   <span className="text-2xl">{group.icon}</span>
//                   {group.category}
//                 </h3>

//                 <div className="flex flex-wrap gap-3">
//                   {group.items.map((skill, i) => (
//                     <motion.span
//                       key={i}
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       className={`flex items-center gap-2 ${getRandomColor()} text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:shadow-md cursor-pointer transition-all duration-300`}
//                     >
//                       <span className="text-lg">{skill.icon}</span>
//                       <span>{skill.name}</span>
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import {
//   FaJava,
//   FaPython,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaDatabase,
//   FaGithub,
//   FaAndroid,
//   FaTools,
// } from "react-icons/fa";
// import {
//   SiPostgresql,
//   SiMysql,
//   SiSpringboot,
//   SiHibernate,
//   SiJquery,
//   SiTailwindcss,
//   SiMongodb,
//   SiRabbitmq,
//   SiApachekafka,
//   SiJupyter,
// } from "react-icons/si";

// export default function Skills() {
//   const skills = [
//     {
//       category: "Languages",
//       icon: "🧠",
//       items: [
//         { name: "Java", icon: <FaJava /> },
//         { name: "Python", icon: <FaPython /> },
//         { name: "SQL", icon: <FaDatabase /> },
//       ],
//     },
//     {
//       category: "Frontend",
//       icon: "🎨",
//       items: [
//         { name: "HTML5", icon: <FaHtml5 /> },
//         { name: "CSS3", icon: <FaCss3Alt /> },
//         { name: "JavaScript", icon: <FaJs /> },
//         { name: "React.js", icon: <FaReact /> },
//         { name: "jQuery", icon: <SiJquery /> },
//         { name: "Tailwind", icon: <SiTailwindcss /> },
//       ],
//     },
//     {
//       category: "Backend",
//       icon: "🛠️",
//       items: [
//         { name: "Spring Boot", icon: <SiSpringboot /> },
//         { name: "Hibernate", icon: <SiHibernate /> },
//         { name: "JSP", icon: <FaTools /> },
//         { name: "Servlets", icon: <FaTools /> },
//       ],
//     },
//     {
//       category: "Database",
//       icon: "🗄️",
//       items: [
//         { name: "MySQL", icon: <SiMysql /> },
//         { name: "PostgreSQL", icon: <SiPostgresql /> },
//         { name: "MongoDB", icon: <SiMongodb /> },
//       ],
//     },
//     {
//       category: "Tools",
//       icon: "⚙️",
//       items: [
//         { name: "GitHub", icon: <FaGithub /> },
//         { name: "Jupyter", icon: <SiJupyter /> },
//         { name: "Android Studio", icon: <FaAndroid /> },
//       ],
//     },
//     {
//       category: "Other",
//       icon: "🚀",
//       items: [
//         { name: "RabbitMQ", icon: <SiRabbitmq /> },
//         { name: "Kafka", icon: <SiApachekafka /> },
//         { name: "Multithreading", icon: <FaTools /> },
//         { name: "Microservices", icon: <FaTools /> },
//         { name: "COM Port", icon: <FaTools /> },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white pt-24 px-6 py-10">

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-extrabold text-center text-teal-400 mb-12">
//           🧰 My Technical Toolkit
//         </h2>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {skills.map((group, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
//             >
//               <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//                 <span className="text-2xl">{group.icon}</span>
//                 {group.category}
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {group.items.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-400 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:scale-105 transform transition-transform duration-200"
//                   >
//                     <span className="text-lg">{skill.icon}</span>
//                     <span>{skill.name}</span>
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
