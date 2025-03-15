import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaCog, FaChartLine, FaStar, FaLightbulb, FaHandshake, FaPresentation, FaCode, FaClock, FaChartBar, FaUserFriends, FaTasks, FaChartPie } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

function Extracurricular() {
  const { t } = useTranslation();
  const activities = [
    {
      title: t('digitalHumanitiesTitle'),
      bulletPoints: [
        { icon: FaTrophy, text: t('digitalHumanitiesPoints')[0] },
        { icon: FaCog, text: t('digitalHumanitiesPoints')[1] },
        { icon: FaHandshake, text: t('digitalHumanitiesPoints')[2] }
      ],
      image: "images/competition.jpg",
      achievements: t('digitalHumanitiesAchievements')
    },
    {
      title: t('microsoftTitle'),
      bulletPoints: [
        { icon: FaUsers, text: t('microsoftPoints')[0] },
        { icon: FaChartLine, text: t('microsoftPoints')[1] },
        { icon: FaClock, text: t('microsoftPoints')[2] }
      ],
      image: "images/microsoft.jpg",
      achievements: t('microsoftAchievements')
    },
    {
      title: t('ccuCareerTitle'),
      bulletPoints: [
        { icon: FaUserFriends, text: t('ccuCareerPoints')[0] },
        { icon: FaTasks, text: t('ccuCareerPoints')[1] },
        { icon: FaChartPie, text: t('ccuCareerPoints')[2] }
      ],
      image: "images/careerfair.jpg",
      achievements: t('ccuCareerAchievements')
    }
  ];

  return (
    <section id="extracurricular" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-4" data-aos="fade-up">
          {t('extracurricularTitle')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {t('extracurricularSubtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative overflow-hidden h-56">
                <motion.img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">
                  {activity.title}
                </h3>
                
                <ul className="space-y-3 mb-6">
                  {activity.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1">
                        <point.icon className="w-5 h-5 text-primary dark:text-accent flex-shrink-0" />
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {activity.achievements.map((achievement, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary dark:bg-accent/20 dark:text-white rounded-full text-sm font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Extracurricular;