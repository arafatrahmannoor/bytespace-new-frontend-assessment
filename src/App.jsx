import React from "react";
import Hero from "./components/Hero";
import Courses from "./components/Courses";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Hero />

      {/* Logo Section */}
      <section className="bg-gray-100 py-8 border-b">
        <div className="max-w-7xl mx-auto flex justify-center gap-12 flex-wrap opacity-50">
          <span className="font-bold text-xl text-gray-500">Logoipsum</span>
          <span className="font-bold text-xl text-gray-500">Logoipsum</span>
          <span className="font-bold text-xl text-gray-500">Logoipsum</span>
          <span className="font-bold text-xl text-gray-500">Logoipsum</span>
        </div>
      </section>

      <Courses />
    </div>
  );
}
