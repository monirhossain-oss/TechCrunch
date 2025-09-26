import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import img1 from '../../assets/Equity-2024-2.webp';
import img2 from '../../assets/strictlyvc-download-podcast-art.webp';

const Podcasts = () => {
    const cards = [
        {
            img: img1,
            title: "Startup Alpha",
            description: "Innovating in AI and robotics.",
            episodes: "15 Episodes",
            updated: "Updated: Sep 26, 2025",
        },
        {
            img: img2,
            title: "Health Beta",
            description: "Revolutionizing healthcare with tech.",
            episodes: "8 Episodes",
            updated: "Updated: Sep 20, 2025",
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 py-8">
            {/* Title + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center mb-8 gap-4 sm:gap-6">
                <h1 className="text-green-700 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Podcasts
                </h1>
                <button
                    className="px-5 py-2 sm:px-6 sm:py-3 cursor-pointer flex items-center gap-2 border-2 border-green-600 text-sm sm:text-base md:text-lg rounded-full text-green-900
                     bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat
                     transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
                >
                    See More <FiArrowUpRight />
                </button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* Left Side (2 cols, 2 cards) */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ">
                    {cards.slice(0, 2).map((card, idx) => (
                        <div
                            key={idx}
                            className="hover:shadow-lg p-2 transition overflow-hidden"
                        >
                            {/* Image Wrapper */}
                            <div className="w-full h-52 sm:h-64 md:h-72 overflow-hidden mb-4 sm:mb-6">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                {card.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                {card.description}
                            </p>
                            <p className="text-sm sm:text-base flex items-center gap-2 font-semibold text-green-700 mb-2">
                                <MdOutlineLibraryBooks /> {card.episodes}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                                {card.updated}
                            </p>
                            <button className="px-4 py-2 sm:px-5 sm:py-2 flex items-center gap-2 underline hover:no-underline cursor-pointer rounded-md text-sm sm:text-base md:text-lg font-medium">
                                Explore All{" "}
                                <FiArrowUpRight className="text-green-600 text-lg sm:text-xl" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Right Side (future 2 cols content) */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                </div>
            </div>
        </div>
    );
};

export default Podcasts;
