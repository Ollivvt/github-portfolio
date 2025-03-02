import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';

function Education() {
    const educationList = [
      {
        school: "The University of British Columbia (UBC)",
        degree: "Master's Degree in Computer Science",
        date: "SEP 2023 – JUN 2025",
        details: [
          "GPA: 3.75",
          "Scholarship: UBC Okanagan Graduate Research Scholarships",
          "Key Modules: Advanced Algorithms, Applied Machine Learning, Computer Vision, Computer Graphics, HCI, Unity",
        ],
        logo: "images/ubc_logo.png",
      },
      {
        school: "National Chung Cheng University (CCU)",
        degree: "Bachelor's Degree in Information Management",
        date: "SEP 2019 – JUN 2023",
        details: [
          "GPA: 3.87",
          "Awards: Fall 2022 Dean's List, 1st Place in CCU Global Elite Program",
          "Key Modules: Data Structures, SQL Database, System Analysis & Design, Computer Networks, Web App Development",
        ],
        logo: "images/ccu_logo.png",
      },
    ];
  
    return (
      <section id="education" className="bg-gray-50 dark:bg-gray-900 py-20">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-10" data-aos="fade-up">Education</h2>
        <div className="max-w-5xl mx-auto space-y-16 px-6">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline connector */}
              {index < educationList.length - 1 && (
                <div className="absolute top-20 bottom-0 left-10 w-1 bg-primary dark:bg-accent opacity-30"></div>
              )}
              
              <div className="flex items-start">
                <motion.div 
                  className="relative z-10 bg-primary dark:bg-accent text-white rounded-full p-5 shadow-lg mr-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: (index * 0.2) + 0.2, type: "spring" }}
                >
                  <CalendarIcon className="h-6 w-6" />
                </motion.div>
                
                <motion.div
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex-1"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: (index * 0.2) + 0.3 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 } 
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} Logo`}
                      className="w-20 h-20 object-contain"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="text-xl font-bold text-primary dark:text-white">{edu.degree}</h3>
                        <p className="text-accent dark:text-accent font-medium">{edu.date}</p>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 italic mb-4">{edu.school}</p>
                      <ul className="list-disc text-gray-700 dark:text-gray-300 text-sm space-y-2 pl-5">
                        {edu.details.map((detail, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: (index * 0.2) + 0.4 + (idx * 0.1) }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  export default Education;