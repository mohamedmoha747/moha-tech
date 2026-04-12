import { motion } from 'framer-motion';
import { FaDumbbell, FaTint, FaUtensils, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ id = 'projects' }) => {
  const projects = [
    {
      icon: <FaDumbbell />,
      title: 'Gym Management System',
      description: 'Admin dashboard with user management and analytics',
      github: 'https://github.com/your-username/gym-management-system',
      liveDemo: 'https://gym-delta-neon.vercel.app/'
    },
    {
      icon: <FaTint />,
      title: 'JN FOOD-CORNER',
      description: 'A full-featured e-commerce platform built using React, focusing on smooth UI, fast performance, and an easy ordering experience.',
      github: 'https://github.com/MOHOmedMOHO747/JN-food-corner',
      liveDemo: 'https://jn-food-corner-9t14.vercel.app/'
    },
    {
      icon: <FaUtensils />,
      title: 'Personal Portfolio',
      description: 'I am a passionate MERN Stack Developer with a strong foundation in building modern web applications.I specialize in JavaScript technologies including React, Node.js, Express, and MongoDB, along with modern CSS frameworks.',
      github: 'https://github.com/MOHOmedMOHO747/Modern-Portfolio',
      liveDemo: 'https://modern-portfolio-ten-alpha.vercel.app/'
    }
  ];

  return (
    <section id={id} className="pt-20 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 px-4"
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 dark:text-blue-300 dark:bg-blue-900 dark:hover:bg-blue-800 transition-colors duration-200"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;