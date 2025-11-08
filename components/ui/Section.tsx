import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  },
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <motion.section 
      id={id} 
      className="py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-text-primary uppercase tracking-widest text-glow-accent">
          {title}
        </h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
