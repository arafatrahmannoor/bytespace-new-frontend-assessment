import React from "react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "UI/UX Design",
];

const courseData = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    price: "$25/lifetime",
    rating: 4.5,
    students: "2k+",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    price: "$25/lifetime",
    rating: 4.5,
    students: "2k+",
    level: "Beginner",
  },
  {
    id: 3,
    title: "The Power of Big Data",
    price: "$25/lifetime",
    rating: 4.5,
    students: "2k+",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Balancing Productivity",
    price: "$25/lifetime",
    rating: 4.5,
    students: "2k+",
    level: "Beginner",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    price: "$25/lifetime",
    rating: 4.5,
    students: "2k+",
    level: "Beginner",
  },
  {
    id: 6,
    title: "From Idea to Startup",
    price: "$25/lifetime",
    rating: 4.5,
    students: "2k+",
    level: "Beginner",
  },
];

export default function Courses() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          At ByteSpace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses...
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
              cat === "Featured"
                ? "bg-lime-400 border-lime-400 text-gray-900"
                : "bg-white border-gray-200 text-gray-600 hover:border-lime-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow p-4"
          >
            {/* Image Placeholder */}
            <div className="bg-gray-200 h-48 rounded-xl mb-4 relative">
              {/* Overlay elements like '17 Lessons' can go here using absolute positioning */}
              <div className="absolute bottom-2 left-2 flex gap-2">
                <span className="bg-white/80 backdrop-blur-sm px-2 py-1 text-xs rounded-md">
                  17 Lessons
                </span>
                <span className="bg-white/80 backdrop-blur-sm px-2 py-1 text-xs rounded-md">
                  2 hours 16 mins
                </span>
              </div>
            </div>

            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{course.title}</h3>
              <div className="flex items-center text-sm font-bold text-gray-700">
                {course.rating} <span className="text-yellow-400 ml-1">★</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-4">by purepearl studio</p>

            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <div className="flex gap-2">
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-md">
                  📊 {course.level}
                </span>
              </div>
              <div className="text-lg font-bold">
                {course.price.split("/")[0]}
                <span className="text-xs text-gray-400 font-normal">
                  /{course.price.split("/")[1]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
