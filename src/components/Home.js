import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";

function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Parallax effect for background elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
      className="relative bg-gradient-to-br from-gray-600 via-primary to-secondary text-white py-20 px-6 text-center min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background elements with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 bg-accent bg-opacity-10 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20
          }}
          transition={{ type: 'spring', damping: 30 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 -right-32 w-96 h-96 bg-highlight bg-opacity-10 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30
          }}
          transition={{ type: 'spring', damping: 30 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-deep bg-opacity-10 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * -20
          }}
          transition={{ type: 'spring', damping: 30 }}
        ></motion.div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building <span className="text-blue-200 relative">
            Reliable
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 0.8 }}
            ></motion.span>
          </span> Software Solutions
        </motion.h1>

        {/* Dynamic Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            <ReactTyped
              strings={["Hi, I'm Olivia Tseng!", "Software Engineer", "AI Enthusiast", "Problem Solver"]}
              typeSpeed={50}
              backSpeed={30}
              loop={true}
            />
          </h2>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl font-light mb-8 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          A Master's student in <span className="font-semibold">Computer Science </span>
          at UBC, with a strong foundation in <span className="font-semibold">software engineering</span>,
          <span className="font-semibold"> AI</span>, and <span className="font-semibold">Machine Learning</span>.
          <br />I specialize in designing efficient and scalable systems to tackle real-world challenges effectively.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-transparent border-2 border-accent text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-accent hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
        className="w-full absolute bottom--20 left-0 flex justify-center pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
      >
        <a href="#experience" className="text-white flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
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
