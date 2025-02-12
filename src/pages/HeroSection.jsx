import { useState } from 'react';
import instagramLogo from '../assets/instagram.svg';
import twitterLogo from '../assets/twitter-x-logo-png_seeklogo-492396.png';
import facebookLogo from '../assets/Facebook_Logo_(2019).png';
import linkedinLogo from '../assets/pngimg.com - linkedIn_PNG26.png';
import youtubeLogo from '../assets/youtube.svg';
import snapchatLogo from '../assets/snapchat.svg';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 40, // Adjust movement scale
      y: (e.clientY / window.innerHeight) * 40,
    });
  };

  return (
    <section
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 sm:px-16 lg:px-[110px] font-mono z-0"
      onMouseMove={handleMouseMove}
    >
      {/* Desktop: Left Side Logos */}
      <div className="hidden md:flex absolute left-[110px] flex-col items-center space-y-10">
        <img src={instagramLogo} alt="Instagram" className="w-10 sm:w-12 md:w-14 opacity-80 animate-bounce" />
        <img src={twitterLogo} alt="Twitter" className="w-8 sm:w-10 md:w-12 opacity-80 animate-bounce delay-200" />
        <img src={facebookLogo} alt="Facebook" className="w-12 sm:w-14 md:w-16 opacity-80 animate-bounce delay-400" />
      </div>

      {/* Mobile: Top Row Logos */}
      <div className="flex md:hidden absolute top-6 flex-row justify-around w-full px-6">
        <img src={instagramLogo} alt="Instagram" className="w-10 opacity-80 animate-bounce" />
        <img src={twitterLogo} alt="Twitter" className="w-8 opacity-80 animate-bounce delay-200" />
        <img src={facebookLogo} alt="Facebook" className="w-12 opacity-80 animate-bounce delay-400" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-lg sm:max-w-screen-md lg:max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center justify-center">
        {/* Alert Banner */}
        <a
          href="#"
          className="inline-flex justify-center items-center py-2 px-4 mb-5 text-xs sm:text-sm text-white bg-gray-800 rounded-full hover:bg-gray-700 max-w-xs sm:max-w-lg"
          role="alert"
        >
          <span className="text-xs bg-primary rounded-full text-white px-2 sm:px-3 py-1 sm:py-1.5 mr-2">New</span>
          <span className="text-xs sm:text-sm font-medium">#YourTrendRank is Live! See what's new</span>
        </a>

        {/* Hero Content */}
        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-black">
          Elevate Your Hashtags, Boost Your Reach
        </h1>
        <p className="mb-8 text-sm sm:text-lg md:text-xl font-normal text-gray-700 sm:px-8 md:px-16 lg:px-48">
          #YourTrendRank helps you find trending hashtags to boost your posts and reach more people. It makes your social media presence stronger by suggesting the best hashtags for your content. Whether you're a brand, influencer, or creator, it helps you grow your audience and improve engagement easily.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button className="py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-medium text-black bg-primary rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 transition duration-300">
            Get Started
          </button>
          <button className="py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-medium text-black border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition duration-300">
            Watch Video
          </button>
        </div>
      </div>

      {/* Desktop: Right Side Logos */}
      <div className="hidden md:flex absolute right-[110px] flex-col items-center space-y-10">
        <img src={linkedinLogo} alt="LinkedIn" className="w-12 sm:w-14 md:w-16 opacity-80 animate-bounce" />
        <img src={youtubeLogo} alt="YouTube" className="w-10 sm:w-12 md:w-14 opacity-80 animate-bounce delay-200" />
        <img src={snapchatLogo} alt="Snapchat" className="w-8 sm:w-10 md:w-12 opacity-80 animate-bounce delay-400" />
      </div>

      {/* Mobile: Bottom Row Logos */}
      <div className="flex md:hidden absolute bottom-6 flex-row justify-around w-full px-6">
        <img src={linkedinLogo} alt="LinkedIn" className="w-10 opacity-80 animate-bounce" />
        <img src={youtubeLogo} alt="YouTube" className="w-8 opacity-80 animate-bounce delay-200" />
        <img src={snapchatLogo} alt="Snapchat" className="w-12 opacity-80 animate-bounce delay-400" />
      </div>
    </section>
  );
}
