import { motion } from "framer-motion";

function ProjectCard({ title, description, image, github, demo }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition-all border border-gray-700 hover:border-blue-400 flex flex-col"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-auto object-cover" />

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>

        {/* Buttons */}
        <div className="mt-4 flex space-x-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 hover:border-blue-400 transition-all"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all text-white"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
