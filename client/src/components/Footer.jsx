import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Brand */}
    <div>
      <h3 className="text-white text-xl md:text-2xl font-bold mb-4 font-display">ReRead</h3>
      <p className="text-sm md:text-base font-montserrat">
        Buy and sell second-hand books with ease.  
        Sustainable, affordable, and made for readers.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-white font-semibold mb-3 text-lg font-display">Quick Links</h4>
      <ul className="space-y-2 text-sm md:text-base font-montserrat">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/browse" className="hover:text-white">Browse Books</a></li>
        <li><a href="/sell" className="hover:text-white">Sell a Book</a></li>
        <li><a href="/about" className="hover:text-white">About Us</a></li>
      </ul>
    </div>

    {/* Genres */}
    <div>
      <h4 className="text-white font-semibold mb-3 text-lg font-display">Genres</h4>
      <ul className="space-y-2 text-sm md:text-base font-montserrat">
        <li><a href="/genre/fiction" className="hover:text-white">Fiction</a></li>
        <li><a href="/genre/non-fiction" className="hover:text-white">Non-fiction</a></li>
        <li><a href="/genre/textbooks" className="hover:text-white">Textbooks</a></li>
        <li><a href="/genre/competitive" className="hover:text-white">Competitive Exams</a></li>
      </ul>
    </div>

    {/* Connect */}
    <div>
      <h4 className="text-white font-semibold mb-3 text-lg font-display">Connect</h4>
      <ul className="space-y-2 text-sm md:text-base font-montserrat">
        <li><a href="mailto:support@reread.in" className="hover:text-white">support@reread.in</a></li>
        <li><a href="/" className="hover:text-white">Instagram</a></li>
        <li><a href="/" className="hover:text-white">Twitter / X</a></li>
        <li><a href="/" className="hover:text-white">LinkedIn</a></li>
      </ul>
    </div>

  </div>

  {/* Bottom line */}
  <div className="text-center text-sm md:text-base text-gray-500 mt-10 font-montserrat">
    © {new Date().getFullYear()} ReRead. All rights reserved.
  </div>
</footer>

    </div>
  )
}