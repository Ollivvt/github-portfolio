import React from 'react';
import { motion } from 'framer-motion';
import { CogIcon, StarIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline';

function WorkingStyle() {
  const traits = [
    {
      title: "Problem Solver",
      description: "I approach challenges analytically, breaking them down into manageable steps.",
      icon: <CogIcon className="h-12 w-12 text-accent" />,
    },
    {
      title: "Detail-Oriented",
      description: "I pay close attention to details while keeping the big picture in mind.",
      icon: <StarIcon className="h-12 w-12 text-accent" />,
    },
    {
      title: "Collaborative",
      description: "I thrive in team environments, valuing diverse perspectives and contributions.",
      icon: <UserIcon className="h-12 w-12 text-accent" />,
    },
    {
      title: "Continuous Learner",
      description: "I'm passionate about staying current with emerging technologies and practices.",
      icon: <HeartIcon className="h-12 w-12 text-accent" />,
    },
  ];

  return (
    <section id="workingstyle" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-2" data-aos="fade-up">
          Working Style & Personality
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Understanding how I approach work and collaborate with teams
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
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">My Approach</h3>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              I believe in a user-centered approach to software development, focusing on creating solutions that are not just technically sound but also intuitive and accessible. My work is guided by the principle that the best technology serves human needs rather than the other way around.
            </p>
            <p className="mb-4">
              When faced with complex problems, I methodically analyze requirements, research potential solutions, and iteratively implement and test my code. I value clean, maintainable code and thorough documentation.
            </p>
            <p>
              In team settings, I'm both a supportive collaborator and a proactive leader when needed. I communicate clearly, meet deadlines consistently, and remain adaptable in the face of changing requirements or unexpected challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingStyle;