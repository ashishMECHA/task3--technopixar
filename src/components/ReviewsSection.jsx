import React from 'react';
import { mockReviews, mockNews } from '../data/mockData';

export default function ReviewsSection() {
  
  const renderCard = (item) => {
    return (
      <div 
        key={item.id} 
        className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col group"
      >
        {/* Card Image */}
        <div className="aspect-video w-full bg-gray-100 overflow-hidden relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            onError={(e) => {
              e.target.src = '/assets/hyundai_ex6_1.png';
            }}
          />
        </div>

        {/* Card Info */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span className="inline-block text-[9px] font-extrabold bg-gray-800 text-white rounded px-2 py-0.5 tracking-wider mb-2">
              {item.badge}
            </span>
            <h3 className="font-bold text-base text-gray-900 group-hover:text-brand-blue transition-colors leading-snug mb-3">
              {item.title}
            </h3>
          </div>
          <span className="text-[11px] font-semibold text-gray-400">
            {item.date} · {item.author}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-gray-200 mt-16 space-y-16">
      
      {/* 1. Expert Reviews Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-black text-brand-navy">Expert truck reviews</h2>
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:border-gray-300 text-gray-600 flex items-center justify-center font-bold text-xs select-none">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:border-gray-300 text-gray-600 flex items-center justify-center font-bold text-xs select-none">
              &gt;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mockReviews.map(renderCard)}
        </div>

        <div className="text-center">
          <button className="border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-200 px-6 py-2.5 rounded-full text-xs font-bold shadow-xs">
            Show all truck reviews
          </button>
        </div>
      </div>

      {/* 2. Truck News Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-black text-brand-navy">Truck news</h2>
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:border-gray-300 text-gray-600 flex items-center justify-center font-bold text-xs select-none">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:border-gray-300 text-gray-600 flex items-center justify-center font-bold text-xs select-none">
              &gt;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockNews.map(renderCard)}
        </div>
      </div>

    </div>
  );
}
