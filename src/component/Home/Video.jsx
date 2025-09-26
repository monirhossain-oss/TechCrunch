import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import banner1 from "../../assets/digital-blue-hud-interface-global-concept.jpg";

const Video = () => {
    const cards = [
        { title: "Chipiron’s big idea: rethinking MRI access, not replacing old…", date: "2 days ago" },
        { title: "Meta’s AR ambitions meet reality, and California gets serious…", date: "Sep 19, 2025" },
        { title: "Apple’s new Center Stage Camera always keeps you in frame", date: "Sep 9, 2025" },
        { title: "iPhone Air is Apple’s thinnest, lightest iPhone yet", date: "Sep 9, 2025" },
        { title: "OpenAI launches new AI tools for developers worldwide", date: "Sep 7, 2025" },
        { title: "Google reveals Android 16 with advanced AI features", date: "Sep 5, 2025" },
        { title: "SpaceX completes first tourist trip to the Moon", date: "Sep 3, 2025" },
        { title: "Amazon introduces drone delivery in 50 new cities", date: "Sep 1, 2025" },
        { title: "Microsoft debuts Windows 13 with AI-first design", date: "Aug 28, 2025" },
        { title: "Netflix to launch interactive 3D streaming experience", date: "Aug 25, 2025" },
    ];

    return (
        <div>
            {/* Title + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center mb-6 px-4 gap-4 sm:gap-6">
                <h1 className="text-green-700 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    Video
                </h1>
                <button
                    className="px-6 py-3 flex items-center gap-2 border-2 border-green-600 text-base sm:text-lg rounded-full text-green-900
                     bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat
                     transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
                >
                    See More <FiArrowUpRight />
                </button>
            </div>

            {/* Banner Section */}
            <div
                className="relative w-full h-[600px] sm:h-[700px] lg:h-[750px] bg-cover bg-center"
                style={{ backgroundImage: `url(${banner1})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start justify-start h-full px-4 sm:px-8 md:px-12 text-left max-w-2xl pt-6 sm:pt-10">
                    <p className="inline-block border-t-2 border-gray-300 text-white text-xs sm:text-sm md:text-base mb-2">
                        AI
                    </p>

                    <h1
                        className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 
                       transition-all duration-300 hover:text-green-600 
                       hover:underline underline-offset-4 decoration-2 cursor-pointer"
                    >
                        Meta's AR ambitions meet reality, and California gets serious about
                        AI safety ... again
                    </h1>

                    <div className="border-l-2 border-gray-300 pl-3 sm:pl-4">
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg">
                            Our Equity podcast is now on video! You can now catch Kirsten
                            Korosec, Maxwell Zeff and Anthony Ha every Friday as they break
                            down the latest news and biggest deals. <br />
                            <br />
                            September 19, 2025
                        </p>
                    </div>
                </div>

                {/* More From Section */}
                <div className="absolute -bottom-8 right-0 w-full lg:w-11/12 z-20">
                    <div className="bg-black/90 text-white px-4 sm:px-6 py-4 sm:py-6">
                        <div className="flex flex-col sm:flex-row">
                            {/* Left Title */}
                            <div className="flex-shrink-0 w-full sm:w-48 pr-0 sm:pr-6 mb-4 sm:mb-0">
                                <h2 className="text-lg sm:text-xl font-bold">More From:</h2>
                            </div>

                            {/* Scrollable Cards */}
                            <div className="flex-1 overflow-x-auto">
                                <div className="flex gap-4 sm:gap-6 pb-4 min-w-max">
                                    {cards.map((card, idx) => (
                                        <div
                                            key={idx}
                                            className="w-40 sm:w-56 md:w-64 flex-shrink-0 border-r border-gray-700 pr-4 sm:pr-6"
                                        >
                                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                                                {card.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-400">
                                                {card.date}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Green bar */}
                    <div className="h-6 sm:h-8 w-full bg-green-600"></div>
                </div>
            </div>
        </div>
    );
};

export default Video;
