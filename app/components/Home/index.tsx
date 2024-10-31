'use client'
import { Button } from '@/components/ui/button';
import foto from '@/public/foto.png';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaFileArchive } from 'react-icons/fa';

type Role = 'Back-End' | 'Front-End' | 'Full-Stack';

interface AnimationConfig {
  duration: number;
  opacity: number;
  scale: number;
  y: number;
  rotateX?: number;
  rotation?: number;
  ease: string;
}

const Hero: React.FC = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const roles: readonly Role[] = ["Back-End", "Front-End", "Full-Stack"] as const;
  const [currentRole, setCurrentRole] = useState<number>(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect((): (() => void) => {
    const animateText = (): void => {
      // Kill previous timeline if it exists
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      timelineRef.current = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      const tl = timelineRef.current;

      // Define base animation configs
      const resetConfig: Partial<AnimationConfig> = {
        opacity: 0,
        scale: 0,
        y: 50,
        rotateX: -90
      };

      const enterConfig: AnimationConfig = {
        duration: 0.6,
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        ease: "back.out(2)"
      };

      // Reset all characters
      charsRef.current.forEach((element: HTMLSpanElement | null): void => {
        if (element) {
          gsap.set(element, resetConfig);
        }
      });

      // Animate in
      charsRef.current.forEach((element: HTMLSpanElement | null, i: number): void => {
        if (element) {
          tl.to(element, enterConfig, i * 0.05);
        }
      });

      // Hold the animation
      tl.to({}, { duration: 2 });

      // Animate out
      charsRef.current.forEach((element: HTMLSpanElement | null): void => {
        if (element) {
          const randomY: number = Math.random() * 100 - 50;
          const randomRotate: number = Math.random() * 90 - 45;

          const exitConfig: AnimationConfig = {
            duration: 0.4,
            opacity: 0,
            scale: 0,
            y: randomY,
            rotation: randomRotate,
            ease: "power2.in"
          };

          tl.to(element, exitConfig, ">-0.3");
        }
      });

      // Update role after animation out
      tl.call((): void => {
        setCurrentRole((prev: number): number => (prev + 1) % roles.length);
      });
    };

    // Initial animation
    animateText();

    // Cleanup function
    return (): void => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [currentRole]);

  const updateCharRef = (index: number) => (element: HTMLSpanElement | null): void => {
    charsRef.current[index] = element;
  };

  return (
    <div className=" px-5 pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="flex flex-col lg:gap-2 lg:pl-20">
          <h1 className=" text-5xl lg:text-6xl font-bold">HI, I'M Hendry!</h1>
          <div className="flex items-center gap-0">
            <div
              ref={containerRef}
              className="h-[72px] flex items-center"
            >
              <h2 className="text-blue-600 text-5xl lg:text-6xl font-bold whitespace-nowrap perspective-[1000px] mr-3">
                {roles[currentRole].split('').map((char: string, i: number) => (
                  <span
                    key={`${char}-${i}-${currentRole}`}
                    ref={updateCharRef(i)}
                    className="inline-block transform-gpu"
                    style={{ opacity: 0 }}
                  >
                    {char}
                  </span>
                ))}
              </h2>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold">
              Developer
            </h2>
          </div>
          <p className='text-base'>I am Hendry Tjahaja Surijanto Putra, a graduate from Multimedia Nusantara University with a major in Informatics. I have completed a bootcamp in Purwadhika and proficient in backend development using programming languages like Java, PHP, and JavaScript. I can also handle frontend development tasks. I am focused on getting the job done, enhancing my skills, and gaining work experience. I am committed to the tasks given and adaptable to new environments.</p>
          <Button className='text-white w-fit p-6 text-lg bg-blue-600 mt-2 hover:bg-blue-400 flex items-center'><FaFileArchive /> Download CV</Button>
        </div>

        <div className="w-full min-h-72 justify-self-end flex justify-center bg-[radial-gradient(circle,_#96d5fa,_#0D92F4)] relative">
          <h1 className="absolute text-6xl text-center font-bold text-white opacity-50 bottom-0 top-3 lg:top-5 left-10 uppercase z-10 custom-font ">Hendry  Tjahaja   SP</h1>
          <Image src={foto} alt="Hendry's Profile" className="w-full h-full max-w-xl object-cover z-20 mt-16" />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Hero), {
  ssr: false
});
