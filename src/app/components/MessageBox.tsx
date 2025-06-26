
import React from 'react';
import { Gift, Heart, Star } from 'lucide-react';

interface MessageBoxProps {
  showMessage: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ showMessage }) => (
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
      <div className="flex justify-center space-x-2 text-xl sm:text-2xl animate-pulse">
        <span>🌸</span>
        <span>💕</span>
        <span>🌻</span>
        <span>🍦</span>
        <span>✨</span>
      </div>
    </div>
  </div>
);

export default MessageBox;
