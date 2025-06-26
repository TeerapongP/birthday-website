
import React from 'react';

const MusicPlayer: React.FC = () => {
  const playMusic = () => {
    const audio = document.getElementById('birthday-music') as HTMLAudioElement | null;
    if (audio) {
      audio.play();
    }
  };

  return (
    <>
      <audio
        id="birthday-music"
        loop
        preload="auto"
        autoPlay
      >
        <source src="/music/Milky_Way_feat._PUN.mp3" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={playMusic}
        className="mt-4 px-6 py-3 bg-pink-300 hover:bg-pink-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 mb-4"
      >
        🌟 กดสิคะ~ เพลงรักกำลังรออยู่ 💕🎶
      </button>
    </>
  );
};

export default MusicPlayer;
