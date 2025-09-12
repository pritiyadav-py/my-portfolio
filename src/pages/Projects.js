export default function Projects() {
  const projects = [
    {
      title: "VCCS – Voice Communication and Control System (Confidential)",
      description:
        "Designed and enhanced a desktop application for defense-grade VoIP call management using JavaFX and SIP protocols. Integrated call recording, prioritization, and multithreading for real-time performance.",
      tech: ["Java", "JavaFX", "PostgreSQL", "SIP", "VoIP", "Multithreading"],
      github: "", // confidential
    },
    {
      title: "RDPMS – Remote Diagnostics and Predictive Maintenance System",
      description:
        "Built a full-stack web app to monitor 6,000+ sensor stations with real-time data filters and AI-powered fault prediction. Implemented secure role-based access and REST APIs.",
      tech: ["Spring Boot", "PostgreSQL", "AJAX", "Spring Security", "REST"],
      github: "", // confidential
    },
    {
      title: "DVR – Digital Voice Recorder (Confidential)",
      description:
        "Developed a desktop tool to record, store, sort, and edit 8-channel audio data with CRC and metadata logging. Used in critical communication systems.",
      tech: ["JavaFX", "SQL Server", "Multithreading", "CRC"],
      github: "", // confidential
    },
    {
      title: "Ground Control Calibration App",
      description:
        "An Android-based tool for calibrating remote joystick controls used in UAV systems. It communicates via COM port at various baud rates and performs live monitoring.",
      tech: ["Android", "Java", "COM Port", "Baud Rate", "UI Calibration"],
      github: "", // confidential
    },
    {
      title: "WhatsApp Chatbot for Customer Support",
      description:
        "Created a chatbot using Dialogflow and AiSensy for live customer interaction. Integrated with B2B Chrome extension using OpenAI APIs.",
      tech: ["React.js", "Dialogflow", "OpenAI", "AiSensy"],
      github: "https://github.com/pritiyadav-py/chatbot-project", // ✅ example public project
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-24 px-6 py-10">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-400 mb-8 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="bg-white text-gray-500 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-700 text-white text-xs px-2 py-1 rounded"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-teal-400 hover:underline"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




// export default function Projects() {
//   const projects = [
//     {
//       title: "VCCS (Voice Communication and Control System)",
//       description:
//         "Enhanced a Java-based desktop app for VoIP call control, SIP integration, call recording, and multithreaded audio features.",
//       tech: ["Java", "JavaFX", "PostgreSQL", "Asterisk", "SIP", "Multithreading"],
//       github: "https://github.com/pritiyadav-py", // or actual repo if you like
//     },
//     {
//       title: "RDPMS (Remote Diagnostics and Predictive Maintenance System)",
//       description:
//         "Web app to monitor data from 6,000 stations with AI-powered diagnostics and role-based access.",
//       tech: ["Spring Boot", "JSP", "AJAX", "PostgreSQL"],
//       github: "",
//     },
//     {
//       title: "DVR Audio Recorder",
//       description:
//         "Desktop tool to record, sort, merge and edit multi-channel voice data with metadata.",
//       tech: ["JavaFX", "SQL Server", "Multithreading", "CRC"],
//       github: "",
//     },
//     // Add more projects as needed
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-teal-400 mb-8 text-center">Projects</h2>
//         <div className="grid gap-8 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
//             >
//               <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
//               <p className="text-gray-300 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((techItem, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-teal-700 text-white text-xs px-2 py-1 rounded"
//                   >
//                     {techItem}
//                   </span>
//                 ))}
//               </div>
//               {project.github && (
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-2 text-teal-400 hover:underline"
//                 >
//                   View on GitHub →
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
