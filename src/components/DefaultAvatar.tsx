'use client';

import React from 'react';

interface DefaultAvatarProps {
  size?: number;
  className?: string;
}

const DefaultAvatar: React.FC<DefaultAvatarProps> = ({ size = 36, className = '' }) => {
  return (
    <div 
      className={`default-avatar ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: '#a65b2b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <svg 
        width={size * 0.6} 
        height={size * 0.6} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" 
          fill="white"
        />
        <path 
          d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" 
          fill="white"
        />
      </svg>
    </div>
  );
};

export default DefaultAvatar;