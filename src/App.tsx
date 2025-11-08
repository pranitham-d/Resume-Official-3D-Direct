
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        }
    };
    
    const onMouseOver = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && e.target.closest('a, button, .cursor-pointer, .cursor-grab')) {
            setIsHovering(true);
        }
    };
    
    const onMouseOut = () => {
        setIsHovering(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
        window.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseover', onMouseOver);
        document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hover' : ''}`} />
      <AnimatedBackground />
      <div className="bg-secondary/90 backdrop-blur-md text-text-primary relative z-0">
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-primary py-6 text-center text-text-secondary text-sm relative z-10">
          <div className="container mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Pranitham Devarakonda. All rights reserved.</p>
            <p className="mt-2">Designed & Built with React & Three.js</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;