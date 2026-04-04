import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaServer, FaBug, FaLightbulb, FaDollarSign, FaRocket, FaHeadset } from 'react-icons/fa';

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

  const reasons = [
    {
      icon: <FaLightbulb />,
      title: 'Creative & Innovative',
      description: 'Unique designs that help your brand stand out.'
    },
    {
      icon: <FaCode />,
      title: 'Modern Technologies',
      description: 'MERN stack, React, Node.js, and Tailwind CSS.'
    },
    {
      icon: <FaDollarSign />,
      title: 'Affordable Pricing',
      description: 'Solutions tailored for startups and growing businesses.'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'Quick turnaround while retaining quality.'
    },
    {
      icon: <FaHeadset />,
      title: 'Dedicated Support',
      description: 'Ongoing help for updates, fixes, and improvements.'
    }
  ];

  const processSteps = [
    {
      title: 'Requirement Discussion',
      description: 'Understand your vision, goals, and target audience.'
    },
    {
      title: 'Planning & UI Design',
      description: 'Create wireframes and a clean visual design.'
    },
    {
      title: 'Development',
      description: 'Build the solution using modern tools and frameworks.'
    },
    {
      title: 'Testing',
      description: 'Ensure quality, responsiveness, and functionality.'
    },
    {
      title: 'Launch & Support',
      description: 'Deploy the project and provide ongoing assistance.'
    }
  ];

  return (
    <section id={id} className="pt-20 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 px-4"
        >
          My Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Me?</h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              I deliver modern, scalable web solutions with a strong focus on speed, clarity, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center"
              >
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              A clear workflow to turn your idea into a polished, launch-ready product.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-cyan-500/20 transform -translate-x-1/2" />
            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-8 ${index % 2 === 0 ? 'md:mr-auto md:w-3/4' : 'md:ml-auto md:w-3/4'}`}
                >
                  <div className="absolute left-1/2 top-6 hidden md:block h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-500" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;