import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  const handleClickBookSell = () => {
    navigate("/sell");
  };
  return (
    <div>
      <section className="bg-black text-white py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary">
          Ready to Give Your Books a New Home?
        </h2>
        <p className="max-w-xl mx-auto mb-8 font-basefont text-lg">
          Join thousands of readers buying and selling second-hand books. It's
          simple, sustainable, and rewarding.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={handleClickBookSell}
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white hover:border hover:border-white  transition font-basefont"
          >
            Sell a Book
          </a>
          <a
            href="/browse"
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition font-basefont"
          >
            Browse Books
          </a>
        </div>
      </section>
    </div>
  );
}
