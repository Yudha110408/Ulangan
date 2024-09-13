"use client";

import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center flex flex-col justify-center items-start p-8 h-screen z-0"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-lg ml-8">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Lexend Deca' }}>
          Instant collaboration for remote teams
        </h1>
        <p className="text-lg mb-6" style={{ fontFamily: 'Lexend Deca' }}>
          All-in-one place for your remote team to chat, collaborate and track project progress.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-2 border rounded-l-md hero-input"
            style={{ fontFamily: 'Lexend Deca' }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md flex items-center gap-2 hero-button"
            style={{ fontFamily: 'Lexend Deca', boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
          >
            Get Early Access
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;