import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';

function Experience() {
    const experienceList = [
      {
        position: "Software Developer - AI Data Trainer",
        company: "Outlier",
        date: "OCT 2024 – Present",
        details: [
          "Reviewed and debugged AI-generated Python code, providing structured feedback to improve model outputs.",
          "Supported LLM fine-tuning through data annotation, code reviews, and Reinforcement Learning with Human Feedback (RLHF).",
          "Developed coding challenges and completed 5+ Python projects to evaluate generative AI models.",
        ],
      },
      {
        position: "Machine Learning Intern",
        company: "BC Cancer",
        date: "SEP 2023 – Present",
        details: [
          "Perform Al bias analysis on 2.5M+ medical images for improved diagnostic accuracy on Unix.",
          "Create 3+ deep learning models for ethnic feature recognition using Grad-CAM transparency.",
          "Support research efforts at BC Cancer through data analysis and model development.",
        ],
      },
      {
        position: "Java Teaching Assistant",
        company: "UBC",
        date: "SEP 2024 – DEC 2024",
        details: [
          "Led Java programming labs on OOP, data structures, and algorithms for 30+ students.",
          "Assisted in debugging, grading, and refining Java-based coding assignments.",
        ],
      },
      {
        position: "System Development Intern",
        company: "MIRDC Taiwan",
        date: "JUL 2021 – DEC 2021",
        details: [
          "Developed a platform to manage CSR data for 147 companies, improving workflow efficiency by 25%.",
          "Integrated systems for ESG compliance, increasing data accuracy and reducing processing time.",
        ],
      },
      {
        position: "Software Development Intern",
        company: "Coretronic Co.",
        date: "JUL 2021 – AUG 2021",
        details: [
          "Automated testing processes using RPA tools, reducing manual processing times by 95%.",
          "Simplified bug-handling workflows, cutting turnaround times from 180 to 15 minutes.",
        ],
      },
    ];
  
    return (
      <section id="experience" className="bg-gray-50 dark:bg-gray-800 py-20">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-10" data-aos="fade-up">Experience</h2>
        <div className="max-w-7xl mx-auto relative px-6">
          <div className="absolute left-4 top-0 w-1 bg-primary h-full"></div>
  
          <div className="space-y-12">
            {experienceList.map((exp, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <BriefcaseIcon className="h-4 w-4 text-white" />
                  </motion.div>
                  {index !== experienceList.length - 1 && (
                    <div className="flex-1 w-px bg-primary mt-2"></div>
                  )}
                </div>
  
                <motion.div 
                  className="ml-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 w-full"
                  whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.position}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <CalendarIcon className="h-5 w-5 mr-1" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 italic mt-2">{exp.company}</p>
                  <ul className="list-disc text-gray-700 dark:text-gray-300 text-sm space-y-2 mt-4 pl-5">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Experience;