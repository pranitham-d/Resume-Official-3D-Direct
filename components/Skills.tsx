import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SKILLS.length);
    }, 2000); // Rotate to the next skill every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSkill = SKILLS[currentIndex];

  return (
    <Section id="skills" title="Skills">
      <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute text-3xl md:text-5xl font-bold text-center text-accent tracking-wider"
          >
            {currentSkill.name}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Skills;
