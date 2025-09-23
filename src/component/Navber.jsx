import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Screenshot_2025-09-23_195230-removebg-preview.png";

const Navbar = () => {
    const [showLogo, setShowLogo] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowLogo(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        "Latest",
        "Startups",
        "Venture",
        "Apple",
        "Security",
        "AI",
        "Apps",
        "Disrupt 2025",
        "Events",
        "Podcasts",
        "Newsletters",
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#181C18] text-white shadow-md z-50">
            <div className="flex items-center justify-between px-6 py-4 relative">
                {/* Left: Logo + Text */}
                <div className="flex items-center space-x-2">
                    {/* Mobile: always show logo */}
                    <img src={logo} alt="TechCrunch Logo" className="h-6 w-10 md:hidden" />

                    {/* Desktop: logo+text only after scroll */}
                    <div
                        className={`hidden md:flex items-center space-x-2 transition-all duration-500 ${showLogo ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                    >
                        <img src={logo} alt="TechCrunch Logo" className="h-6 w-10" />
                        <h1 className="text-3xl font-bold">TechCrunch</h1>
                    </div>
                </div>

                {/* Center: NavLinks or Search Input */}
                <div className="flex-1 flex items-center relative">
                    {showSearch ? (
                        <form
                            className="relative w-full max-w-[80%] md:mx-auto"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full border-b-2 border-white bg-transparent text-white placeholder-white py-2 pr-20 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 py-1 rounded-md font-semibold"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div
                            className={`hidden md:flex space-x-5 transition-all duration-500 transform ${showLogo ? "translate-x-16" : "translate-x-0"
                                }`}
                        >
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                                    className="hover:text-green-400 font-medium transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Search + Menu Icon (Desktop + Mobile) */}
                <div className="flex items-center space-x-4">
                    {showSearch ? (
                        <FiX
                            className="text-xl cursor-pointer h-10 w-10 flex items-center justify-center border border-amber-50 rounded-full p-2 transition-colors duration-300 hover:bg-white hover:text-black"
                            onClick={() => setShowSearch(false)}
                        />
                    ) : (
                        <FiSearch
                            className="text-xl cursor-pointer h-10 w-10 flex items-center justify-center border border-transparent rounded-full p-2 transition-colors duration-300 hover:border-amber-50"
                            onClick={() => setShowSearch(true)}
                        />
                    )}

                    {/* Menu Icon: always visible */}
                    <FiMenu
                        className="text-xl cursor-pointer h-10 w-10 flex items-center justify-center border border-transparent rounded-full p-2 transition-colors duration-300 hover:border-amber-50"
                        onClick={() => setIsMobileDrawerOpen(true)}
                    />
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full bg-[#181C18] z-50 transform transition-transform duration-300 ${isMobileDrawerOpen ? "translate-x-0" : "translate-x-full"
                    } w-1/2 md:hidden shadow-lg`}
            >
                <div className="flex justify-end p-4">
                    <FiX
                        className="text-2xl cursor-pointer"
                        onClick={() => setIsMobileDrawerOpen(false)}
                    />
                </div>
                <div className="flex flex-col space-y-4 px-6">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item.toLowerCase().replace(" ", "-")}`}
                            className="hover:text-green-400 font-medium transition-colors"
                            onClick={() => setIsMobileDrawerOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
