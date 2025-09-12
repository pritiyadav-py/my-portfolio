import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const certificates = [
    {
      title: "Software Engineer ",
      platform: "Hacker Rank",
      file: "/certificates/software_engineer_certificate.pdf",
    },
    {
      title: "C# Basic",
      platform: "Hacker Rank",
      file: "/certificates/c_sharp_basic_certificate.pdf",
    },
    
    {
      title: "Python Basics",
      platform: "Hacker Rank",
      file: "/certificates/python_basic_certificate.pdf",
    },
    {
      title: "PostgreSQL Essentials",
      platform: "Hackerrank",
      file: "/certificates/postgresql.pdf",
    },
    {
      title: "Data Structures in Java",
      platform: "Coding Ninjas",
      file: "/certificates/dsa_java.pdf",
    },
    {
      title: "Java Programming",
      platform: "Coursera",
      file: "/certificates/java_programming.pdf",
    },
    {
      title: "React Developer Bootcamp",
      platform: "Udemy",
      file: "/certificates/react_bootcamp.pdf",
    },
    {
      title: "Spring Boot REST APIs",
      platform: "Great Learning",
      file: "/certificates/spring_boot.pdf",
    },
    {
      title: "PostgreSQL Essentials",
      platform: "Hackerrank",
      file: "/certificates/postgresql.pdf",
    },
    {
      title: "Data Structures in Java",
      platform: "Coding Ninjas",
      file: "/certificates/dsa_java.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-24 px-6 py-10">

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-10">
          🎓 My Certifications
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{cert.platform}</p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-full"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
