import React from 'react';
import Image, { StaticImageData } from 'next/image';
import typescript_pic from '@/public/typescript.png';
import spring_pic from '@/public/spring.png';
import java_pic from '@/public/java.png';
import next_pic from '@/public/next.png';
import tailwind_pic from '@/public/tailwind.png';
import hii from '@/public/hiimart.jpg';
import luxtix from '@/public/luxtix.jpg';
import ITechno from '@/public/ITechno.jpg';

interface Framework {
  name: string;
  image: StaticImageData; // Image type for framework
}

interface PortfolioItem {
  title: string;
  description: string;
  image: StaticImageData; // Project image
  link: string; // URL for more details
  frameworks: Framework[]; // List of frameworks used in the project with images
}

// Sample portfolio items with frameworks
const portfolioItems: PortfolioItem[] = [
  {
    title: 'Hii Mart',
    description: 'Hii Mart is a multi-warehouse e-commerce platform that optimizes delivery times and costs by automatically routing orders to the nearest warehouse location.',
    image: hii,
    link: 'https://github.com/Final-Project-HII/DTI-Frontend',
    frameworks: [
      { name: 'Next.js', image: next_pic },
      { name: 'TypeScript', image: typescript_pic },
      { name: 'Tailwind CSS', image: tailwind_pic },
      { name: 'Java', image: java_pic },
      { name: 'Spring Boot', image: spring_pic },
    ],
  },
  {
    title: 'Luxtix',
    description: 'Luxtix is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.',
    image: luxtix,
    link: 'https://github.com/Luxtix/DTI-Frontend',
    frameworks: [
      { name: 'Next.js', image: next_pic },
      { name: 'TypeScript', image: typescript_pic },
      { name: 'Tailwind CSS', image: tailwind_pic },
      { name: 'Java', image: java_pic },
      { name: 'Spring Boot', image: spring_pic },
    ],
  },
  {
    title: 'ITechno',
    description: 'ITechno An integrated information & technology system provider, dedicated to delivering highly effective solutions in the field of Information Systems.',
    image: ITechno,
    link: 'https://github.com/akaslayer/company-profile',
    frameworks: [
      { name: 'Next.js', image: next_pic },
      { name: 'TypeScript', image: typescript_pic },
      { name: 'Tailwind CSS', image: tailwind_pic },
    ],
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="py-20 px-4 md:px-40 bg-white dark:bg-gray-900" id="portfolio">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">My Portfolio</h2>
        <p className="text-gray-600 mt-2 dark:text-gray-400">A selection of my work</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg border-gray-200 border-2 flex flex-col transition-transform transform hover:scale-105"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
              width={400}
              height={200}
            />
            <div className="p-4 flex-1">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300 line-clamp-3">{item.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.frameworks.map((framework, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-center p-1 rounded-full ${framework.name === 'Next.js'
                      ? 'bg-white' // Change to white in light mode and transparent in dark mode
                      : 'bg-transparent'
                      }`}
                  >
                    <Image
                      src={framework.image}
                      alt={framework.name}
                      className="w-8 h-8"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <a
                href={item.link}
                className="inline-block border border-gray-500 hover:bg-blue-600 hover:text-white font-bold bg-transparent py-2 px-4 rounded transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
