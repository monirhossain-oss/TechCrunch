import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import news1 from "../../assets/Oakland-Ballers.webp";
import news2 from "../../assets/banner2.webp";
import news3 from "../../assets/banner3.webp";
import news4 from "../../assets/banner4.webp";
import news5 from "../../assets/banner5.webp";
import news6 from "../../assets/banner6.webp";
import news7 from "../../assets/banner7.webp";
import news8 from "../../assets/banner8.webp";
import news9 from "../../assets/banner9.webp";
import news10 from "../../assets/banner10.webp";

const newsData = [
  {
    img: news1,
    category: "IN BRIEF",
    title:
      "OpenAI is building five new Stargate data centers with Oracle and SoftBank",
    author: "Maxwell Zeff · 9 hours ago",
  },
  {
    img: news2,
    category: "AI",
    title: "Building the new backbone of space at TechCrunch Disrupt 2025",
    author: "TechCrunch Events · 10 hours ago",
  },
  {
    img: news3,
    category: "APPS",
    title: "The rise of Fellou, World's First Agentic AI Browser",
    author: "TechCrunch Events · 10 hours ago",
  },
  {
    img: news4,
    category: "AI",
    title: "What is Bluesky? Everything to know about the X competitor",
    author: "TechCrunch Events · 10 hours ago",
  },
  {
    img: news5,
    category: "AI",
    title: "Google’s AI Mode arrives in Spanish globally",
    author: "TechCrunch Events · 10 hours ago",
  },
  {
    img: news6,
    category: "APPS",
    title: "Google Cloud’s COO isn’t stressed about landing the AI giants",
    author: "TechCrunch Events · 10 hours ago",
  },
  {
    img: news7,
    category: "AI",
    title: "Scott Wiener on his fight to make Big Tech disclose AI’s dangers",
    author: "TechCrunch Events · 10 hours ago",
  },
  {
    img: news8,
    category: "GOVERNMENTS & POLICE",
    title: "How Google’s dev tools manager makes AI coding work",
    author: "TechCrunch Events · 10 hours ago",
  },
  {
    img: news9,
    category: "TRANSPORTATION",
    title:
      "Disney is raising the price of Disney+, Hulu subscriptions next month",
    author: "TechCrunch Events · 10 hours ago",
  },
  {
    img: news10,
    category: "IN BRIEF",
    title: "Jaguar Land Rover to pause production until next week – at least",
    author: "TechCrunch Events · 10 hours ago",
  },
];

const rightSideNews = [
  {
    category: "FEATURED",
    title:
      "Apple may delay the iPhone 16 Pro Max launch due to supply chain issues",
    author: "John Doe",
    time: "5 hours ago",
  },
  {
    category: "AI",
    title: "Google announces new AI tools for developers worldwide",
    author: "TechCrunch",
    time: "7 hours ago",
  },
  {
    category: "TRANSPORTATION",
    title: "Tesla’s new Model X hits the market with improved battery life",
    author: "Jane Smith",
    time: "12 hours ago",
  },
  {
    category: "IN BRIEF",
    title:
      "OpenAI is building five new Stargate data centers with Oracle and SoftBank",
    author: "Maxwell Zeff",
    time: "9 hours ago",
  },
  {
    category: "AI",
    title: "Building the new backbone of space at TechCrunch Disrupt 2025",
    author: "TechCrunch Events",
    time: "10 hours ago",
  },
  {
    category: "APPS",
    title: "The rise of Fellou, World's First Agentic AI Browser",
    author: "TechCrunch Events",
    time: "10 hours ago",
  },
  {
    category: "AI",
    title: "What is Bluesky? Everything to know about the X competitor",
    author: "TechCrunch Events",
    time: "10 hours ago",
  },
];

const LatestNews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-white">
      {/* Left Side (Main News List) */}
      <div className="md:col-span-3 flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-green-700 font-extrabold text-5xl md:text-6xl">
            Latest News
          </h1>
          <button
            className="px-6 py-3 flex items-center gap-2 border-2 cursor-pointer border-green-600 text-lg rounded-full text-green-900
            bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat 
            transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
          >
            See More <FiArrowUpRight />
          </button>
        </div>

        {/* News List Section */}
        <div className="flex flex-col gap-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 w-full border-b border-gray-200 pb-4"
            >
              {/* Left Image */}
              <div className="w-full sm:w-40 h-52 sm:h-28 flex-shrink-0">
                <img
                  src={news.img}
                  alt="news"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center text-black">
                <p className="text-green-600 text-sm font-semibold uppercase mb-1">
                  {news.category}
                </p>
                <h2 className="font-bold text-lg hover:underline cursor-pointer leading-snug">
                  {news.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{news.author}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="px-6 py-3 flex items-center w-fit gap-2 border-2 cursor-pointer border-green-600 text-lg rounded-full text-green-900
            bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat 
            transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
        >
          Next <FiArrowUpRight />
        </button>
      </div>

      {/* Right Side (Sidebar News) */}
      <div className="flex flex-col gap-6">
        {rightSideNews.map((news, index) => (
          <div
            key={index}
            className="flex flex-col border-2 border-green-600 rounded-lg p-4 text-black shadow-sm"
          >
            <p className="text-green-600 text-sm font-semibold uppercase mb-1">
              {news.category}
            </p>
            <h2 className="font-bold text-lg hover:underline cursor-pointer leading-snug">
              {news.title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {news.author} · {news.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;