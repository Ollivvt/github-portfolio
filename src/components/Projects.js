import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, ChartBarIcon, CloudIcon, CommandLineIcon, CpuChipIcon, BeakerIcon } from '@heroicons/react/24/outline';

function Projects() {
  const projectList = [
    {
      title: "AI Ethnicity in Medical Images",
      description: "Developed sophisticated machine learning models to analyze racial features in medical imaging datasets, enhancing healthcare equity research.",
      details: [
        "Implemented and fine-tuned EfficientNet and DinoV2 models for high-accuracy feature detection",
        "Deployed scalable solution on AWS using EC2 instances and S3 storage",
        "Processed and analyzed over 550K medical images with 94% accuracy"
      ],
      link: "https://github.com/Ollivvt/AI-ethnicity-med-image",
      tags: ["Python", "PyTorch", "AWS", "EfficientNet", "DinoV2"],
      icon: <CpuChipIcon className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Tourism Data Visualization Platform",
      description: "Created an end-to-end data pipeline and interactive visualization platform for large-scale tourism data analysis.",
      details: [
        "Built robust data pipeline using Python and Apache Spark for efficient processing",
        "Designed interactive dashboards with D3.js for intuitive data exploration",
        "Implemented real-time filtering and dynamic visualization updates"
      ],
      link: "https://github.com/martin0310/Travel_Vision",
      tags: ["D3.js", "Apache Spark", "Python", "Data Pipeline", "Visualization"],
      icon: <ChartBarIcon className="h-6 w-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Web-Based Ordering System",
      description: "Full-stack ordering platform with real-time tracking and administrative capabilities.",
      details: [
        "Developed responsive frontend using modern JavaScript and CSS frameworks",
        "Implemented optimized MySQL queries, achieving 40% faster processing time",
        "Built comprehensive admin dashboard for order management and analytics"
      ],
      link: "#",
      tags: ["JavaScript", "PHP", "MySQL", "HTML/CSS", "Full Stack"],
      icon: <CodeBracketIcon className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-10" data-aos="fade-up">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Showcasing my technical expertise through real-world applications and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 } 
              }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color} text-white`}>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm">{project.description}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Project Details */}
                <ul className="mb-6 space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <span className="mr-2 mt-1 block w-1 h-1 rounded-full bg-primary dark:bg-accent flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-primary dark:text-accent font-medium hover:underline"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;