import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// New projects array based on your resume
const projects = [
  {
    title: "VCCS – Voice Communication and Control System",
    description: "Currently enhancing a Java-based desktop application for VoIP communication, implementing new features, and improving call management functionalities like SIP integration and recording.",
    tech: ["Java", "JavaFX", "PostgreSQL", "Hibernate", "VoIP & SIP", "Multithreading"],
    github: "", // Confidential
 }, // [cite: 24, 25, 26]
  {
    title: "RDPMS – Remote Diagnostics & Predictive Maintenance",
    description: "Created a web app to monitor sensor data from 6,000+ stations, featuring device onboarding, filters, AI-driven maintenance feeds, and secure role-based authentication.",
    tech: ["Spring Boot", "Hibernate", "PostgreSQL", "Spring Security", "JSP", "REST API"],
    github: "", // Confidential
  }, // [cite: 27, 28]
  {
    title: "IPIS – Integrated Passenger Information System",
    description: "Enhanced an existing platform by integrating a critical disaster alert system and making improvements to the user interface (UI) for better user experience.",
    tech: ["C#", ".NET", "SQL Server", "REST APIs", "Multithreading"],
    github: "", // Confidential
  }, // [cite: 29, 30]
  {
    title: "DVR – Digital Voice Recorder",
    description: "Currently developing a desktop app to record audio from 8 channels simultaneously, store metadata, and allow users to sort, merge, and edit audio files.",
    tech: ["JavaFX", "SQL Server", "Multithreading", "CRC Error Detection"],
    github: "", // Confidential
 }, // [cite: 31, 32]
  {
    title: "Ground Control Calibration App",
    description: "Designed an Android app for drone remote joystick calibration, receiving data via COM port at various baud rates and sending calibration data for precise control.",
    tech: ["Android", "Java", "COM Port Communication"],
    github: "", // Confidential
  }, // [cite: 37, 38, 39]
  {
    title: "WhatsApp Chatbot & Persona API",
    description: "As an intern, developed a chatbot using Dialogflow for customer interaction and a Persona API using OpenAI, integrated into a B2B Chrome extension.",
    tech: ["React.js", "Dialogflow", "OpenAI", "Python", "Pandas", "NumPy"],
    github: "https://github.com/pritiyadav-py", // Example link to your GitHub profile
  } // [cite: 44, 45, 46]
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 px-6 pb-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-accent mb-12 text-center" data-aos="fade-down">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold text-text mb-2">{project.title}</h3>
              <p className="text-text/80 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, idx) => (
                  <span key={idx} className="bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full">
                    {techItem}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-accent font-semibold hover:underline"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}