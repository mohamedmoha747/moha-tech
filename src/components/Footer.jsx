import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          <div>
            <h3 className="text-2xl font-bold mb-4">Moho Tech Solution</h3>
            <p className="text-sm md:text-base leading-relaxed text-slate-300 mb-4">
              We help startups, businesses, and brands build powerful web experiences with modern websites, apps, and digital products.
            </p>
            <p className="text-sm text-slate-400">Chennai, Tamil Nadu, India</p>
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
                <a href="mailto:info.MOHOtechsolution@gmail.com" className="hover:text-white">info.Mohatechsolution@gmail.com</a>
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a href="https://github.com/mohamedMmoha747" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/MOHOmed-harun" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-8 text-slate-400">
          <a href="#top" className="inline-flex items-center gap-2 text-sm hover:text-white">↑ Back to Top</a>
          <p className="text-sm">© 2026 Moho Tech Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;