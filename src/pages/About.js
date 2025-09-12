import profile from '../assets/profile.jpg';
export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-24 px-6 py-10">

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        
        <img
          src={profile} // replace this with your image URL or local path
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-teal-400"
        />

        {/* About Text */}
        <div>
          <h2 className="text-3xl font-bold text-teal-400 mb-2">Hi, I'm Priti Yadav</h2>
          <p className="text-lg mb-4">
            I'm a Software Development Engineer with 2+ years of experience working on real-time VoIP,
            JavaFX desktop apps, REST APIs, and full-stack development.
          </p>
          <p className="text-md text-gray-300">
            I love solving complex problems and building clean, scalable software. I'm passionate about emerging technologies,
            and have worked with Java, Spring Boot, SQL, Android, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
