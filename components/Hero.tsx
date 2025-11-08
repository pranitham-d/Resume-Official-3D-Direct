
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { PERSONAL_INFO } from '../constants';

const AnimatedSphere: React.FC = () => {
    return (
        <>
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={1.0} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#007bff" />
            <Sphere visible args={[1, 100, 200]} scale={2.8}>
                <MeshDistortMaterial
                    color="#e9ecef"
                    attach="material"
                    distort={0.5}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.1}
                />
            </Sphere>
        </>
    );
};

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen w-full relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
                <AnimatedSphere />
            </Suspense>
        </Canvas>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-accent tracking-tight mb-4 animate-fade-in-up [animation-delay:0.2s] opacity-0">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-fade-in-up [animation-delay:0.4s] opacity-0">
                  {PERSONAL_INFO.title}
                </p>
                <a 
                  href="#contact"
                   onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                  className="inline-block bg-accent text-secondary font-bold py-3 px-8 rounded-full hover:bg-accent-secondary transition-all duration-300 transform hover:scale-105 shadow-lifted pointer-events-auto animate-fade-in-up [animation-delay:0.6s] opacity-0"
                >
                  Get In Touch
                </a>
            </div>
        </div>
         <div 
          onClick={handleScrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer pointer-events-auto group"
        >
            <div className="w-8 h-14 border-2 border-accent rounded-full flex justify-center items-start p-2">
                <div className="w-1 h-3 bg-accent rounded-full animate-bounce"></div>
            </div>
            <span className="mt-2 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll Down</span>
        </div>
    </section>
  );
};

export default Hero;