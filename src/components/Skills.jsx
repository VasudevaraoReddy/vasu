import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

const Skills = () => {
  const categories = Object.keys(cvData.skills);

  const formatTitle = (key) => {
    switch (key) {
      case 'cloudDevOps': return 'Cloud & DevOps';
      case 'aiMl': return 'AI & ML';
      default: return key.charAt(0).toUpperCase() + key.slice(1);
    }
  };

  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and the technologies I work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={category}
              className="card group hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                {formatTitle(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills[category].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600"
                  >
                    {skill}
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

export default Skills;
