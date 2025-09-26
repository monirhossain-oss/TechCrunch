import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5 (1).jpg";
import img6 from "../../assets/img6(2).jpg";
import img7 from "../../assets/img5 (3).jpg";
import img8 from "../../assets/img5 (4).jpg";
import img9 from "../../assets/img5 (5).jpg";
import img10 from "../../assets/img5 (6).jpg";

const Storylines = () => {
    const stories = [
        {
            category: "AI",
            title:
                "SXSW 2025 live coverage: Health tips from Bryan Johnson, concerns about Elon…",
            img: img1,
            count: "36 Stories",
            date: "Mar 7, 2025",
        },
        {
            category: "ENTERPRISE",
            title:
                "Alphabet earnings live updates: AI, Gemini 2.0, Google Cloud, and more",
            img: img2,
            count: "12 Stories",
            date: "Feb 4, 2025",
        },
        {
            category: "TRANSPORTATION",
            title:
                "Tesla earnings live updates: Promising ‘return to growth’ and cheaper cars",
            img: img3,
            count: "35 Stories",
            date: "Jan 29, 2025",
        },
        {
            category: "HARDWARE",
            title:
                "Samsung Unpacked 2025 live updates: Galaxy S25, new AI features, and more",
            img: img4,
            count: "8 Stories",
            date: "Jan 22, 2025",
        },
        {
            category: "FEATURED",
            title:
                "Nvidia GTC 2025: Blackwell Ultra, partnerships, and personal AI revolution",
            img: img5,
            count: "15 Stories",
            date: "Mar 17, 2025",
        },
        {
            category: "STARTUPS",
            title: "10 promising startups to watch in 2025",
            img: img6,
            count: "20 Stories",
            date: "Feb 14, 2025",
        },
        {
            category: "FINTECH",
            title: "How AI is transforming the fintech landscape globally",
            img: img7,
            count: "18 Stories",
            date: "Jan 19, 2025",
        },
        {
            category: "SPACE",
            title: "SpaceX prepares for next Starship launch with major upgrades",
            img: img8,
            count: "25 Stories",
            date: "Mar 2, 2025",
        },
        {
            category: "CLIMATE",
            title: "GreenTech 2025: Innovations in clean energy and sustainability",
            img: img9,
            count: "14 Stories",
            date: "Feb 21, 2025",
        },
        {
            category: "CRYPTO",
            title: "Bitcoin hits new milestone as regulations tighten worldwide",
            img: img10,
            count: "22 Stories",
            date: "Feb 10, 2025",
        },
    ];

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(stories.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const visibleStories = stories.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () =>
        currentPage < totalPages - 1 && setCurrentPage((p) => p + 1);
    const handlePrev = () =>
        currentPage > 0 && setCurrentPage((p) => p - 1);
    return (
        <section className="bg-[#1c1f1d] text-white px-4 md:px-8 py-12">
            {/* Header */}
            <div className="mb-8">
                {/* Title + Button side by side */}
                <div className="flex items-center gap-4 flex-wrap">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                        Storylines
                    </h1>
                    <button
                        className="px-6 py-3 flex items-center gap-2 border-2 cursor-pointer border-green-600 
                 text-base sm:text-lg rounded-full 
                 bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_100%] bg-left bg-no-repeat 
                 transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
                    >
                        See More <FiArrowUpRight />
                    </button>
                </div>

                {/* Subtitle always under title */}
                <p className="text-gray-400 font-medium text-lg sm:text-xl md:text-2xl mt-4">
                    Catch up on trending topics
                </p>
            </div>


            {/* Cards */}
            <div className="relative">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500 ease-in-out"
                    key={currentPage}
                >
                    {visibleStories.map((story, index) => (
                        <div
                            key={index}
                            className="relative h-[260px] sm:h-[280px] md:h-[300px] overflow-hidden group rounded-lg"
                        >
                            {/* Image */}
                            <img
                                src={story.img}
                                alt={story.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

                            {/* Content */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-xs font-semibold uppercase text-gray-300 mb-1">
                                    {story.category}
                                </p>
                                <div className="relative">
                                    <h2 className="font-bold text-base sm:text-lg leading-snug">
                                        {story.title}
                                    </h2>
                                    <span
                                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 
                    group-hover:w-full transition-all duration-500"
                                    />
                                </div>
                                <p className="text-gray-400 text-xs sm:text-sm mt-2">
                                    {story.count} · {story.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-6 flex-wrap">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className={`px-4 py-2 cursor-pointer rounded-full border text-sm sm:text-base ${currentPage === 0
                            ? "border-gray-600 text-gray-600"
                            : "border-green-600 text-green-500 hover:bg-green-600 hover:text-white"
                            }`}
                    >
                        ← Prev
                    </button>
                    <span className="text-gray-400 text-sm sm:text-base">
                        Page {currentPage + 1} of {totalPages}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                        className={`px-4 py-2 rounded-full cursor-pointer border text-sm sm:text-base ${currentPage === totalPages - 1
                            ? "border-gray-600 text-gray-600"
                            : "border-green-600 text-green-500 hover:bg-green-600 hover:text-white"
                            }`}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Storylines;