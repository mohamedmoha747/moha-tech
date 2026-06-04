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
    <nav className="bg-slate-900 shadow-2xl fixed w-full z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => {
            onNavItemClick('home');
            setIsMenuOpen(false);
          }} 
          className="flex items-center gap-3 focus:outline-none group"
        >
          <div className="relative w-10 h-10 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="MOHO Web Solutions logo"
              className="h-10 w-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] border border-white/20 animate-pulse"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col leading-tight relative">
            <span className="text-sm font-bold uppercase tracking-wide text-white">MOHO</span>
            <span className="text-xs font-semibold text-emerald-400 tracking-tight">WEB SOLUTIONS</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavItemClick(link.id);
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-out focus:outline-none group`}
            >
              {/* Glowing background pill for active state */}
              <span
                className={`absolute inset-0 rounded-lg transition-all duration-300 ease-out ${
                  activeSection === link.id
                    ? 'bg-emerald-400/15 shadow-[inset_0_0_20px_rgba(52,211,153,0.3),0_0_20px_rgba(52,211,153,0.2)]'
                    : 'bg-transparent'
                }`}
              />
              
              {/* Text with color transition */}
              <span
                className={`relative transition-all duration-300 ease-out ${
                  activeSection === link.id
                    ? 'text-emerald-400 font-semibold'
                    : 'text-gray-300 group-hover:text-emerald-400'
                }`}
              >
                {link.label}
              </span>

              {/* Bottom accent line for extra visual appeal */}
              <span
                className={`absolute bottom-1 left-0 h-1 rounded-full transition-all duration-300 ease-out ${
                  activeSection === link.id
                    ? 'w-full bg-gradient-to-r from-emerald-400 to-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.6)]'
                    : 'w-0 bg-emerald-400'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Dark Mode & Mobile Menu */}
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleDarkMode} 
            className="p-2.5 rounded-lg hover:bg-slate-800 transition-all duration-300 text-gray-300 hover:text-emerald-400"
            title="Toggle dark mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2.5 rounded-lg hover:bg-slate-800 transition-all duration-300 text-gray-300 hover:text-emerald-400"
            title="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/50 backdrop-blur-md border-t border-slate-700 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavItemClick(link.id);
                  setIsMenuOpen(false);
                }}
                className={`relative w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none ${
                  activeSection === link.id
                    ? 'bg-emerald-400/20 text-emerald-400 shadow-[inset_0_0_20px_rgba(52,211,153,0.3)]'
                    : 'text-gray-300 hover:bg-slate-700/50 hover:text-emerald-400'
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