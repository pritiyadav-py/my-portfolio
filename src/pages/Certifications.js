import { motion } from 'framer-motion';

// Updated certificates array from your resume
const certifications = [
  {
    title: "Java Full Stack Developer",
    platform: "JSpider, Gurugram (Offline)",
    date: "Jun-Nov 2023",
  }, // [cite: 51, 55]
  {
    title: "Java DSA",
    platform: "Scaler Academy (Online)",
    date: "Aug-Oct 2024",
  }, // [cite: 52, 56]
  {
    title: "React.js",
    platform: "Scaler Academy (Online)",
    date: "Nov-Dec 2024",
  }, // [cite: 53, 57]
  {
    title: "Machine Learning",
    platform: "Columbia University (Online)",
    date: "Aug-Ongoing",
  }, // [cite: 54, 58]
  {
    title: "HackerRank Certifications",
    platform: "Software Engineer, Python (Basic), SQL (Advanced), C# (Basic)",
    date: "5 Stars in Java & SQL",
    link: "https://www.hackerrank.com/profile/pritisunita6643"
  }, // [cite: 59, 60]
];

export default function Certifications() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 px-6 pb-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-accent mb-12" data-aos="fade-down">
          🎓 Certifications & Training
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-left flex flex-col justify-between"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-text mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-text/70 mb-2">{cert.platform}</p>
                <p className="text-xs text-accent font-mono mb-4">{cert.date}</p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/80 text-white text-sm px-4 py-2 rounded-full font-bold transition-transform hover:scale-105 self-start"
                >
                  View Profile
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}