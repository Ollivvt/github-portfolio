import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../hooks/useTranslation';

function Contact() {
  const { t, currentLanguage } = useTranslation();
  const contactMethods = [
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-accent" />,
      label: t('emailLabel'),
      value: "yutingtseng0203@gmail.com",
      href: "mailto:yutingtseng0203@gmail.com",
      isLink: true
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-accent" />,
      label: t('phoneLabel'),
      value: currentLanguage === 'zh-TW' ? "+886981812920" : "+12363383149",
      href: currentLanguage === 'zh-TW' ? "tel:+886981812920" : "tel:+12363383149",
      isLink: true
    },
    {
      icon: <LinkIcon className="h-6 w-6 text-accent" />,
      label: t('linkedinLabel'),
      value: "Olivia Tseng",
      href: "https://www.linkedin.com/in/olivia-tseng-yuting/",
      isLink: true
    }
  ];

  return (
    <section id="contact" className="bg-primary dark:bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4" data-aos="fade-up">{t('contactTitle')}</h2>
        <p className="text-center text-lg opacity-90 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {t('contactSubtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 } 
              }}
            >
              <div className="bg-accent bg-opacity-20 rounded-full p-4 mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.label}</h3>
              {method.isLink ? (
                <motion.a
                  href={method.href}
                  className="text-accent hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {method.value}
                </motion.a>
              ) : (
                <p>{method.value}</p>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Contact form or additional contact info could go here */}
        <motion.div 
          className="mt-16 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">{t('workTogetherTitle')}</h3>
          <p className="mb-6">
            {t('workTogetherDesc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;