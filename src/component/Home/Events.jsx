import { FiArrowUpRight } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import playground from '../../assets/playground-logo.webp'

const Events = () => {
    return (
        <div>
            <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
                {/* Main Grid: responsive */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left Side (3 cols on md+) */}
                    <div className="md:col-span-3 space-y-10 sm:space-y-12">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-green-700 leading-tight">
                                Upcoming Events
                            </h1>
                            <button
                                className="px-6 py-3 flex items-center gap-2 border-2 cursor-pointer border-green-600 
                           text-sm sm:text-base md:text-lg rounded-full 
                           bg-gradient-to-r from-green-900 to-green-900 bg-[length:0%_100%] bg-left bg-no-repeat
                           transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
                            >
                                See More <FiArrowUpRight />
                            </button>
                        </div>

                        {/* Event 1 */}
                        <div className="border-b pb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {/* Left side: Title + Info */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-semibold text-black">
                                        TechCrunch Disrupt 2025
                                    </h2>
                                    <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 text-gray-600 text-sm sm:text-base">
                                        <span className="flex items-center gap-2">
                                            <FaRegBuilding /> San Francisco, CA
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MdDateRange /> October 27 – 29, 2025
                                        </span>
                                    </div>
                                </div>

                                {/* Right side: Buttons + Text */}
                                <div className="flex flex-col items-start md:items-end">
                                    <div className="flex flex-wrap gap-3 sm:gap-4">
                                        <button className="bg-green-700 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-green-900 transition text-sm sm:text-base">
                                            Register Now
                                        </button>
                                        <button className="border border-green-700 text-green-700 px-5 sm:px-6 py-2 rounded-full hover:bg-green-900 hover:text-white transition text-sm sm:text-base">
                                            Book Exhibit Table
                                        </button>
                                    </div>
                                    <p className="text-red-600 text-xs sm:text-sm mt-2 md:text-right">
                                        Last day to save up to $668 is Sept 26!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="border-b pb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {/* Left side: Title + Info */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-semibold text-black">
                                        StrictlyVC Palo Alto
                                    </h2>
                                    <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 text-gray-600 text-sm sm:text-base">
                                        <span className="flex items-center gap-2">
                                            <FaRegBuilding /> Palo Alto, CA
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MdDateRange /> December 3, 2025
                                        </span>
                                    </div>

                                    {/* Presented by */}
                                    <p className="text-gray-600 text-xs sm:text-sm mt-3 flex items-center gap-2">
                                        <span className="font-medium">Presented by</span>
                                        <img
                                            src={playground}
                                            alt="playground"
                                            className="h-5 sm:h-6 w-auto object-contain"
                                        />
                                    </p>

                                </div>

                                {/* Right side: Buttons + Text */}
                                <div className="flex flex-col items-start md:items-end">
                                    <button className="bg-green-700 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-green-800 transition text-sm sm:text-base">
                                        Get on Waitlist
                                    </button>
                                    <p className="text-red-600 text-xs sm:text-sm mt-2 md:text-right">
                                        Get on waitlist to get exclusive early access to limited
                                        tickets!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (1 col - Sidebar content) */}
                    <div className="md:col-span-1 flex flex-col justify-between">
                        <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                                Featured Event
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600">
                                Don’t miss our exclusive networking night in{" "}
                                <span className="font-medium">New York</span> this November!
                            </p>
                            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-xs sm:text-sm">
                                Learn More <FiArrowUpRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pl-4">
                {/* Bottom Blue Bar */}
                <div className="grid grid-cols-3 border-t mt-6">
                    <div className="col-span-2"></div>
                    <div className="flex flex-col justify-end">
                        <div className="h-10 sm:h-14 w-full bg-blue-600"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
