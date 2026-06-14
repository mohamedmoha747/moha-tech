import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'pricing', 'certifications', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Update URL hash without jumping
            history.replaceState(null, null, `#${entry.target.id}`);
          }
        });
      },
      { 
        // Offset for fixed navbar (adjust based on navbar height)
        rootMargin: '-80px 0px -60% 0px', 
        threshold: 0.1 
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed navbar (80px)
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ 
        top: y, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar activeSection={activeSection} onNavItemClick={scrollToSection} />
      <div className="pt-16">
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
        <Projects id="projects" />
        <Pricing id="pricing" />
        <Certifications id="certifications" />
        <Contact id="contact" />
      </div>
      <Footer />
    </div>
  );
}

export default App;