import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-800 flex flex-col justify-center items-center text-white px-6 md:px-20 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-5xl flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <img
          src="https://i.pinimg.com/736x/0f/ec/bd/0fecbd6b25bee1758058155b31911bb0.jpg"
          alt="About Illustration"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-blue-400 shadow-lg"
        />

        {/* About Text */}
        <div className="text-center md:text-left">
          <p className="text-gray-300 mb-4 leading-relaxed">
            I’m <span className="text-blue-400 font-semibold">Jasbir</span> — an aspiring
            <span className="text-blue-400"> solo game developer</span> who loves blending art,
            code, and creativity into interactive worlds. My journey revolves
            around building cozy-yet-fantastical games with emotional depth.
          </p>

         <p className="text-gray-300 mb-6 leading-relaxed">
           I currently focus on <span className="text-blue-400">Unity</span> and <span className="text-blue-400">Blender</span> to build immersive gameplay experiences and stylized 3D environments. 
           My main programming language is <span className="text-blue-400">C#</span>, which I use for scripting and game mechanics in Unity. 
           Earlier, I explored <span className="text-blue-400">Unreal Engine</span> and strengthened my programming foundation through <span className="text-blue-400">C++</span> and Data Structures. 
           I also enjoy creating small tools and projects in <span className="text-blue-400">Python</span>, including an expense tracker and a personal AI assistant called <span className="text-blue-400">Luna</span>.
         </p>


          <p className="text-gray-300 mb-6 leading-relaxed">
            Beyond games, I explore <span className="text-blue-400">React</span> and{" "}
            <span className="text-blue-400">TailwindCSS</span> to build smooth, modern web apps.
            I believe in designing immersive experiences, whether it’s through
            a game world or a beautifully responsive website.
          </p>

          {/* Skills */}
          <h3 className="text-xl font-semibold mb-3 text-blue-400">Skills & Tools:</h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-3">
            {[
              "Unity",
              "Unreal Engine",
              "Blender",
              "C#",
              "C++",
              "Python",
              "React",
              "TailwindCSS",
              "Git",
              "Css",
              "HTML",
            ].map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 hover:border-blue-400 transition-all"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
