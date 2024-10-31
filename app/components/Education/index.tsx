// components/Timeline.tsx
import React from "react";

type TimelineItem = {
  title: string;
  institution: string;
  location: string;
  description: string;
  dateRange: string;
};

const timelineData: TimelineItem[] = [
  {
    title: "Purwadhika Software Engineer DTI Graduate",
    institution: "Purwadhika Digital Technology School",
    location: " BSD Green Office Park, Kabupaten Tangerang",
    description:
      "Purwadhika is a bootcamp school focused on developing digital skills for career advancement.",
    dateRange: "February 2024 - October 2024",
  },
  {
    title: "Bachelor Of Informatics",
    institution: "Multimedia Nusantara University",
    location: "Jl. Scientia Boulevard, Kabupaten Tangerang, Banten",
    description:
      "Universitas Multimedia Nusantara (UMN) is a private university located in Gading Serpong, Tangerang.UMN was founded by Dr. (HC) Jakob Oetama, one of the founders of Kompas Gramedia, in 2006.",
    dateRange: "August 2019 - August 2024",
  },
  {
    title: "IT Intern",
    institution: "PT Multimedia Digital Nusantara",
    location: "Jl. Scientia Boulevard, Kabupaten Tangerang, Banten",
    description:
      "PT. Multimedia Digital Nusantara is a private sector company specializing in the creative animation industry and research services, with a focus on business and product development.",
    dateRange: "August 2022 - January 2023",
  },
  {
    title: "Bangkit Distinction Graduate",
    institution: "Bangkit Academy 2022 by Google, GoTo, Traveloka – Cloud Computing Learning Path",
    location: "Online",
    description:
      "Designed to prepare students with in-demand skills and tech certifications, the Bangkit curriculum offers 3 interdisciplinary learning paths - machine learning, mobile development, and cloud computing. By the end of this program, you'll be equipped with the tech expertise, soft skills, and English proficiency you need to transit from academia to the workplace and succeed at leading companies.",
    dateRange: "February 2022 – July 2022",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col items-center  py-20  lg:p-20">
      <div className="p-5 bg-blue-600 rounded-full">
        <h2 className="text-2xl font-semibold  text-white">Education & Experience</h2>
      </div>
      <div className="relative mt-10">
        <div className="h-full border-r border-gray-300 absolute right-1/2 top-0"></div>
        {timelineData.map((item, index) => (
          <div className="relative mt-10 w-full  grid grid-cols-2" key={index}>
            <div className={`col-span-1 ${index % 2 == 0 && "order-last"}`}></div>
            <div className="col-span-1 ">
              <div key={index} className="flex items-start mb-8 relative">
                <div className="w-8">
                  <div className={`w-4 h-4 bg-blue-500 rounded-full  absolute top-1/2 -translate-y-1/2 ${index % 2 == 0 ? "-right-2" : "-left-2"}`}></div>
                </div>
                <div className={` ${index % 2 == 0 ? "mr-8 text-right" : "ml-8 text-left"}`}>
                  <h3 className="text-lg font-bold text-blue-500">{item.dateRange}</h3>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm font-semibold text-gray-600">{item.institution}, {item.location}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Timeline;
