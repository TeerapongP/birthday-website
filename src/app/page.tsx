
"use client";
import React, { useState, useEffect, JSX } from 'react';
import Confetti from './components/Confetti';
import Decorations from './components/Decorations';
import Header from './components/Header';
import InteractiveCake from './components/InteractiveCake';
import MessageBox from './components/MessageBox';
import MusicPlayer from './components/MusicPlayer';
import { EMOJIS, COLORS } from './constants';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
}

export default function BirthdayWebsite(): JSX.Element {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [currentEmoji, setCurrentEmoji] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setShowMessage(true), 1000);

    const newConfetti: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
    setConfetti(newConfetti);

    const emojiInterval: NodeJS.Timeout = setInterval(() => {
      setCurrentEmoji(prev => (prev + 1) % EMOJIS.length);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(emojiInterval);
    };
  }, []);

  const handleCakeClick = (): void => {
    const newConfetti: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: 0,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
    setConfetti(prev => [...prev, ...newConfetti]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-pink-500 to-rose-500 overflow-hidden relative">
      <Confetti pieces={confetti} />
      {isClient && <Decorations />}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 text-center">
        <Header currentEmoji={EMOJIS[currentEmoji]} />
        <div className={`transform transition-all duration-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-pink-200 to-red-200 bg-clip-text text-transparent animate-pulse">
            🎉 สุขสันต์ 🎉
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
            วันเกิด! 🎂
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-300 mb-4 drop-shadow-lg animate-pulse">
            นะครับ 🌟
          </h3>
        </div>
        <InteractiveCake onCakeClick={handleCakeClick} />
        <MessageBox showMessage={showMessage} />
        <MusicPlayer />
        <div className={`mt-8 sm:mt-12 transform transition-all duration-1000 delay-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center space-x-1 text-sm sm:text-base animate-bounce">
            <span>🍦</span>
            <span>✨</span>
            <span>🎀</span>
            <span>✨</span>
            <span>🍦</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
