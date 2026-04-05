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
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => onNavItemClick('home')} className="flex items-center gap-3 focus:outline-none">
          <img
            src="/images/photo_2026-04-04_21-30-54.jpg"
            alt="MOHO TECHS logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">MOHO TECHS</span>
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