import { motion } from 'framer-motion';
import { FaDumbbell, FaTint, FaUtensils } from 'react-icons/fa';

const Projects = ({ id = 'projects' }) => {
  const projects = [
    {
      icon: <FaDumbbell />,
      title: 'Gym Management System',
      description: 'Admin dashboard with user management and analytics'
    },
    {
      icon: <FaTint />,
      title: 'Blood Bank Management System',
      description: 'Donor management with SMS notification system'
    },
    {
      icon: <FaUtensils />,
      title: 'Restaurant Management System',
      description: 'QR-based ordering system with real-time updates'
    }
  ];

  return (
    <section id={id} className="pt-20 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
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
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;