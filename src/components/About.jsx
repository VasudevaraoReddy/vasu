import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

const About = () => {
    return (
        <section id="about" className="section-padding bg-slate-50 dark:bg-slate-800/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="card max-w-4xl mx-auto">
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        {cvData.personalInfo.about}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
