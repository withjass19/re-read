import React from "react";

export default function WhyUs() {
  return (
    <div className="py-5">
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 font-primary">
          Why Choose ReRead?
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10 font-basefont">
          ReRead is designed for book lovers who believe in affordability,
          sustainability, and community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 max-w-sm mx-auto">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2 font-primary">
              Affordable Reads
            </h3>
            <p className="text-gray-500 text-sm font-basefont">
              Get your favorite books at up to 70% lower prices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 max-w-sm mx-auto">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2 font-primary">
              Eco-Friendly
            </h3>
            <p className="text-gray-500 text-sm font-basefont">
              Save trees by giving books a second life.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 max-w-sm mx-auto">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2 font-primary">
              Trusted Community
            </h3>
            <p className="text-gray-500 text-sm font-basefont">
              Verified users, safe buying and selling process.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}