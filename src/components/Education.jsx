import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { FiBook, FiAward } from 'react-icons/fi';

const Education = () => {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Education */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <FiBook className="text-primary" /> Education
          </h2>
          <div className="space-y-6">
            {cvData.education.map((edu, index) => (
              <div key={index} className="card border-l-4 border-l-primary">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                <p className="text-primary font-medium">{edu.degree}</p>
                <div className="flex justify-between mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <span>{edu.year}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <FiAward className="text-accent" /> Certificates
          </h2>
          <div className="space-y-6">
            {cvData.certificates.map((cert, index) => (
              <div key={index} className="card border-l-4 border-l-accent">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                {cert.date && <p className="text-sm text-slate-500 mt-1">{cert.date}</p>}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
