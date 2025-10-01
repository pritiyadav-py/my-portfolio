import { motion } from 'framer-motion';
import { VscVscode } from 'react-icons/vsc';
// Corrected imports: Changed SiVisualstudiocode to SiVscode
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaWindows } from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiPostgresql, SiMysql, SiOracle, SiJquery, SiPandas, SiNumpy, SiPostman, SiGithub, SiJupyter, SiAndroidstudio, SiApachekafka, SiRabbitmq, SiUbuntu, SiEclipseide } from 'react-icons/si';
const skills = [
  {
    category: "Programming Languages",
    icon: "🧠",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "🏗️",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Hibernate", icon: <SiHibernate /> },
      { name: "Spring Security", icon: <SiSpringboot /> },
      { name: "JavaFX", icon: <FaJava /> },
      { name: "JSP", icon: <FaJava /> },
      { name: "Servlets", icon: <FaJava /> },
      { name: "JPA", icon: <FaJava /> },
    ],
  },
  {
    category: "Web Development",
    icon: "🎨",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "AJAX", icon: <FaJs /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
  },
   // NEW CATEGORY ADDED TO FIX WARNINGS
  {
    category: "Data Handling",
    icon: "📊",
    items: [
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: [
      { name: "Oracle", icon: <SiOracle /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "PL/SQL", icon: <FaDatabase /> },
    ],
  },
   {
    category: "Tools & Services",
    icon: "⚙️",
    items: [
      { name: "Postman", icon: <SiPostman /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "REST APIs", icon: <SiPostman /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "Microservices", icon: <FaDatabase /> },
    ],
  },
  {
    category: "IDEs & OS",
    icon: "💻",
    items: [
      { name: "Eclipse", icon: <SiEclipseide /> },
      { name: "VS Code", icon: <VscVscode /> }, // <-- Change this line
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "Android Studio", icon: <SiAndroidstudio /> },
      { name: "Windows", icon: <FaWindows /> },
      { name: "Ubuntu Linux", icon: <SiUbuntu /> },
    ],
  },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 px-6 pb-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-accent mb-12" data-aos="fade-down">
          🧰 My Technical Toolkit
        </h2>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          animate="visible"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ rotateY: 5, rotateX: 2, y: -8, scale: 1.02 }}
              className="bg-secondary p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-text mb-4 flex items-center gap-3">
                <span className="text-2xl">{group.icon}</span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full shadow cursor-pointer transition-all duration-300 dark:bg-accent/80 dark:text-white bg-accent/10 text-accent dark:hover:bg-accent hover:bg-accent/20"
>
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}