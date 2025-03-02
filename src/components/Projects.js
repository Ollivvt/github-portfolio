import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projectList = [
    {
      title: "AI Ethnicity in Medical Images",
      description: "AI models to identify racial features in 2.5M+ medical images.",
      link: "https://github.com/Ollivvt/AI-ethnicity-med-image",
      tags: ["AI", "ML", "Model Development"],
      image: "https://via.placeholder.com/600x400/3498db/ffffff?text=AI+Project",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Home Monitoring Security System",
      description: "Real-time detection with TensorFlow and OpenCV.",
      link: "https://github.com/Ollivvt/home-monitoring-sys",
      tags: ["AIOT", "Tensorflow", "OpenCV"],
      image: "https://via.placeholder.com/600x400/e74c3c/ffffff?text=Security+System",
      color: "from-red-400 to-red-600"
    },
    {
      title: "Big Data Visualization",
      description: "Visualizations using D3.js. through Apache Spark.",
      link: "https://github.com/martin0310/Travel_Vision",
      tags: ["D3.js", "Web Crawling", "Data Visualization"],
      image: "https://via.placeholder.com/600x400/27ae60/ffffff?text=Data+Visualization",
      color: "from-green-400 to-green-600"
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-4" data-aos="fade-up">Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto px-6" data-aos="fade-up" data-aos-delay="100">
        A selection of my recent work and ongoing projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 } 
            }}
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80`}></div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  scale: activeProject === index ? 1.1 : 1,
                  transition: { duration: 0.5 }
                }}
              >
                <h3 className="text-3xl font-bold text-white text-center px-4">{project.title}</h3>
              </motion.div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              {/* Tag Section */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-accent text-white text-xs font-semibold py-1 px-3 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>

              {/* View on GitHub */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-accent font-medium flex items-center mt-auto"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View on GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;