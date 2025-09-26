import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import banner1 from '../../assets/road banner1.webp';

const RoadDisrupt = () => {
    return (
        <div className="py-8">
            {/* Title + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between my-8 px-4 gap-4 sm:gap-6">
                <h1 className="text-green-700 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    The Road to Disrupt
                </h1>
                <button
                    className="px-6 py-3 flex items-center gap-2 border-2 cursor-pointer border-green-600 text-base sm:text-lg rounded-full text-green-900
          bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat
          transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
                >
                    See More <FiArrowUpRight />
                </button>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {/* Card 1 */}
                <div className="group relative overflow-hidden cursor-pointer h-[450px] sm:h-[550px] md:h-[650px] rounded-lg">
                    {/* Background Image */}
                    <div
                        style={{ backgroundImage: `url(${banner1})` }}
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    ></div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Text content */}
                    <div className="absolute bottom-6 left-4 right-4 z-10">
                        <p className="inline-block border-t-2 border-gray-300 text-white text-sm sm:text-base md:text-lg mb-2">
                            TECHCRUNCH DISRUPT 2025
                        </p>
                        <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white inline-block group-hover:underline underline-offset-4 decoration-2">
                            Less than 48 hours to grab your TechCrunch Disrupt 2025 ticket savings
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-300 mt-3">
                            TechCrunch Events - 17 hours ago
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group relative overflow-hidden cursor-pointer bg-white shadow h-[500px] sm:h-[600px] md:h-[650px] rounded-lg flex flex-col">
                    {/* Top Image Section */}
                    <div className="relative h-2/3 w-full overflow-hidden">
                        <img
                            src="https://picsum.photos/600/400?2"
                            alt="Article thumbnail"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Bottom Content Section */}
                    <div className="relative h-1/3 p-5 sm:p-6 flex flex-col justify-center space-y-3">
                        {/* Top Category with Border */}
                        <p className="text-sm font-medium text-green-600">
                            <span className="inline-block border-t border-gray-400 pt-1">
                                GOVERNMENT & POLICY
                            </span>
                        </p>

                        {/* Title with Hover Underline */}
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug inline-block group-hover:underline underline-offset-4 decoration-2">
                            Love, lies, and algorithms: Is AI really helping us find ‘the one’? Live at TechCrunch Disrupt 2025
                        </h2>

                        {/* Bottom Text */}
                        <p className="text-sm sm:text-base text-gray-600 group-hover:underline underline-offset-4 decoration-2 cursor-pointer">
                            TechCrunch Events - 18 hours ago
                        </p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 items-stretch">
                {/* Card 1 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
                    <p className="text-sm font-medium text-green-600 mb-3">
                        <span className="inline-block border-t border-gray-400">
                            CATEGORY
                        </span>
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                        What top VCs want from AI founders: Inside the investor lens with Jon McNeill, Aileen Lee,
                    </h2>
                    <p className="text-sm text-gray-600">
                        Short description text goes here
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
                    <p className="text-sm font-medium text-green-600 mb-3">
                        <span className="inline-block border-t border-gray-400">
                            GAMMING
                        </span>
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                        Mirror founder Brynn Putnam to unveil her gaming hardware startup at TechCrunch Disrupt 2025
                    </h2>
                    <p className="text-sm text-gray-600">
                        TechCrunch Events - 18 hours ago
                    </p>
                </div>
                {/* Card 3 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
                    <p className="text-sm font-medium text-green-600 mb-3">
                        <span className="inline-block border-t border-gray-400">
                            TECHCRUNCH DISRUPT 2025
                        </span>
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                        Vinod Khosla on AI, moonshots, and building enduring startups — all at TechCrunch Disrupt 2025
                    </h2>
                    <p className="text-sm text-gray-600">
                        Rebecca Bellan · 2 hours ago
                    </p>
                </div>

                {/* Card 4 */}
                <div >

                </div>
            </div>

            <div className="grid grid-cols-1 my-8 px-4 lg:grid-cols-6 h-20">
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

export default RoadDisrupt;
