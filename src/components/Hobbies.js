import React from 'react';
import { motion } from 'framer-motion';

function Hobbies() {
  const hobbies = [
    {
      title: "Snowboarding",
      description: "Carving down the slopes in British Columbia during the winter season.",
      icon: "🏂",
    },
    {
      title: "Travel",
      description: "Exploring new cultures, cuisines, and landscapes around the world.",
      icon: "✈️",
    },
    {
      title: "Photography",
      description: "Capturing urban landscapes, nature scenes, and travel moments.",
      icon: "📷",
    },
    {
      title: "Playing Piano",
      description: "Unwinding by playing classical pieces and learning new songs.",
      icon: "🎹",
    },
  ];

  return (
    <section id="hobbies" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-2" data-aos="fade-up">
          Hobbies & Interests
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Beyond coding and academics, here are some activities that keep me inspired and balanced.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              data-aos="zoom-in"
              data-aos-delay={100 * index}
            >
              <div className="text-5xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{hobby.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;