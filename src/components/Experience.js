import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../hooks/useTranslation';

function Experience() {
    const { t } = useTranslation();
    const experienceList = [
        {
            position: t('outlierPosition'),
            company: t('outlierCompany'),
            date: "OCT 2024 – Present",
            location: t('remote'),
            type: t('partTime'),
            current: true
        },
        {
            position: t('bcCancerPosition'),
            company: t('bcCancerCompany'),
            date: "SEP 2023 – Present",
            location: t('kelownaLocation'),
            type: t('internship'),
            current: true
        },
        {
            position: t('mirdcPosition'),
            company: t('mirdcCompany'),
            date: "JUL 2021 – DEC 2021",
            location: t('kaohsiungLocation'),
            type: t('internship')
        },
        {
            position: t('coretronicPosition'),
            company: t('coretronicCompany'),
            date: "JUL 2021 – AUG 2021",
            location: t('hsinchuLocation'),
            type: t('internship')
        }
    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-10" data-aos="fade-up">
                        {t('experienceTitle')}
                    </h2>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary to-gray-200 dark:to-gray-600 rounded-full"></div>

                    <div className="space-y-12">
                        {experienceList.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 bg-primary"></div>

                                {/* Content */}
                                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <motion.div
                                        className={`bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 relative ${
                                            exp.current 
                                                ? 'border-2 border-primary ring-2 ring-primary/20'
                                                : 'border border-gray-100 dark:border-gray-600'
                                        }`}
                                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {exp.current && (
                                            <div className="absolute -top-3 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                                {t('currentPosition')}
                                            </div>
                                        )}
                                        
                                        <div className="flex items-center justify-between mb-4 mt-2">
                                            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                                                exp.current 
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                                            }`}>
                                                {exp.type}
                                            </span>
                                            <div className="flex items-center text-gray-500 dark:text-gray-400">
                                                <CalendarIcon className="h-4 w-4 mr-1" />
                                                <span className="text-sm font-medium">{exp.date}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {exp.position}
                                        </h3>

                                        <div className="flex items-center text-gray-700 dark:text-gray-200 mb-3">
                                            <BriefcaseIcon className="h-5 w-5 mr-2" />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>

                                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                                            <MapPinIcon className="h-4 w-4 mr-1" />
                                            <span className="text-sm">{exp.location}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
