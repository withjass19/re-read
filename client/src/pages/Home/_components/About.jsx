import React from "react";
import { assets } from "../../../assets/assets";
// import aboutImage from "../../../../asset/images/about.jpg"

export default function About() {
  return (
    <div className="w-full flex justify-center items-center py-28 px-4">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row rounded-2xl overflow-hidden shadow-lg">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex-[1] md:flex-[0.5] bg-yellow-400 p-6 sm:p-10 flex flex-col justify-between gap-3">
          
          {/* About Heading */}
          <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-primary font-bold">
            About
          </h2>

          {/* Paragraph */}
          <p className="text-black font-basefont text-sm sm:text-base md:text-lg leading-relaxed">
            ReRead is built for readers who believe in giving books a second life.
            Whether you're a student with unused textbooks or an avid reader rediscovering space on your shelf,
            ReRead helps you connect with fellow book lovers to buy and sell preloved books affordably.
            <br /><br />
            Join the ReRead movement and rediscover the magic of your library — one page at a time.
            <br />
            <br />
            <span className="italic block mt-2 text-xl font-medium">
              "Because every book deserves a second reader."
            </span>
          </p>

          {/* Button */}
          <button className="bg-black hover:bg-black/50 text-white py-2 px-6 rounded-full font-medium text-sm w-fit mt-4">
            More about us
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-[2] md:flex-[0.5] h-60 sm:h-80 md:h-auto">
          <img
            src={assets.homeAbout}
            alt="About ReRead"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}