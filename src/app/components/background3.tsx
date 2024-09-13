import React from 'react';

const Background3: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-[rgb(28,28,51)] text-white">
            {children}
        </div>
    );
};

export default Background3;