import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaMastodon } from "react-icons/fa";
import { PiButterflyBold } from "react-icons/pi";
import { TbBrandThreads } from "react-icons/tb";
import logo from "../assets/Screenshot_2025-09-23_195230-removebg-preview.png";

const Footer = () => {
    return (
        <footer className="bg-[#1d211f] text-gray-300 mt-20 px-6 md:px-12 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Main Grid: Left + Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Section */}
                    <div className="flex flex-col items-start">
                        <img src={logo} alt="Tech Logo" className="w-20 mb-6" />

                        {/* Social icons */}
                        <div className="flex flex-wrap gap-4 text-white">
                            <FaXTwitter className="cursor-pointer  text-3xl hover:text-green-400 transition" />
                            <FaLinkedin className="cursor-pointer text-3xl hover:text-green-400 transition" />
                            <FaFacebook className="cursor-pointer  text-3xl hover:text-green-400 transition" />
                            <FaInstagram className="cursor-pointer text-3xl hover:text-green-400 transition" />
                            <FaYoutube className="cursor-pointer text-3xl hover:text-green-400 transition" />
                            <FaMastodon className="cursor-pointer text-3xl hover:text-green-400 transition" />
                            <TbBrandThreads className="cursor-pointer text-3xl hover:text-green-400 transition" />
                            <PiButterflyBold className="cursor-pointer rounded-full  text-3xl hover:text-green-400 transition" />
                        </div>

                    </div>

                    {/* Right Section → 3 columns of links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Links col-1 */}
                        <div className="flex flex-col space-y-3 text-sm md:text-base">
                            <a href="#" className="hover:text-white hover:underline">TechCrunch</a>
                            <a href="#" className="hover:text-white hover:underline">Staff</a>
                            <a href="#" className="hover:text-white hover:underline">Contact Us</a>
                            <a href="#" className="hover:text-white hover:underline">Advertise</a>
                            <a href="#" className="hover:text-white hover:underline">Crunchboard Jobs</a>
                            <a href="#" className="hover:text-white hover:underline">Site Map</a>
                        </div>

                        {/* Links col-2 */}
                        <div className="flex flex-col space-y-3 text-sm md:text-base">
                            <a href="#" className="hover:text-white hover:underline">Terms of Service</a>
                            <a href="#" className="hover:text-white hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:text-white hover:underline">RSS Terms of Use</a>
                        </div>

                        {/* Links col-3 */}
                        <div className="flex flex-col space-y-3 text-sm md:text-base">
                            <a href="#" className="hover:text-white hover:underline">H1-B Visa</a>
                            <a href="#" className="hover:text-white hover:underline">MBAs</a>
                            <a href="#" className="hover:text-white hover:underline">Stubhub</a>
                            <a href="#" className="hover:text-white hover:underline">Bluesky</a>
                            <a href="#" className="hover:text-white hover:underline">TechCrunch Disrupt</a>
                            <a href="#" className="hover:text-white hover:underline">Tech Layoffs</a>
                            <a href="#" className="hover:text-white hover:underline">ChatGPT</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section (always at bottom) */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-xs md:text-sm text-gray-400 text-center md:text-left">
                    © 2025 TechCrunch Media LLC.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
