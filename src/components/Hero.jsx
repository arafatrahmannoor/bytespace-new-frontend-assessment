import React from "react";

export default function Hero() {
  return (
    <div className="bg-blue-600 w-full min-h-[600px] relative overflow-hidden">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 md:px-8 text-white relative z-10">
        <div className="text-2xl font-bold flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-lime-400 rounded-md"></div>
          ByteSpace
        </div>

        <ul className="hidden md:flex gap-8 text-sm">
          <li className="cursor-pointer hover:text-lime-400">Home</li>
          <li className="cursor-pointer hover:text-lime-400">Courses</li>
          <li className="cursor-pointer hover:text-lime-400">Creators</li>
        </ul>

        <div className="flex items-center gap-4 text-sm">
          <button className="hover:text-lime-400">Sign In</button>
          <button className="hover:text-lime-400">Join Us</button>
          {/* Cart Icon */}
          <svg
            className="w-5 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-24 px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="text-blue-200 mb-10">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center max-w-2xl mx-auto">
          <div className="flex w-full bg-white rounded-full p-2 shadow-lg">
            <div className="flex items-center pl-4 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full py-3 px-4 outline-none rounded-l-full text-gray-700"
            />
            <button className="bg-lime-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-lime-500 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
