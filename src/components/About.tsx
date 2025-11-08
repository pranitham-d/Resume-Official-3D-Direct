
import React from 'react';
import Section from './ui/Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
            <img 
                src="https://picsum.photos/seed/profile/400/400" 
                alt="Pranitham Devarakonda"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-accent shadow-lifted-lg"
            />
        </div>
        <div className="md:w-2/3 text-lg text-text-secondary leading-relaxed text-center md:text-left">
          <p>{PERSONAL_INFO.summary}</p>
        </div>
      </div>
    </Section>
  );
};

export default About;