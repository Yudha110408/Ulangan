import React from 'react';

const Background1: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background1.png')" }}>
      {children}
    </div>
  );
};

export default Background1;