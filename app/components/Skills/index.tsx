import React from 'react';
import next_pic from '@/public/next.png';
import react_pic from '@/public/react.png';
import spring_pic from '@/public/spring.png';
import java_pic from '@/public/java.png';
import typescript_pic from '@/public/typescript.png';
import tailwind_pic from '@/public/tailwind.png';
import Image, { StaticImageData } from 'next/image';

// Define the type for skill data
interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advance' | 'Master'; // Specific levels
  image: StaticImageData;
}

// Sample data with image URLs and proficiency levels
const skillsData: Skill[] = [
  { name: 'Java', level: 'Intermediate', image: java_pic },
  { name: 'TypeScript', level: 'Beginner', image: typescript_pic },
  { name: 'React.js', level: 'Intermediate', image: react_pic },
  { name: 'Next.js', level: 'Intermediate', image: next_pic },
  { name: 'Spring Boot', level: 'Intermediate', image: spring_pic },
  { name: 'Tailwind', level: 'Intermediate', image: tailwind_pic },
];

// Map proficiency labels to percentages
const proficiencyMap: Record<Skill['level'], number> = {
  Beginner: 40,
  Intermediate: 60,
  Advance: 80,
  Master: 100,
};

const Skills: React.FC = () => {
  return (
    <div className="py-20 px-4 md:px-40">
      <div className="py-3 px-5 bg-blue-600 rounded-full w-fit mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-white">My Skills</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/5">
            {/* Add a white background for the Next.js logo */}
            <div
              className={`flex items-center justify-center bg-${skill.name === 'Next.js' ? 'white' : 'transparent'} p-2 rounded-full`} // Use transparent bg for other logos
            >
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16" // Ensures all images are the same size
                width={64} // Set width for responsive images
                height={64} // Set height for responsive images
              />
            </div>
            <h3 className="text-lg font-medium">{skill.name}</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
              <div
                className={`bg-blue-600 h-full rounded-full`}
                style={{ width: `${proficiencyMap[skill.level]}%` }} // Use mapped value
              ></div>
            </div>
            <span className="mt-1 text-sm">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
