import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import { cvData } from '../data/cv';

const Contact = () => {
  const { personalInfo } = cvData;

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="w-full max-w-2xl mx-auto space-y-8">
            {/* <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Let's Connect</h3> */}
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-center">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href={`mailto:${personalInfo.email}`} className="card flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors p-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shrink-0">
                  <FiMail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium truncate">{personalInfo.email}</p>
                </div>
              </a>

              <div className="card flex items-center gap-4 text-slate-600 dark:text-slate-300 p-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shrink-0">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="card flex items-center gap-4 text-slate-600 dark:text-slate-300 p-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors p-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shrink-0">
                  <FiLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="font-medium">Connect on LinkedIn</p>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors p-4 md:col-span-2">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shrink-0">
                  <FiGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Github</p>
                  <p className="font-medium">View Projects</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
