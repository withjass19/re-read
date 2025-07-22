import React from "react";
// import MediaData from "../../../../Data/Data";
// import media from "../../../../Data/Data";
// import vid from "../../../../asset/videos/NewVideo_40percentOverlay.mp4";

export default function HeroSection() {

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src='https://res.cloudinary.com/dci10aqu3/video/upload/v1752103709/newbackground_bjqktk.mp4'
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content over video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-white md:w-1/2 w-[80%] flex flex-col justify-center items-center text-center gap-4">
          <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold font-primary">The best place to Sell & Buy Second-hand books.</h1>
          <p className="font-basefont text-xs sm:text-sm md:text-base lg:text-lg">Welcome to ReRead, where bookwors unite to share beloved stories. Sell or buy second-hand books effortlessly and indulge in affordable reading experiences!</p>
          <button className="w-1/3 h-10 flex justify-center items-center border-2 border-white px-6 sm:py-1 py-0.5 gap-1 rounded-full font-basefont text-sm font-medium">
            <span className="hidden lg:block">Find</span>
            <span className="block">More</span>
            <span className="hidden md:block">Books</span>
          </button>
        </div>
      </div>

      {/* Optional Overlay (dark layer over video) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black0 bg-black/20 z-0"></div>
    </div>
  );
}
