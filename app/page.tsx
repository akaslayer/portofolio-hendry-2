'use client'
import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import Portfolio from './components/Portofolio';
import Skills from './components/Skills';
import Timeline from './components/Education';
import Home from './components/Home';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <NavBar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToEducation={() => scrollToSection(educationRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToPortfolio={() => scrollToSection(portfolioRef)}
      />
      <div ref={homeRef} >
        <Home />
      </div>
      <div ref={educationRef} >
        <Timeline />
      </div>
      <div ref={skillsRef} >
        <Skills />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
