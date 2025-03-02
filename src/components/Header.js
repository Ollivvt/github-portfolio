import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function Header({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let active = "";

      // Set active section
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          active = section.id;
        }
      });

      // Add scrolled state for header styling
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-white dark:bg-gray-900 transition-all duration-300 shadow-md sticky top-0 z-10 ${
      scrolled ? "py-2 shadow-lg" : "py-4"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold text-primary dark:text-gray-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Olivia Tseng
        </motion.h1>
        <div className="flex items-center">
          <motion.ul 
            className="hidden md:flex space-x-6 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { id: "home", label: "Home" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "skills", label: "Skills" },
              { id: "workingstyle", label: "Working Style" },
              { id: "projects", label: "Projects" },
              { id: "extracurricular", label: "Extracurricular" },
              { id: "hobbies", label: "Hobbies" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors ${
                    activeSection === item.id 
                      ? "text-primary dark:text-white font-bold border-b-2 border-accent" 
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="CV_Olivia_Tseng.pdf"
                className="bg-primary text-white dark:bg-accent dark:text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-secondary dark:hover:bg-deep transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </li>
          </motion.ul>
          
          {/* Dark mode toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;