import React from "react";
import HeroSection from "./_components/HeroSection";
import HowWorks from "./_components/HowWorks";
import WhyUs from "./_components/WhyUs";
import CTA from "./_components/CTA";
import About from "./_components/About";
import BooksOfTheMonth from "./_components/BooksOfTheMonth";

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <HowWorks/>
        {/* Books */}
        <BooksOfTheMonth/>
        <WhyUs/>
        <CTA/>
        <About/>
    </div>
  );
};

export default Home;