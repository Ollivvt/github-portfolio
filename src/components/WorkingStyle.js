import React from 'react';
import { motion } from 'framer-motion';
import { CogIcon, StarIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../hooks/useTranslation';

function WorkingStyle() {
  const { t } = useTranslation();
  const traits = [
    {
      title: t('problemSolverTitle'),
      description: t('problemSolverDesc'),
      icon: <CogIcon className="h-12 w-12 text-accent" />,
    },
    {
      title: t('detailOrientedTitle'),
      description: t('detailOrientedDesc'),
      icon: <StarIcon className="h-12 w-12 text-accent" />,
    },
    {
      title: t('collaborativeTitle'),
      description: t('collaborativeDesc'),
      icon: <UserIcon className="h-12 w-12 text-accent" />,
    },
    {
      title: t('continuousLearnerTitle'),
      description: t('continuousLearnerDesc'),
      icon: <HeartIcon className="h-12 w-12 text-accent" />,
    },
  ];

  return (
    <section id="workingstyle" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-2" data-aos="fade-up">
          {t('workingStyleTitle')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {t('workingStyleSubtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="shrink-0 p-3 bg-primary dark:bg-deep rounded-full">
                {trait.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{trait.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{trait.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Working approach description */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">{t('approachTitle')}</h3>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              {t('approachDesc1')}
            </p>
            <p className="mb-4">
              {t('approachDesc2')}
            </p>
            <p>
              {t('approachDesc3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingStyle;