import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import thinkingAnimation from '../assets/Animation - 1739317044876.json'; // Thinking animation
import idleRobot from '../assets/Animation - 1739315998846.json'; // Idle animation

export default function Generate() {
  const [userPrompt, setUserPrompt] = useState('');
  const [generatedHashtags, setGeneratedHashtags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // API Call to Generate Hashtags
  const generateHashtags = async () => {
    if (!userPrompt.trim()) return;

    setLoading(true);
    setError('');
    setGeneratedHashtags([]);

    try {
      const response = await fetch('https://hashtags-api.onrender.com/api/hashtags/generate/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caption: userPrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate hashtags');
      }

      const data = await response.json();

      // Ensure all hashtags start with #
      const formattedHashtags = (data.hashtags || []).map(tag =>
        tag.startsWith('#') ? tag : `#${tag}`
      );

      // Simulate thinking delay before showing hashtags
      setTimeout(() => {
        setGeneratedHashtags(formattedHashtags);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError('Error generating hashtags. Try again.');
      setLoading(false);
    }
  };

  // Copy Single Hashtag with Toast Notification
  const copyHashtag = (tag) => {
    navigator.clipboard.writeText(tag);
    toast.success(`Copied: ${tag}`, { autoClose: 2000 });
  };

  // Copy All Hashtags with Toast Notification
  const copyAll = () => {
    const formattedText = generatedHashtags.join(' '); // Ensure spacing
    navigator.clipboard.writeText(formattedText);
    toast.success('All Hashtags Copied!', { autoClose: 2000 });
  };

  // Lottie animation options
  const robotAnimation = {
    loop: true,
    autoplay: true,
    animationData: loading ? thinkingAnimation : idleRobot, // Switch animation dynamically
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-white py-14 px-6 font-mono" id='generate'> 

      {/* Left Side - User Input */}
      <div className="w-full md:w-1/3 flex flex-col items-center ml-[110px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Generate Hashtags with AI 🤖
        </h2>

        <div className="w-full max-w-md">
          {/* Large Input Box like ChatGPT */}
          <textarea
            rows="3"
            placeholder="Describe your content..."
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            className="w-full px-4 py-4 text-lg rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none shadow-md resize-none"
          />
          {/* Buttons */}
          <button
            onClick={generateHashtags}
            className="mt-3 w-full bg-orange-500 text-white py-4 text-lg rounded-lg font-medium hover:bg-primary-800 transition duration-300 shadow-lg"
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Generate Hashtags'}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>

      {/* Middle - AI Robot Animation */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Lottie options={robotAnimation} height={180} width={180} />
      </div>

      {/* Right Side - Generated Hashtags */}
      <div className="w-full md:w-1/3 flex flex-col items-center">
        {generatedHashtags.length > 0 && !loading && (
          <div className="mt-6 w-full max-w-lg bg-white rounded-lg shadow-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Generated Hashtags</h3>
            <div className="max-h-[300px] overflow-y-auto flex flex-wrap gap-2 p-2 border rounded-lg">
              {generatedHashtags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => copyHashtag(tag)}
                  className="px-4 py-3 bg-gray-200 text-gray-800 rounded-lg cursor-pointer hover:bg-gray-300 transition duration-200 shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Copy All Button */}
            <button
              onClick={copyAll}
              className="mt-4 w-full bg-gray-800 text-white py-4 text-lg rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-lg"
            >
              Copy All
            </button>
          </div>
        )}
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
}
