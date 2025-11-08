
import React from 'react';
import Section from './ui/Section';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="relative border-l-2 border-accent/30 ml-4 md:ml-0 max-w-2xl mx-auto">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="mb-10 ml-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-primary">
              <svg className="w-3 h-3 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-text-primary">
              {job.role} <span className="text-accent-secondary text-sm font-medium ml-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent">{job.company}</span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-text-secondary">{job.period} - {job.location}</time>
            <ul className="list-disc ml-5 space-y-2 text-text-secondary mt-4">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;