import React from 'react';
import { motion } from 'framer-motion';

function Extracurricular() {
  const activities = [
    {
      title: "National Digital Humanities Big Data Competition",
      description: "Top 12 Finalist/100 teams – Designed app architecture and led proposal.",
      image: "images/competition.jpg"
    },
    {
      title: "Microsoft Intern Program (2022 Coding Angels)",
      description: "Led ~4 teammates to integrate Face API for facial recognition.",
      image: "images/microsoft.jpg"
    },
    {
      title: "CCU Career Fair 2021",
      description: "Organized 5 events and led a 9-member team.",
      image: "images/careerfair.jpg"
    }
  ];

  return (
    <section id="extracurricular" className="bg-white dark:bg-gray-900 py-20">
      <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-2" data-aos="fade-up">
        Extracurricular
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Activities that have helped me develop leadership and technical skills
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -15, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
            data-aos="zoom-in"
            data-aos-delay={100 * index}
          >
            <div className="relative overflow-hidden">
              <motion.img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-48 object-cover transition-transform duration-700 ease-in-out"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24 opacity-60"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary dark:text-white">
                {activity.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {activity.description}
              </p>
              
              <motion.div 
                className="mt-4 inline-block"
                whileHover={{ scale: 1.05 }}
              >
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Extracurricular;