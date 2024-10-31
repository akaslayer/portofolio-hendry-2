import React from 'react';
import work from '@/public/work.webp';
import Image from 'next/image';
import { BsPhone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='py-20 px-5 lg:p-20'>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="flex flex-col gap-4 ">
            <h1 className='text-6xl font-semibold'>Have a project in mind?</h1>
            <h1 className='text-6xl font-semibold'>Let&apos;s get to work.</h1>
          </div>
          <Image src={work} alt='Work' className='max-w-lg lg:max-w-2xl justify-center items-center self-center' />
        </div>
      </div>
      <div className="bg-blue-600 rounded-t-full pt-10"></div>
      <div className="bg-blue-600 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center px-20 gap-6">
          <div className="flex flex-col gap-2 text-white font-semibold ">
            <BsPhone className='text-white w-12 h-12' />
            <h2 className='text-base'>Mon-Fri from 8am to 5pm.</h2>
            <h2 className='text-lg'>+62 819-3138-6119</h2>
          </div>
          <div className="flex flex-col gap-2 text-white font-semibold ">
            <MdEmail className='text-white w-12 h-12' />
            <h2 className='text-base'>I&apos;m here to help.</h2>
            <h2 className='text-lg'>hendrysurijanto123@gmail.com</h2>
          </div>
          <div className="flex flex-col gap-2 text-white font-semibold ">
            <HiLocationMarker className='text-white w-12 h-12' />
            <h2 className='text-base'>Come say hello at my home.</h2>
            <h2 className='text-lg'>JL. Kelapa Hybrida Utara 4, Banten, 15810</h2>
          </div>
        </div>
      </div>
      <div className="lg:px-20 px-5 bg-blue-600 py-5">
        <hr className='border-gray-400' />
        <div className="flex  flex-col justify-between lg:flex-row items-center mt-5 gap-5">
          <h3 className='text-white font-medium text-center lg:text-left'>
            Copyright 2024 Hendry Tjahaja Surijanto Putra, All Rights Reserved.
          </h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/hendrytsp/" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/akaslayer?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/hendrytjahajasp/" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
