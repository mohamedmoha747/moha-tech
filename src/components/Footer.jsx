import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center justify-center rounded-full p-5 bg-white/10 shadow-[0_0_30px_rgba(34,197,94,0.16)] ring-1 ring-white/15 backdrop-blur-2xl mb-4">
            <img
              src="/images/logo.png"
              alt="Moho Web Solutions logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">MOHO WEB SOLUTIONS</h2>
          <p className="text-slate-400 max-w-xl">Building Modern Digital Experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Professional Website Development</h3>
            <p className="text-sm md:text-base leading-relaxed text-slate-300 mb-4">
              MERN Stack Development, UI/UX Design, and business solutions for growing brands.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>Professional Website Development</li>
              <li>MERN Stack Development</li>
              <li>UI/UX Design</li>
              <li>Business Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Website Design & Development</li>
              <li>Front-end Development</li>
              <li>SEO Optimization</li>
              <li>Bug Fixing & Optimization</li>
              
              
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="text-slate-300 space-y-3">
              <p className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-blue-400">📞</span>
                <a href="tel:+91 8124224680" className="hover:text-white">+91 8124224680</a>
              </p>
              <a
                href="tel:+918124224680"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition"
              >
                Call Now
              </a>
              <p className="text-sm md:text-base">
                <a href="mailto:info.MOHOtechsolution@gmail.com" className="hover:text-white">info.mohatechsolution@gmail.com</a>
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a href="https://github.com/mohamedmoha747" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-harun" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-8 text-slate-400">
          <a href="#top" className="inline-flex items-center gap-2 text-sm hover:text-white">↑ Back to Top</a>
          <p className="text-sm">© 2026 Moho Web Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;