import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaServer, FaBug } from 'react-icons/fa';

const Services = ({ id = 'services' }) => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Full-stack web application development using MERN stack.'
    },
    {
      icon: <FaDesktop />,
      title: 'Frontend Development',
      description: 'Responsive UI using React and Tailwind CSS.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'REST API development using Node.js and Express.'
    },
    {
      icon: <FaBug />,
      title: 'Bug Fixing & Optimization',
      description: 'Fix bugs and improve performance of existing apps.'
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
          My Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;