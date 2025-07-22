import React from "react";
// import { button } from "@/components/ui/button";
import { BookOpen, Search, Star, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function Books() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
       <section className="w-full h-[45rem] flex bg-gradient-to-r from-[#FDEFF9] to-[#ECF2FF] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
              🌱 Eco-Friendly Reading
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Buy & Sell Secondhand Books with Ease
            </h1>

            <p className="text-gray-600 text-lg">
              Give stories a second life while saving money and reducing waste.
              Join the ReRead community today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => navigate("/books/all-books")}
                className="bg-black text-white py-2 px-5 rounded-lg"
              >
                📚 Browse Books
              </button>
              <button 
                variant="outline" onClick={() => navigate("/user/dashboard/upload-book")}
                className="border-2 border-black py-2 px-5 rounded-lg"
              >
                ➕ Sell a Book
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={assets.booksBg}
              // src={bgImage}
              alt="Books stack"
              className="max-w-xs w-60 sm:w-72 md:max-w-md drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Explore by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            "Fiction",
            "Academic",
            "Self-help",
            "Kids",
            "Competitive",
            "More",
          ].map((cat) => (
            <div
              key={cat}
              className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-center cursor-pointer"
            >
              <BookOpen className="mx-auto mb-2" />
              <p>{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Books */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Books of the Month
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/300x400"
                alt="Book"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Book Title {i + 1}</h3>
                <p className="text-sm text-gray-600">Author Name</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-green-600 font-semibold">₹199</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                    Available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why ReRead Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why Choose ReRead?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "💸", text: "Affordable Prices" },
            { icon: "🌱", text: "Eco-friendly" },
            { icon: "🚚", text: "Fast Delivery" },
            { icon: "👨‍🎓", text: "Student Network" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Sell */}
      <section className="bg-black text-white py-16 px-6 text-center flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Got Books? Sell in Minutes!</h2>
        <p className="mb-6">
          Turn your old books into cash easily and help others learn more.
        </p>
        <button className="flex rounded-full px-6 py-3 text-black bg-white hover:bg-gray-200">
          <Upload className="mr-2" size={18} /> Sell a Book
        </button>
      </section>

      {/* Footer */}
      <div className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        {/* © {new Date().getFullYear()} ReRead — Built with love for book lovers. */}
      </div>
    </div>
  );
}