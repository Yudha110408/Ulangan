import React from 'react';

const Background2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white">
      {children}
    </div>
  );
};

export default Background2;