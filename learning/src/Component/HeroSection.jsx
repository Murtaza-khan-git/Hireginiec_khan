import React from 'react'
// import logo from '../images/aa.jpg'
import hire from '../images/hiring.png'
import lady from '../images/lady.webp'
import shake from '../images/shake.webp'
function HeroSection() {
    return (
      <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto flex items-start px-4 gap-x-8">
        {/* Left Section */}
        <div className="relative flex items-start gap-x-4">
          {/* Left Image */}
          <img
            src={lady}
            alt="Left Image"
            className="w-64 h-80 object-cover rounded-lg shadow-md "
          />

          {/* Right Image (Handshake) */}
          <img
            src={shake}
            alt="Bottom Image"
            className="w-60 h-70 object-cover rounded-lg shadow-md gap-16 mt-55"
          />

          {/* Megaphone Icon */}
          <img
            src={hire}
            alt="Megaphone Icon"
            className="absolute -bottom-10 -left-10 w-30 h-35"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1">
          {/* Title */}
          <h2 className="text-blue-600 font-bold text-xl md:text-2xl">
            INDIA'S LEADING
          </h2>
          <h1 className="text-gray-900 font-extrabold text-3xl md:text-4xl mt-1">
            TALENT SOLUTIONS FIRM
          </h1>

          {/* Stats Cards */}
          <div className="flex gap-4 mt-4">
            {/* Card 1 */}
            <div className="bg-black text-white px-6 py-4 rounded-md text-center">
              <p className="text-2xl font-bold">19</p>
              <p className="text-sm">Years of experience</p>
            </div>
            {/* Card 2 */}
            <div className="bg-blue-500 text-white px-6 py-4 rounded-md text-center">
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-sm">Happy customers</p>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3 className="text-gray-400 uppercase text-sm font-semibold">
              HIRING SOLUTION
            </h3>
            <h2 className="text-gray-900 font-bold text-2xl mt-1">
              AS UNIQUE AS YOUR BUSINESS
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              As India's premier talent solutions firm, we offer bespoke
              solutions to elevate your workforce. We're more than just a
              staffing agency; we're your strategic partner in talent
              acquisition. Our global network, cutting-edge technology, and
              focus on future skills ensure that your team is always ahead of
              the curve. With a proven track record of delivering exceptional
              results, Zyoin Group is the trusted choice for businesses seeking
              top talent and a competitive edge.
            </p>

            {/* Button */}
            <button className="mt-4 px-6 py-2 border border-black text-black rounded-lg hover:bg-gray-100 transition">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HeroSection
