import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Trending() {
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTrendingHashtags();
  }, []);

  const fetchTrendingHashtags = async () => {
    try {
      const response = await fetch('https://hashtags-api.onrender.com/api/hashtags/trending/');
      if (!response.ok) {
        throw new Error('Failed to fetch trending hashtags');
      }
      const data = await response.json();
      processHashtags(data.hashtags);
    } catch (err) {
      setError('Error fetching trending hashtags. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const processHashtags = (hashtags) => {
    const hashtagCounts = {};
    hashtags.forEach((tag) => {
      const cleanTag = tag.startsWith('#') ? tag.slice(1) : tag;
      hashtagCounts[cleanTag] = (hashtagCounts[cleanTag] || 0) + 1;
    });

    const formattedData = Object.entries(hashtagCounts).map(([name, count]) => ({
      name: `#${name}`,
      count,
    }));

    setTrendingHashtags(formattedData);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-white py-12 px-6 font-mono" id='trending'>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🔥 Trending Hashtags</h2>
      {loading ? (
        <p className="text-gray-500">Fetching trending hashtags...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="w-full max-w-3xl bg-white p-6 shadow-lg rounded-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trendingHashtags} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="#FF5733" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Trending Hashtags</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {trendingHashtags.map((tag, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg cursor-pointer hover:bg-gray-300 transition duration-200"
                  onClick={() => navigator.clipboard.writeText(tag.name)}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
