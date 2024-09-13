"use client";

import React from 'react';
import Image from 'next/image';

const InfoSection = ({ backgroundMode }: { backgroundMode: 'light' | 'dark' }) => {
  const textColorClass = backgroundMode === 'light' ? 'text-black' : 'text-white';
  const backgroundClass = backgroundMode === 'light' ? 'bg-white' : 'bg-black';

  return (
    <section
      className={`flex flex-col md:flex-row items-center p-8 ${backgroundClass} relative overflow-hidden`}
    >

      <div className="absolute -left-10 top-10 w-1/3 h-1 bg-gradient-to-r from-blue-400 to-transparent opacity-50"></div>
      <div className="absolute -right-10 bottom-10 w-1/2 h-1 bg-gradient-to-l from-blue-400 to-transparent opacity-50"></div>


      <div className="md:w-1/2 p-4 flex justify-end relative group">
        <Image
          src="/img-group2.jpg"
          alt="Image Group"
          width={700}
          height={700}
          className="transition-transform duration-300 transform group-hover:scale-105 drop-shadow-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* ini khusus dekstop */}
      <div className="md:w-1/2 p-4 flex flex-col justify-center relative z-10">
        <h2
          className={`text-5xl font-bold mb-4 ${textColorClass} drop-shadow-lg transition-transform duration-300 hover:translate-x-4`}
          style={{ fontFamily: 'Lexend Deca' }}
        >
          Chats for your distributed teams
        </h2>
        <p className={`text-lg mb-6 ${textColorClass} drop-shadow-md transition-transform duration-300 hover:translate-x-4`} style={{ fontFamily: 'Lexend Deca' }}>
          Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
        </p>
        <a
          href="#"
          className={`text-lg font-medium flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:translate-x-4 ${textColorClass}`}
          style={{ fontFamily: 'Lexend Deca' }}
        >
          Learn More
          <svg
            className="w-6 h-6 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default InfoSection;