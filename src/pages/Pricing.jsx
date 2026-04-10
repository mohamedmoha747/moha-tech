import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Pricing = ({ id = 'pricing' }) => {
  const plans = [
    {
      name: 'Basic Website',
      price: '3000',
      currency: '₹',
      features: [
        'Responsive Design',
        'Up to 5 Pages',
        'Contact Form',
        'SEO Optimization',
        '1 Year Support',
        '7 Days Deliver'

      ]
    },
    {
      name: 'Advanced Website with Admin Dashboard',
      price: '5000',
      currency: '₹',
      features: [
        'Everything in Basic',
        'Admin Dashboard',
        'User Management',
        'Analytics Integration',
        'Custom Features',
        '2 Years Support',
        '14 Days Deliver'
      ]
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
          Pricing Plans
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {plan.currency} {plan.price}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;