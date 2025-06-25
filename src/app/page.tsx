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

  const emojis: string[] = ['🎂', '🎉', '🎈', '🎁', '🌟', '💖', '🌻', '🍦', '🍰', '🎊'];
  const colors: string[] = ['#ef4444', '#f87171', '#fb7185', '#f472b6', '#ec4899', '#e11d48', '#fbbf24', '#60a5fa'];

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
      <audio
        id="birthday-music"
        loop
        preload="auto"
        autoPlay
      >
        <source src="/music/Milky_Way_feat._PUN.mp3" />
        Your browser does not support the audio element.
      </audio>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 text-center">

        {/* เพิ่มลูกโป่งลอยน่ารักๆ */}
        <div className="absolute top-10 left-4 sm:left-10 animate-bounce text-2xl sm:text-3xl" style={{ animationDelay: '0.5s' }}>🎈</div>
        <div className="absolute top-20 right-4 sm:right-10 animate-bounce text-2xl sm:text-3xl" style={{ animationDelay: '1.5s' }}>🎈</div>
        <div className="absolute bottom-20 left-8 sm:left-16 animate-pulse text-xl sm:text-2xl">💝</div>
        <div className="absolute bottom-32 right-8 sm:right-16 animate-pulse text-xl sm:text-2xl">🌸</div>

        {/* Header Animation */}
        <div className="mb-6 sm:mb-8 transform transition-all duration-1000 hover:scale-110">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 animate-bounce">
            {emojis[currentEmoji]}
          </div>
          {/* เพิ่มดาวน่ารักรอบๆ */}
          <div className="flex justify-center space-x-2 sm:space-x-3 text-lg sm:text-xl md:text-2xl">
            <span className="animate-pulse">⭐</span>
            <span className="animate-bounce">💫</span>
            <span className="animate-pulse">⭐</span>
          </div>
        </div>

        {/* Main Title */}
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

        {/* Interactive Cake */}
        <div
          className="mb-6 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95"
          onClick={handleCakeClick}
        >
          <div className="relative">
            <Cake size={80} className="sm:w-24 sm:h-24 md:w-32 md:h-32 text-pink-200 drop-shadow-2xl animate-pulse" />
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
              <Sparkles size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-300 animate-spin" />
            </div>
            {/* เพิ่มเทียนน่ารักๆ */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <div className="text-yellow-300 text-lg sm:text-xl animate-pulse">🕯️</div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className={`max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4 transform transition-all duration-1000 delay-500 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-2xl">
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 leading-relaxed">
              Happy Birthday นะครับเธอ! 🎉 มีความสุขมากๆนะ มีความสุขกับชีวิต มีแต่สิ่งดีๆเข้ามา
              ทำไรอะก็ขอให้สมหวัง เจอแต่ผู้คนดีๆเข้ามาในชีวิต เอ็นจอยกับทุกๆอย่างเลย
              สุขภาพแข็งแรง เฮงๆรวยๆนะ ✨🌟
            </p>

            <div className="flex justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <Gift className="text-pink-200 animate-bounce w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              <Heart className="text-red-300 animate-pulse w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              <Star className="text-rose-300 animate-spin w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>

            <p className="text-sm sm:text-base md:text-lg text-pink-200 font-medium mb-3">
              🎈 Happy Birthday นะครับเธอ! 🎈
            </p>
            <button
              onClick={() => {
                const audio = document.getElementById('birthday-music') as HTMLAudioElement | null;
                if (audio) {
                  audio.play();
                }
              }}
              className="mt-4 px-6 py-3 bg-pink-300 hover:bg-pink-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 mb-4"
            >
              🌟 กดสิคะ~ เพลงรักกำลังรออยู่ 💕🎶
            </button>

            {/* เพิ่มตกแต่งน่ารักๆ */}
            <div className="flex justify-center space-x-2 text-xl sm:text-2xl animate-pulse">
              <span>🌸</span>
              <span>💕</span>
              <span>🌻</span>
              <span>🍦</span>
              <span>✨</span>
            </div>
          </div>
        </div>

        {/* Footer */}
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