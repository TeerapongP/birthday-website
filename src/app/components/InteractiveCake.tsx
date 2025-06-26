
import React from 'react';
import { Cake, Sparkles } from 'lucide-react';

interface InteractiveCakeProps {
  onCakeClick: () => void;
}

const InteractiveCake: React.FC<InteractiveCakeProps> = ({ onCakeClick }) => (
  <div
    className="mb-6 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95"
    onClick={onCakeClick}
  >
    <div className="relative">
      <Cake size={80} className="sm:w-24 sm:h-24 md:w-32 md:h-32 text-pink-200 drop-shadow-2xl animate-pulse" />
      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
        <Sparkles size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-300 animate-spin" />
      </div>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <div className="text-yellow-300 text-lg sm:text-xl animate-pulse">🕯️</div>
      </div>
    </div>
  </div>
);

export default InteractiveCake;
