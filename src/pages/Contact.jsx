import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = ({ id = 'contact' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace these with your actual EmailJS IDs from https://www.emailjs.com/
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const publicKey = 'your_public_key';

    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'info.mohotechsolution@gmail.com'
    }, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id={id} className="pt-20 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 px-4"
        >
          Contact Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto px-4"
        >
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Or contact me directly:</p>
            <a
              href="https://wa.me/918124224680?text=Hello%20Mohamed,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <FaWhatsapp size={20} /> Contact me on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;