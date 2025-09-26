import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

const Newsletters = () => {
    return (
        <div className="w-full bg-white">
            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Title + Button + Subtitle */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <h1 className="text-green-700 font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none">
                                Newsletters
                            </h1>
                            <button
                                className="px-6 py-3 flex items-center gap-2 border-2 cursor-pointer border-green-600 text-base sm:text-lg rounded-full text-green-900
                                bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat 
                                transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
                            >
                                See More <FiArrowUpRight />
                            </button>
                        </div>
                        <p className="text-base sm:text-lg font-medium text-gray-700 mt-2">
                            Subscribe for the industry’s biggest tech news
                        </p>
                    </div>
                    <div className="lg:col-span-1"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                    {/* Cards */}
                    <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="group bg-white cursor-pointer p-5 relative border border-gray-200 rounded-md transition">
                            <h2 className="font-bold text-lg mb-2">
                                TechCrunch <br /> Daily News
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Every weekday and Sunday, you can get the best of TechCrunch’s
                                coverage.
                            </p>
                            <button className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full border-green-700 border-2 text-green-700 text-2xl font-extrabold transition 
                        group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700">
                                <AiOutlinePlus />
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white cursor-pointer p-5 relative border border-gray-200 rounded-md transition">
                            <h2 className="font-bold text-lg mb-2">
                                Startups <br /> Weekly
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Startups are the core of TechCrunch, so get our best coverage
                                delivered weekly.
                            </p>
                            <button className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full border-green-700 border-2 text-green-700 text-2xl font-extrabold transition 
                        group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700">
                                <AiOutlinePlus />
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white cursor-pointer p-5 relative border border-gray-200 rounded-md transition">
                            <h2 className="font-bold text-lg mb-2">
                                TechCrunch <br /> Week in Review
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Get the best of our coverage, delivered to your inbox every
                                Saturday.
                            </p>
                            <button className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full border-green-700 border-2 text-green-700 text-2xl font-extrabold transition 
                        group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700">
                                <AiOutlinePlus />
                            </button>
                        </div>

                        {/* Card 4 */}
                        <div className="group bg-white cursor-pointer p-5 relative border border-gray-200 rounded-md transition">
                            <h2 className="font-bold text-lg mb-2">
                                TechCrunch <br /> Mobility
                            </h2>
                            <p className="text-gray-600 text-sm">
                                TechCrunch Mobility is your destination for transportation news
                                and insight.
                            </p>
                            <button className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full border-green-700 border-2 text-green-700 text-2xl font-extrabold transition 
                        group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700">
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>

                    {/* Subscribe Section */}
                    <div className="lg:col-span-2">
                        <p className="font-semibold text-gray-800 mb-2">
                            No newsletters selected.
                        </p>

                        {/* Input */}
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full border border-red-500 rounded-md px-3 py-2 text-sm mb-4 outline-none"
                        />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <button
                                disabled
                                className="bg-gray-200 text-gray-400 rounded-full px-8 py-2 text-sm font-medium cursor-not-allowed"
                            >
                                Subscribe
                            </button>
                            <p className="text-xs text-gray-600">
                                By submitting your email, you agree to our{" "}
                                <a href="#" className="text-green-700 underline">
                                    Terms
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-green-700 underline">
                                    Privacy Notice
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-6 h-20">
                <div className="lg:col-span-4 grid grid-rows-2">
                    <div className="grid grid-cols-2">
                        <div className="bg-blue-600"></div>
                        <div className="bg-blue-600"></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="bg-purple-300"></div>
                        <div></div>
                    </div>
                </div>
                <div className="lg:col-span-2"></div>
            </div>
        </div>
    );
};

export default Newsletters;
