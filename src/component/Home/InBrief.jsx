import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
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
import { GiGothicCross } from 'react-icons/gi';

const InBrief = () => {
    const newsData = [
        {
            img: news1,
            category: "IN BRIEF",
            title: "OpenAI is building five new Stargate data centers with Oracle and SoftBank",
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
            title: "Disney is raising the price of Disney+, Hulu subscriptions next month",
            author: "TechCrunch Events · 10 hours ago",
        },
        {
            img: news10,
            category: "IN BRIEF",
            title: "Jaguar Land Rover to pause production until next week – at least",
            author: "TechCrunch Events · 10 hours ago",
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col gap-8">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <h1 className="text-green-700 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        In Brief
                    </h1>
                    <button
                        className="px-5 py-2 sm:px-6 sm:py-3 flex cursor-pointer items-center gap-2 border-2 border-green-600 text-sm sm:text-base md:text-lg rounded-full text-green-900
                       bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat 
                       transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
                    >
                        See More <FiArrowUpRight />
                    </button>
                </div>

                {/* News List Section */}
                <div className="flex flex-col divide-y divide-gray-200">
                    {newsData.map((news, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row gap-4 py-4"
                        >
                            {/* Left Image */}
                            <div className="w-full sm:w-40 h-48 sm:h-28 flex-shrink-0 overflow-hidden rounded-md">
                                <img
                                    src={news.img}
                                    alt="news"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="flex flex-col justify-center text-black">
                                <p className="text-green-600 text-xs sm:text-sm font-semibold uppercase mb-1">
                                    {news.category}
                                </p>
                                <h2 className="font-bold flex items-center gap-1 text-base sm:text-lg md:text-xl hover:underline cursor-pointer leading-snug">
                                    <span className='bg-green-500 text-white'><GiGothicCross /></span>
                                    {news.title}
                                </h2>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">{news.author}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default InBrief;
