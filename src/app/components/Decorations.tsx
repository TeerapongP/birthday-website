
import React from 'react';
import { Star } from 'lucide-react';

const Decorations: React.FC = () => (
  <div className="absolute inset-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`
        }}
      >
        <Star className="text-white opacity-30" size={Math.random() * 20 + 10} />
      </div>
    ))}
  </div>
);

export default Decorations;
