import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Data Script Swiss"
        className="h-24 w-auto"
      />
    </div>
  );
};

export default Logo;