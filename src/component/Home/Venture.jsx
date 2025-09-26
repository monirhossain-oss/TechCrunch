import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import img from '../../assets/21596646922_656ce9d531_k.webp';
import img1 from '../../assets/banner3.webp'
import img2 from '../../assets/banner4.webp'
import img3 from '../../assets/banner5.webp'
import img4 from '../../assets/banner6.webp'
import img5 from '../../assets/banner7.webp'
import img6 from '../../assets/banner8.webp'
import img7 from '../../assets/banner9.webp'

const Venture = () => {
    const cards = [
        {
            img: img1,
            smallTitle: "AI SUMMIT - 2025",
            mainTitle: "AI will reshape the world in 5 years",
            eventName: "TechCrunch Events • 5 minutes ago",
        },
        {
            img: img2,
            smallTitle: "HEALTH TECH",
            mainTitle: "New innovations in digital health care",
            eventName: "Health Summit • 15 minutes ago",
        },
        {
            img: img3,
            smallTitle: "STARTUP PITCH",
            mainTitle: "Top 10 startups to watch this year",
            eventName: "Startup Fest • 20 minutes ago",
        },
        {
            img: img4,
            smallTitle: "CLOUD WORLD",
            mainTitle: "The future of data storage and cloud security",
            eventName: "Cloud Expo • 30 minutes ago",
        },
        {
            img: img5,
            smallTitle: "SPACE TECH",
            mainTitle: "Private companies racing to the Moon",
            eventName: "SpaceCon • 45 minutes ago",
        },
        {
            img: img6,
            smallTitle: "FINTECH RISE",
            mainTitle: "How AI is changing global finance",
            eventName: "FinTech Summit • 1 hour ago",
        },
        {
            img: img7,
            smallTitle: "GREEN ENERGY",
            mainTitle: "Startups building the future of sustainability",
            eventName: "EcoCon • 2 hours ago",
        },
    ];

    return (
        <div className="bg-[#EEF519] py-10">
            {/* Title + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center mb-10 px-4 gap-4 sm:gap-6">
                <h1 className="text-green-700 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    Venture
                </h1>
                <button
                    className="px-6 py-3 flex items-center gap-2 border-2 border-green-600 text-base sm:text-lg rounded-full text-green-900
                     bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat
                     transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
                >
                    See More <FiArrowUpRight />
                </button>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 px-4">
                {/* Left Side (5/11) */}
                <div className="col-span-5 flex flex-col overflow-hidden h-full">
                    <img
                        src={img}
                        alt="TechCrunch Disrupt"
                        className="w-full h-80 sm:h-96 md:h-[28rem] object-cover"
                    />

                    <div className="p-6 flex flex-col flex-1 justify-between">
                        <div>
                            <p className="inline-block border-t-4 border-green-600 text-gray-700 text-sm sm:text-base font-semibold mb-3">
                                TECHCRUNCH DISRUPT - 2025
                            </p>
                            <h2
                                className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4
                                    hover:underline underline-offset-4 decoration-2 cursor-pointer"
                            >
                                Today is the last day to save up to $668 on TechCrunch Disrupt 2025 tickets
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-gray-900">
                            TechCrunch Events • 10 minutes ago
                        </p>
                    </div>
                    <div className="border-b"></div>
                </div>

                {/* Right Side (6/11) */}
                <div className="col-span-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-3 gap-4 border-b border-gray-800 pb-4 group"
                            >
                                {/* Left: Image */}
                                <div className="col-span-1">
                                    <img
                                        src={card.img}
                                        alt={card.smallTitle}
                                        className="w-24 h-24 object-cover"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="col-span-2 flex flex-col items-start">
                                    <p
                                        className="inline-block border-t border-green-600 text-xs sm:text-sm font-semibold text-gray-700 mb-1"
                                    >
                                        {card.smallTitle}
                                    </p>
                                    <h3
                                        className="text-base sm:text-lg font-bold text-gray-900
                                        group-hover:underline underline-offset-4 decoration-2 cursor-pointer"
                                    >
                                        {card.mainTitle}
                                    </h3>
                                </div>

                                {/* Bottom: Event Name (Full width) */}
                                <div className="col-span-3 mt-2">
                                    <p className="text-xs hover:underline sm:text-sm text-gray-800">
                                        {card.eventName}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Venture;
