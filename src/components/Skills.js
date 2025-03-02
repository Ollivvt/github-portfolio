import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, WrenchIcon, CogIcon, CloudIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

function Skills() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: <CodeBracketIcon className="h-6 w-6 mr-2" />,
      skills: ["Python", "Java", "C", "C#", "JavaScript", "SQL", "MATLAB"],
      color: "bg-blue-500"
    },
    {
      title: "Software Development",
      icon: <WrenchIcon className="h-6 w-6 mr-2" />,
      skills: ["Object-Oriented Programming (OOP)", "REST APIs", "Software Development Life Cycle (SDLC)", "Agile Development", "Testing and Debugging", "React, Node.js"],
      color: "bg-purple-500"
    },
    {
      title: "Machine Learning & Data Science",
      icon: <CogIcon className="h-6 w-6 mr-2" />,
      skills: ["TensorFlow, OpenCV", "PyTorch, Keras", "Scikit-learn", "Deep Learning", "Computer Vision", "Model Training & Evaluation"],
      color: "bg-green-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon className="h-6 w-6 mr-2" />,
      skills: ["AWS, Azure", "Git, GitHub", "Linux, Unix", "CI/CD Pipelines", "Docker, Unity"],
      color: "bg-yellow-500"
    },
    {
      title: "Languages",
      icon: <GlobeAltIcon className="h-6 w-6 mr-2" />,
      skills: ["Mandarin (Native)", "English (Highly Proficient)"],
      color: "bg-red-500"
    }
  ];

  return (
    <section id="skills" className="bg-gray-200 dark:bg-gray-800 py-20">
      <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-10" data-aos="fade-up">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 } 
            }}
          >
            <div className={`${category.color} h-2`}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary dark:text-white flex items-center mb-4">
                {category.icon}
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center text-gray-700 dark:text-gray-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                  >
                    <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;