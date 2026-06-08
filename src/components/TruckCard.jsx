import React, { useState } from 'react';

export default function TruckCard({ truck, onSelect, onContactClick }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const images = truck.images || ['/assets/hyundai_ex6_1.png'];
  const totalImages = images.length;

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Icon rendering helper
  const renderSpecIcon = (type) => {
    switch (type) {
      case 'body':
        return (
          <svg className="w-4.5 h-4.5 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 9h7l3 3v4a1 1 0 01-1 1h-9V9z" />
            <circle cx="6.5" cy="18.5" r="2.5" />
            <circle cx="16.5" cy="18.5" r="2.5" />
          </svg>
        );
      case 'gear':
        return (
          <svg className="w-4.5 h-4.5 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.172-6.828l-2.828 2.828M6.828 17.172l2.828-2.828" />
          </svg>
        );
      case 'odometer':
        return (
          <svg className="w-4.5 h-4.5 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      case 'drivetrain':
        return (
          <svg className="w-4.5 h-4.5 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="10" width="18" height="4" rx="2" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="12" r="3" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      onClick={() => onSelect(truck)}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer flex flex-col h-full"
    >
      {/* 1. Image Gallery Wrapper */}
      <div className="relative aspect-video md:aspect-[4/3] bg-gray-100 overflow-hidden w-full select-none">
        <img 
          src={images[activeImageIndex]} 
          alt={truck.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/assets/hyundai_ex6_1.png'; // fallback if error
          }}
        />

        {/* Image slider arrows - display on hover */}
        <button 
          onClick={prevImage}
          className="absolute left-2.5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          aria-label="Previous image"
        >
          &lt;
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          aria-label="Next image"
        >
          &gt;
        </button>

        {/* Photo Count badge */}
        <div className="absolute left-3 top-3 bg-black/60 text-white text-[11px] font-bold px-2 py-1 rounded-md flex items-center space-x-1.5 z-10">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span>{totalImages}</span>
        </div>

        {/* Slider Indicator dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
          {images.map((_, idx) => (
            <span 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === activeImageIndex ? 'bg-white shadow-sm' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* trucksales watermark overlay */}
        <div className="absolute right-3 bottom-3 text-white/40 font-bold text-xs select-none pointer-events-none font-sans">
          trucksales
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        
        <div>
          {/* Badge & Heart Shortlist Toggle row */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase border border-gray-200 rounded px-2 py-1 text-gray-500 bg-gray-50 tracking-wider">
              {truck.status}
            </span>
            <button 
              onClick={handleHeartClick}
              className="p-1 rounded-full text-gray-400 hover:text-brand-red transition-colors focus:outline-none"
              aria-label="Add to shortlist"
            >
              {isSaved ? (
                <svg className="w-6 h-6 text-brand-red fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-400 hover:text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-brand-blue transition-colors leading-tight mb-2">
            {truck.title}
          </h3>

          {/* Price */}
          <div className="mb-4">
            <span className="text-xl md:text-2xl font-black text-gray-950">
              {formatPrice(truck.price)}
            </span>
            <a 
              href="#govt-charges" 
              onClick={(e) => { e.stopPropagation(); e.preventDefault(); }} 
              className="block text-[11px] font-semibold text-brand-blue hover:underline mt-0.5"
            >
              Excl. Govt. Charges
            </a>
          </div>

          {/* 2x2 Specs Grid */}
          <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 border-t border-b border-gray-100 py-4 mb-4 text-xs font-semibold text-gray-700">
            <div className="flex items-center">
              {renderSpecIcon('body')}
              <span className="truncate">{truck.categoryName}</span>
            </div>
            <div className="flex items-center">
              {renderSpecIcon('gear')}
              <span className="truncate">{truck.transmission}</span>
            </div>
            <div className="flex items-center">
              {renderSpecIcon('odometer')}
              <span className="truncate">
                {truck.odometer >= 1000 
                  ? `${truck.odometer.toLocaleString()} km` 
                  : `${truck.odometer} km`}
              </span>
            </div>
            <div className="flex items-center">
              {renderSpecIcon('drivetrain')}
              <span className="truncate">{truck.drivetrain}</span>
            </div>
          </div>
        </div>

        <div>
          {/* Location & Seller detail section */}
          <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-4">
            <span>{truck.location}, {truck.state}</span>
            <span className="text-gray-400">{truck.seller.type} Sale</span>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3 w-full">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onContactClick(truck);
              }}
              className="flex-1 border border-brand-blue hover:bg-brand-light-blue text-brand-blue py-2.5 rounded-lg text-xs font-bold transition-all text-center"
            >
              Contact dealer
            </button>
            <button 
              onClick={() => onSelect(truck)}
              className="flex-1 bg-brand-blue hover:bg-brand-blue-hover text-white py-2.5 rounded-lg text-xs font-bold transition-all text-center"
            >
              View details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
