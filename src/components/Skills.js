import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, WrenchIcon, CogIcon, CloudIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../hooks/useTranslation';

function Skills() {
  const { t } = useTranslation();
  const skillCategories = [
    {
      title: t('programmingTitle'),
      icon: <CodeBracketIcon className="h-6 w-6 mr-2" />,
      skills: t('programmingSkills'),
      color: "bg-blue-500"
    },
    {
      title: t('developmentTitle'),
      icon: <WrenchIcon className="h-6 w-6 mr-2" />,
      skills: t('developmentSkills'),
      color: "bg-purple-500"
    },
    {
      title: t('aiTitle'),
      icon: <CogIcon className="h-9 w-9 mr-2" />,
      skills: t('aiSkills'),
      color: "bg-green-500"
    },
    {
      title: t('cloudTitle'),
      icon: <CloudIcon className="h-6 w-6 mr-2" />,
      skills: t('cloudSkills'),
      color: "bg-yellow-500"
    },
    {
      title: t('languagesTitle'),
      icon: <GlobeAltIcon className="h-6 w-6 mr-2" />,
      skills: t('languagesSkills'),
      color: "bg-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-10" data-aos="fade-up">{t('skillsTitle')}</h2>
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