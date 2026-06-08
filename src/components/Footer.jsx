import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-300">Buy</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#buy" className="hover:text-white transition-colors">Search Trucks</a></li>
              <li><a href="#buy" className="hover:text-white transition-colors">Dealer Directory</a></li>
              <li><a href="#buy" className="hover:text-white transition-colors">Used Trucks</a></li>
              <li><a href="#buy" className="hover:text-white transition-colors">New Trucks</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-300">Sell</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#sell" className="hover:text-white transition-colors">Sell My Truck</a></li>
              <li><a href="#sell" className="hover:text-white transition-colors">Ad Packages</a></li>
              <li><a href="#sell" className="hover:text-white transition-colors">Dealer Solutions</a></li>
              <li><a href="#sell" className="hover:text-white transition-colors">Manage Ad</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-300">Research</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#research" className="hover:text-white transition-colors">Truck Reviews</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">News & Advice</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Truck Specifications</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Valuations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-300">About</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About trucksales</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-4 md:space-y-0">
          <div>
            <p>© {new Date().getFullYear()} trucksales.com.au. Rebuilt for demonstration purposes. Buy it. Sell it. Love it.®</p>
          </div>
          <div className="flex space-x-4">
            <span className="font-bold">carsales network</span>
            <span>|</span>
            <span>bikesales</span>
            <span>|</span>
            <span>boatsales</span>
            <span>|</span>
            <span>caravancampingsales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
