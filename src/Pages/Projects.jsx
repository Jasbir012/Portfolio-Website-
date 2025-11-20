import ProjectCard from "../Components/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "🌾 Farming RPG",
      description:
        "A cozy farming RPG inspired by Stardew Valley. Built in Unity using C# and custom sprite animations. Features farming, crafting, and NPC interactions.",
      image: "https://i.pinimg.com/736x/78/c9/af/78c9afb287ed2e89c9eda13e96ee094c.jpg",
      github: "https://github.com/Jasbir012/FarmingRPG",
      demo: "",
    },
    {
      title: "Task-Tracker",
      description:
        "This isn’t your usual boring to-do list. Progress Tracker turns your daily goals into quests, your completed tasks into achievements, and your day into a level to conquer. Stay consistent, earn XP, and watch your progress grow, because life’s better when productivity feels like a game.",
      image: "assets/UserTasks.png",
      github: "https://github.com/Jasbir012/Task-Tracker",
      demo: "https://nightmare1n.itch.io/tracker",
    },
   
    {title: "Luna-AI",
      description: "Luna AI is a friendly chatbot designed to talk, learn, and help in a natural way. Built to feel more like a companion than a command line.",
      image: "assets/Luna AI.gif",
      github: "https://github.com/Jasbir012/Luna-AI-",
      demo:"",
    },

    {title: "Expense-tracker",
      description:"A simple and efficient Expense Tracker built with Python and SQLite, allowing users to add, view, and manage their spending with local data storage.",
      image:"assets/Expense Tracker.png",
      github:"https://github.com/Jasbir012/Expenses-Tracker-",
      demo:"",
    },

      {title: "Portfolio Website",
      description:"This project is my personal portfolio website, built using React and TailwindCSS, to showcase my journey as an aspiring Game Developer & Software Developer. The portfolio highlights my featured projects, skills, and experience, all wrapped in a clean, responsive, and modern design.",
      image:"assets/portfolio.png",
      github:"https://github.com/Jasbir012/Portfolio-Website-",
      demo:"https://portfolio-owo.netlify.app/",
    },

     {
      title: "ActionRpg",
      description:"Dive into a vast, hand-crafted world where every battle tests your skill and every choice shapes your destiny. Explore ancient ruins, forge powerful weapons, and face relentless enemies in fast-paced, real-time combat. Your journey will determine the fate of a realm on the edge of collapse.",
      image: "",
      github: "",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20 px-6 md:px-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
