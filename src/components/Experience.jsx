import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {cvData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="card relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FiBriefcase className="text-primary" /> {exp.role}
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-1 text-slate-500 text-sm bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full w-fit">
                  <FiCalendar /> {exp.duration}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {exp.description}
              </p>

              <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-semibold px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
