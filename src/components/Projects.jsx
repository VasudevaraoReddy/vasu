import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { FiLayout, FiUser, FiCode } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen pt-28 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white dark:bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {cvData.projects.map((project, index) => (
            <motion.div 
              key={index}
              className="card relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <FiLayout className="text-primary" /> {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                  {project.client && (
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Client:</span> {project.client}
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center gap-1">
                      <FiUser className="text-primary/70" /> 
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Role:</span> {project.role}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                {project.description}
              </p>

              <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                 <div className="w-full mb-1 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <FiCode className="text-primary" /> Tech Stack:
                 </div>
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-semibold px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded"
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

export default Projects;
