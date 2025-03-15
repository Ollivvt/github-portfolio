import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-900 via-primary to-secondary text-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Modern gradient background with improved blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 bg-opacity-20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30
          }}
          transition={{ type: 'spring', damping: 30 }}
        />
        <motion.div 
          className="absolute top-1/2 -right-32 w-[40rem] h-[40rem] bg-purple-500 bg-opacity-20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40
          }}
          transition={{ type: 'spring', damping: 30 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-[30rem] h-[30rem] bg-teal-500 bg-opacity-20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 25,
            y: mousePosition.y * -25
          }}
          transition={{ type: 'spring', damping: 30 }}
        />
      </div>
      
      {/* Main Content with improved layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium">{t('welcome')}</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('building')}{' '}
              <span className="relative inline-block">
                {t('reliable')}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
              {' '}{t('softwareSolutions')}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                <ReactTyped
                  strings={[
                    t('typedGreeting'),
                    t('typedGraduate'),
                    t('typedML'),
                    t('typedEager')
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop={true}
                />
              </h2>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {t('introText')}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('letsConnect')}
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-lg font-medium backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('viewProjects')}
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <a href="https://github.com/Ollivvt/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/olivia-tseng-yuting/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="font-medium mb-1">{t('education')}</h3>
                    <p className="text-sm text-gray-300">{t('mastersInCS')}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="font-medium mb-1">{t('academicProjects')}</h3>
                    <p className="text-sm text-gray-300">{t('projectsCompleted')}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="font-medium mb-1">{t('skills')}</h3>
                    <p className="text-sm text-gray-300">{t('skillsList')}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="font-medium mb-1">{t('programmingLanguages')}</h3>
                    <p className="text-sm text-gray-300">{t('languagesList')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        >
          <a href="#education" className="flex flex-col items-center text-sm text-gray-400 hover:text-white transition-colors">
            <span className="mb-2">{t('scrollToExplore')}</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
