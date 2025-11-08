
import React, { useState, useEffect, useRef } from 'react';
import Section from './ui/Section';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -50px 0px" } 
        );

        const currentRef = cardRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={cardRef} className="bg-secondary rounded-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lifted border border-gray-200/80">
            <div className="w-full h-48 bg-primary relative">
                {!isLoaded && (
                    <div className="absolute inset-0 w-full h-full animate-pulse bg-gray-200"></div>
                )}
                <img 
                    className={`absolute inset-0 w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-500 ${isLoaded ? 'opacity-80' : 'opacity-0'}`}
                    src={isInView ? project.imageUrl : undefined} 
                    alt={project.title} 
                    onLoad={() => setIsLoaded(true)}
                    loading="lazy"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent-secondary rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </Section>
  );
};

export default Projects;