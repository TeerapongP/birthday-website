"use client";
import React, { useState, useEffect, JSX } from 'react';
import { Heart, Star, Sparkles, Gift, Cake } from 'lucide-react';

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

  const emojis: string[] = ['🎂', '🎉', '🎈', '🎁', '🌟', '💖'];
  const colors: string[] = ['#ef4444', '#f87171', '#fb7185', '#f472b6', '#ec4899', '#e11d48'];

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setShowMessage(true), 1000);

    // สร้าง confetti หลังจาก mount แล้ว
    const newConfetti: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(newConfetti);

    // เปลี่ยน emoji
    const emojiInterval: NodeJS.Timeout = setInterval(() => {
      setCurrentEmoji(prev => (prev + 1) % emojis.length);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(emojiInterval);
    };
  }, []);

  const handleCakeClick = (): void => {
    // สร้าง confetti ใหม่เมื่อคลิก
    const newConfetti: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: 0,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(prev => [...prev, ...newConfetti]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-pink-500 to-rose-500 overflow-hidden relative">
      {/* Confetti Animation */}
      {confetti.map((piece: ConfettiPiece) => (
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

      {/* Background Decorations */}
      {isClient && (
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
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        {/* Header Animation */}
        <div className="mb-8 transform transition-all duration-1000 hover:scale-110">
          <div className="text-8xl mb-4 animate-bounce">
            {emojis[currentEmoji]}
          </div>
        </div>

        {/* Main Title */}
        <div className={`transform transition-all duration-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-pink-200 to-red-200 bg-clip-text text-transparent animate-pulse">
            🎉 สุขสันต์ 🎉
          </h1>

          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            วันเกิด! 🎂
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-pink-300 mb-6 drop-shadow-lg animate-pulse">
            นะครับ 🌟
          </h3>
        </div>

        {/* Interactive Cake */}
        <div
          className="mb-8 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-3"
          onClick={handleCakeClick}
        >
          <div className="relative">
            <Cake size={120} className="text-pink-200 drop-shadow-2xl animate-pulse" />
            <div className="absolute -top-2 -right-2">
              <Sparkles size={30} className="text-red-300 animate-spin" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className={`max-w-2xl mx-auto transform transition-all duration-1000 delay-500 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              Happy Birthday นะครับเธอ! 🎉 มีความสุขมากๆนะ มีความสุขกับชีวิต มีแต่สิ่งดีๆเข้ามา
              ทำไรอะก็ขอให้สมหวัง เจอแต่ผู้คนดีๆเข้ามาในชีวิต เอ็นจอยกับทุกๆอย่างเลย
              สุขภาพแข็งแรง เฮงๆรวยๆนะ ✨🌟
            </p>

            <div className="flex justify-center space-x-4 mb-6">
              <Gift className="text-pink-200 animate-bounce" size={30} />
              <Heart className="text-red-300 animate-pulse" size={30} />
              <Star className="text-rose-300 animate-spin" size={30} />
            </div>

            <p className="text-lg text-pink-200 font-medium">
              🎈 Happy Birthday นะครับเธอ! 🎈
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-12 transform transition-all duration-1000 delay-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white/80 text-sm">
            คลิกที่เค้กเพื่อดู confetti! 🎊
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}