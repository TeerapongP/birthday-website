
import React from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
}

interface ConfettiProps {
  pieces: ConfettiPiece[];
}

const Confetti: React.FC<ConfettiProps> = ({ pieces }) => (
  <div className="absolute inset-0 overflow-hidden">
    {pieces.map((piece: ConfettiPiece) => (
      <div
        key={piece.id}
        className="absolute w-2 h-2 rounded-full animate-bounce opacity-80"
        style={{
          left: `${piece.left}%`,
          backgroundColor: piece.color,
          animationDelay: `${piece.delay}s`,
          animationDuration: '3s',
          top: '-10px',
          animation: `fall 4s linear infinite ${piece.delay}s`
        }}
      />
    ))}
  </div>
);

export default Confetti;
