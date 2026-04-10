import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = ({ id = 'contact' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const serviceId = 'service_56hnyai';
  const templateId = 'template_ms0ra8g';
  const publicKey = '9C3Dz5b6Wv33B5mKg';
  const adminEmail = 'info.mohotechsolution@gmail.com';

  useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      to_email: adminEmail
    };

    console.log('EmailJS template params:', templateParams);

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        const message = error.text || error.message || 'Please check your EmailJS service/template settings.';
        alert(`Failed to send message: ${message}`);
      })
      .finally(() => {
        setLoading(false);
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
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
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

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto px-4"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Visit Our Location</h2>
          <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=45.924198,6.870443&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;