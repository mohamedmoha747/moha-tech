import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeSection, onNavItemClick }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="bg-[#0f172a] shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => onNavItemClick('home')} className="flex items-center gap-3 focus:outline-none">
          <div className="relative w-10 h-10 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="MOHO Web Solutions logo"
              className="h-10 w-10 rounded-[10px] object-cover"
            />
            <span
              className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.25)] border border-white/10"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col leading-tight relative">
            <span className="text-sm font-bold uppercase text-white">MOHO WEB</span>

            <span className="inline-flex items-center text-xs mt-0">
              <span className="text-xs font-semibold text-[#00ff88] tracking-tight">SOLUTION</span>
            </span>
          </div>
        </button>

        <div className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavItemClick(link.id)}
              className={`relative px-2 py-1 text-sm font-medium transition duration-300 focus:outline-none ${
                activeSection === link.id
                  ? 'text-blue-600 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300'
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-300 transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}

          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavItemClick(link.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-2 py-1 text-sm font-medium transition duration-300 focus:outline-none ${
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;