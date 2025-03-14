import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function Header({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const mainNavItems = [
    { id: "home", label: "Home", bgClass: "bg-white dark:bg-gray-900" },
    { id: "education", label: "Education", bgClass: "bg-gray-50 dark:bg-gray-800" },
    { id: "experience", label: "Experience", bgClass: "bg-white dark:bg-gray-900" },
    { id: "projects", label: "Projects", bgClass: "bg-gray-50 dark:bg-gray-800" },
    { id: "skills", label: "Skills", bgClass: "bg-white dark:bg-gray-900" }
  ];

  const moreNavItems = [
    { id: "workingstyle", label: "Working Style", bgClass: "bg-gray-50 dark:bg-gray-800" },
    { id: "extracurricular", label: "Extracurricular", bgClass: "bg-white dark:bg-gray-900" },
    { id: "hobbies", label: "Hobbies", bgClass: "bg-gray-50 dark:bg-gray-800" },
    { id: "contact", label: "Contact", bgClass: "bg-white dark:bg-gray-900" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let active = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          active = section.id;
        }
      });

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.more-menu')) {
        setShowMore(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={`bg-white dark:bg-gray-900 transition-all duration-300 shadow-md sticky top-0 z-50 ${
      scrolled ? "py-2 shadow-lg" : "py-3"
    }`}>
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
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
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {mainNavItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors ${
                    activeSection === item.id 
                      ? "text-primary dark:text-white font-bold border-b-2 border-accent" 
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="relative more-menu">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMore(!showMore);
                }}
                className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
              >
                More
                <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform ${showMore ? 'rotate-180' : ''}`} />
              </button>

              {showMore && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  {moreNavItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setShowMore(false)}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 ${
                        activeSection === item.id
                          ? "text-primary dark:text-white font-bold bg-gray-50 dark:bg-gray-700"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </li>

            <li>
              <a
                href="CV_Olivia_Tseng.pdf"
                className="ml-4 bg-primary text-white dark:bg-accent dark:text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-secondary dark:hover:bg-deep transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </motion.ul>
          
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