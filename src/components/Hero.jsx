import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const { personalInfo } = cvData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 font-medium text-sm mb-6">
              Full Stack Software Engineer
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {personalInfo.title} based in {personalInfo.location}. I build scalable, secure enterprise web applications and bridge the gap between complex requirements and elegant technical solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {/* <a 
                href="#projects" 
                className="btn-primary flex items-center gap-2 group"
              >
                View Works
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a> */}
              <a 
                href={personalInfo.resume} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-primary hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2"
              >
                Download CV
                <FiDownload />
              </a>
            </div>
            
            <div className="mt-12 flex gap-8 justify-center">
               {/* Quick stats or social proof could go here */}
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4+</h3>
                  <p className="text-slate-500 text-sm">Years Experience</p>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">10+</h3>
                  <p className="text-slate-500 text-sm">Projects Completed</p>
               </div>
            </div>
          </motion.div>

      </div>
    </section>
  );
};

export default Hero;
