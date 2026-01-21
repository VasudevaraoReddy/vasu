import React from 'react';
import { cvData } from '../data/cv';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark py-8 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
            <FiLinkedin size={20} />
          </a>
          {/* Add more social links if available */}
          <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <FiGithub size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
