import {motion}  from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
function Home(){
  return(

<section id="home"
    className="min-h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white pt-20">
      
<motion.div
  className="flex-1 flex flex-col items-start justify-center"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay:0.3 }}
>
  <h1 className="text-4xl md:text-6xl font-bold mb-4">
  Hello, I’m <span className="text-blue-400">Jasbir Singh</span>
  </h1>

  <p className="text-gray-300 mb-6 text-lg max-w-md">
  <span className="text-blue-400">Game Developer</span> &{" "}
  <span className="text-purple-400">Designer</span> |{" "}
  <Typewriter
    words={["Bringing ideas to life", "Crafting cozy worlds", "Turning imagination into code"]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={2000}
  />
</p>
  <div className="flex space-x-4">
    <a href="#projects" className="px-5 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-all"> View My Work </a>
     <a href="#contact" className="px-5 py-3 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all"> Contact Me </a>

  </div>
</motion.div>

<motion.div
  className="flex-1 flex justify-center mt-10 md:mt-0 relative"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay:0.3 }}
>
  <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full -z-10 w-64 h-64 md:w-80 md:h-80 mx-auto"></div>
  <img
    src="https://i.pinimg.com/originals/36/56/1a/36561ac2de9a4fdf22be032a3accead9.gif"
    alt="Profile"
    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-400 shadow-lg hover:scale-110 transition-transform duration-300"
  />
</motion.div>



</section>


  );

}

export default Home;