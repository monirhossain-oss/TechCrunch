import React from "react";
import banner1 from "../../assets/Oakland-Ballers.webp";
import banner2 from "../../assets/GettyImages-1297856112.webp";
import banner3 from "../../assets/robots-love.webp";
import { Link } from "react-router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <div className="bg-green-700 p-6 grid grid-cols-2 gap-6 min-h-screen">
            {/* Left Half */}
            <div
                className="group relative w-full h-full overflow-hidden cursor-pointer"
            >
                {/* Background Image with zoom effect */}
                <div
                    style={{ backgroundImage: `url(${banner1})` }}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                ></div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Text content */}
                <div className="absolute bottom-24 left-4 right-4 z-10">
                    {/* Category */}
                    <p className="text-xs font-semibold text-gray-300 mb-2 tracking-wider">
                        GOVERNMENT & POLICY
                    </p>

                    {/* Title with underline on hover */}
                    <h2 className="relative text-2xl md:text-5xl font-extrabold text-white inline-block">
                        <span className="border-b-0 border-white transition-all duration-300 group-hover:border-b-4 pb-1">
                            Meta launches super PAC to fight AI regulation as state policies mount
                        </span>
                    </h2>

                    {/* Author */}
                    <p className="text-sm text-gray-300 mt-8">Rebecca Bellan · 5 hours ago</p>
                </div>
            </div>


            {/* Right Half */}
            <div className="grid grid-cols-2 gap-6">
                {/* Top Half → 2 images */}
                <div className="grid grid-rows-2 gap-6">
                    <div
                        className="group relative w-full h-96 overflow-hidden cursor-pointer"
                    >
                        {/* Background Image with zoom effect */}
                        <div
                            style={{ backgroundImage: `url(${banner2})` }}
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        ></div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        {/* Text content */}
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                            {/* Category */}
                            <p className="text-xs font-semibold text-gray-300 mb-2 tracking-wider">
                                GOVERNMENT & POLICY
                            </p>

                            {/* Title with underline on hover */}
                            <h2 className="relative text-xl md:text-2xl font-extrabold text-white inline-block">
                                <span className="border-b-0 border-white transition-all duration-300 group-hover:border-b-4 pb-1">
                                    Meta launches super PAC to fight AI regulation as state policies mount
                                </span>
                            </h2>

                            {/* Author */}
                            <p className="text-sm text-gray-300 mt-3">Rebecca Bellan · 5 hours ago</p>
                        </div>
                    </div>


                    <div
                        className="group relative w-full h-96 overflow-hidden cursor-pointer"
                    >
                        {/* Background Image with zoom effect */}
                        <div
                            style={{ backgroundImage: `url(${banner3})` }}
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        ></div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        {/* Text content */}
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                            {/* Category */}
                            <p className="text-xs font-semibold text-gray-300 mb-2 tracking-wider">
                                GOVERNMENT & POLICY
                            </p>

                            {/* Title with underline on hover */}
                            <h2 className="relative text-xl md:text-2xl font-extrabold text-white inline-block">
                                <span className="border-b-0 border-white transition-all duration-300 group-hover:border-b-4 pb-1">
                                    Meta launches super PAC to fight AI regulation as state policies mount
                                </span>
                            </h2>

                            {/* Author */}
                            <p className="text-sm text-gray-300 mt-3">Rebecca Bellan · 5 hours ago</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Half → Headlines + Card */}
                <div className="flex flex-col h-full bg-green-700 rounded-lg p-4 gap-8">
                    <h3 className="font-bold text-white text-3xl">Top Headlines</h3>

                    <div className="flex flex-col gap-2 text-white">
                        <Link className="font-bold hover:underline text-lg">
                            Oracle promotes two presidents to co-CEO role
                        </Link>
                        <Link className="font-bold hover:underline text-lg">
                            Blue Origin wins NASA deal to ferry VIPER rover to lunar south pole
                        </Link>
                        <Link className="font-bold hover:underline text-lg">
                            Nvidia plans to invest up to $100 billion in O text-lgpenAI.
                        </Link>
                        <Link className="font-bold hover:underline text-lg">
                            5 days left to save up to $668 on your TechCrunch Disrupt 2025 pass
                        </Link>
                        <Link className="font-bold hover:underline text-lg">
                            Bluesky says it’s getting more aggressive about moderation and enforcement
                        </Link>
                    </div>

                    {/* Proxy Card */}
                    <Link>
                        <div className="border-8 border-green-300 shadow-lg p-6 text-white mt-4">
                            <h2 className="text-3xl font-extrabold text-cyan-400 mb-2">
                                #1 Proxy in Pricing
                            </h2>
                            <p className="text-sm text-gray-300 mb-6">
                                Get Instant Access to 6M+ Market Leading Residential IPs from
                                127+ countries.
                            </p>
                            <div className="flex justify-end">
                                <button className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center cursor-pointer hover:bg-cyan-500 transition-colors duration-300">
                                    <span className="text-2xl font-bold text-black">
                                        <MdOutlineKeyboardArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
