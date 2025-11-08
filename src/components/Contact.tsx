
import React from 'react';
import Section from './ui/Section';
import { PERSONAL_INFO, CERTIFICATIONS } from '../constants';

const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const WebsiteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-1-12h-3v-1.125c1.995-.417 3.5-2.193 3.5-4.375h-1.5c0 1.378-1.121 2.5-2.5 2.5-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5c.34 0 .667.078.96.211l.459-1.083c-.45-.183-.94-.286-1.459-.286-2.209 0-4 1.791-4 4s1.791 4 4 4h2v2h-2c-2.209 0-4 1.791-4 4s1.791 4 4 4h.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5c-.34 0-.667-.078-.96-.211l-.459 1.083c.45.183.94.286 1.459.286 2.209 0 4-1.791 4-4s-1.791-4-4-4zm4.5 5c0-2.2182 1.505-3.958 3.5-4.375v-1.125h-3v-2h5v1.5c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5h1.5c0 2.485-2.015 4.5-4.5 4.5z"/></svg>;


const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get in Touch">
        <div className="text-center max-w-2xl mx-auto">
             <p className="text-text-secondary mb-8">
               I'm actively seeking new opportunities and would love to hear from you. Whether you have a question or just want to connect, feel free to reach out.
            </p>
            <a href={`mailto:${PERSONAL_INFO.contact.email}`} 
               className="inline-block bg-accent text-secondary font-bold text-lg px-8 py-4 rounded-full hover:bg-accent-secondary transition-colors duration-300 shadow-lifted">
                Say Hello
            </a>

            <div className="flex justify-center space-x-8 mt-12">
                <a href={PERSONAL_INFO.profiles.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="LinkedIn Profile">
                    <LinkedInIcon />
                </a>
                <a href={PERSONAL_INFO.profiles.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="GitHub Profile">
                    <GithubIcon />
                </a>
                 <a href={PERSONAL_INFO.contact.website} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="Personal Website">
                    <WebsiteIcon />
                </a>
            </div>
        </div>

        <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8 text-text-primary tracking-wider">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="bg-primary p-6 rounded-lg border border-gray-200/80 hover:border-accent/50 transition-colors duration-300">
                        <p className="font-semibold text-text-primary">{cert.name}</p>
                        <p className="text-sm text-text-secondary mt-1">{cert.issuer}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
  );
};

export default Contact;