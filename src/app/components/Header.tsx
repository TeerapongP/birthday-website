
import React from 'react';

interface HeaderProps {
  currentEmoji: string;
}

const Header: React.FC<HeaderProps> = ({ currentEmoji }) => (
  <div className="mb-6 sm:mb-8 transform transition-all duration-1000 hover:scale-110">
    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 animate-bounce">
      {currentEmoji}
    </div>
    <div className="flex justify-center space-x-2 sm:space-x-3 text-lg sm:text-xl md:text-2xl">
      <span className="animate-pulse">⭐</span>
      <span className="animate-bounce">💫</span>
      <span className="animate-pulse">⭐</span>
    </div>
  </div>
);

export default Header;
