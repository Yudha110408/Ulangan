"use client";

import React from 'react';
import Image from 'next/image';

const InfoSection = ({ backgroundMode }: { backgroundMode: 'light' | 'dark' }) => {
  const textColorClass = backgroundMode === 'light' ? 'text-black' : 'text-white';
  const backgroundClass = backgroundMode === 'light' ? 'bg-white' : 'bg-black';

  return (
    <section className={`flex flex-col md:flex-row items-center p-8 ${backgroundClass}`}>
      {/* Image Group */}
      <div className="md:w-1/2 p-4 relative group">
        <Image
          src="/img-group.jpg"
          alt="Image Group"
          width={500}
          height={500}
          className="transition-transform duration-300 transform group-hover:scale-105" // Zoom effect
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 p-4 flex flex-col justify-center">
        <h2 className={`text-5xl font-bold mb-4 ${textColorClass}`} style={{ fontFamily: 'Lexend Deca' }}>
          Choose how you want to work
        </h2>
        <p className={`text-lg mb-6 ${textColorClass}`} style={{ fontFamily: 'Lexend Deca' }}>
          In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
        </p>
        <a href="#" className={`text-lg font-medium flex items-center gap-2 ${textColorClass}`} style={{ fontFamily: 'Lexend Deca' }}>
          Learn More
          {/* Arrow Icon */}
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l7-7 7 7-7 7-7-7z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default InfoSection;
