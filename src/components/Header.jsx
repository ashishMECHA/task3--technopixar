import React from 'react';

export default function Header({ onLogoClick, onBuyClick }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 px-4 md:px-8 py-3 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Logo & Nav Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div 
            onClick={onLogoClick} 
            className="flex items-center cursor-pointer select-none"
            aria-label="trucksales home"
          >
            {/* Custom high-fidelity SVG Logo resembling the real one */}
            <svg 
              className="h-8 md:h-10 w-auto text-brand-blue" 
              viewBox="0 0 180 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Truck Icon outline above the letters or integrated */}
              <path 
                d="M5 25h12l3-6h14l2 6h8v4H5v-4zm29-6H18v5h12v-5z" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="12" cy="31" r="2.5" fill="currentColor" />
              <circle cx="35" cy="31" r="2.5" fill="currentColor" />
              
              {/* Wordmark */}
              <text 
                x="48" 
                y="31" 
                fill="#0a2540" 
                fontSize="24" 
                fontWeight="900" 
                fontFamily="Inter, sans-serif"
                letterSpacing="-1"
              >
                truck
                <tspan fill="#0073e6">sales</tspan>
              </text>
            </svg>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-gray-700">
            <a href="#buy" onClick={onBuyClick} className="hover:text-brand-blue transition-colors py-2 border-b-2 border-transparent hover:border-brand-blue">
              Buy
            </a>
            <a href="#sell" className="hover:text-brand-blue transition-colors py-2 border-b-2 border-transparent hover:border-brand-blue">
              Sell
            </a>
            <a href="#research" className="hover:text-brand-blue transition-colors py-2 border-b-2 border-transparent hover:border-brand-blue">
              Research
            </a>
          </nav>
        </div>

        {/* Right Section: Utilities & Call-to-action */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <button 
            className="p-2 text-gray-500 hover:text-brand-blue rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Notifications"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Sign up / Login */}
          <button className="hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors">
            Sign up/Log in
          </button>

          {/* Create Ad Button */}
          <button className="border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200 px-4 py-2 rounded-lg text-sm font-semibold">
            Create ad
          </button>

          {/* Carsales Network Badge */}
          <div className="hidden lg:flex flex-col items-end border-l border-gray-200 pl-4 text-right">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">Part of</span>
            <span className="text-xs font-bold text-gray-800 tracking-tight leading-tight">carsales</span>
          </div>
        </div>

      </div>
    </header>
  );
}
