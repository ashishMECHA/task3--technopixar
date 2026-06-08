import React, { useState, useEffect } from 'react';
import EnquiryForm from './EnquiryForm';

export default function TruckDetail({ truck, onBack }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  // Scroll to top when loading a new details page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [truck]);

  const images = truck.images || ['/assets/hyundai_ex6_1.png'];
  const totalImages = images.length;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev + 1));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
      
      {/* 1. Breadcrumbs */}
      <div className="mb-6">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-blue-hover hover:underline"
        >
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to search results
        </button>
      </div>

      {/* 2. Title Section */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pb-6 border-b border-gray-200 gap-4">
        <div>
          <span className="text-xs font-bold text-gray-500 bg-gray-100 rounded px-2.5 py-1 uppercase tracking-wider">
            {truck.status}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-1 tracking-tight">
            {truck.title}
          </h1>
          <span className="text-xs font-semibold text-gray-500">
            Stock ID: TS-{truck.id}-{truck.year} | Ref code: TA{1000000 + truck.id}
          </span>
        </div>

        <div className="text-left md:text-right">
          <span className="text-3xl md:text-4xl font-black text-gray-950 block">
            {formatPrice(truck.price)}
          </span>
          <span className="text-xs font-semibold text-brand-blue">
            Excl. Govt. Charges
          </span>
        </div>
      </div>

      {/* 3. Main Detail Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Media & Specs Sheet */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* A. Image Gallery Slider */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="relative aspect-video bg-gray-900 group select-none">
              <img 
                src={images[activeImageIndex]} 
                alt={truck.title} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = '/assets/hyundai_ex6_1.png';
                }}
              />
              
              {/* Slideshow Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/55 hover:bg-black/75 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
                aria-label="Previous image"
              >
                &lt;
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/55 hover:bg-black/75 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
                aria-label="Next image"
              >
                &gt;
              </button>

              {/* Photo Count tag */}
              <div className="absolute right-4 top-4 bg-black/75 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                Photo {activeImageIndex + 1} of {totalImages}
              </div>
            </div>

            {/* Thumbnail selectors */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center space-x-3 overflow-x-auto no-scrollbar select-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    idx === activeImageIndex 
                      ? 'border-brand-blue ring-2 ring-brand-blue/10 scale-95' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* B. Key Specs Quick Badges */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-base font-bold text-brand-navy mb-4">Key Specifications</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              
              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-500 font-semibold mb-1">Odometer</span>
                <span className="text-base font-bold text-gray-800">
                  {truck.odometer >= 1000 ? `${truck.odometer.toLocaleString()} km` : `${truck.odometer} km`}
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-500 font-semibold mb-1">Transmission</span>
                <span className="text-base font-bold text-gray-800">{truck.transmission}</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-500 font-semibold mb-1">Drivetrain</span>
                <span className="text-base font-bold text-gray-800">{truck.drivetrain}</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-500 font-semibold mb-1">GVM</span>
                <span className="text-base font-bold text-gray-800">{truck.gvm}</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-500 font-semibold mb-1">Engine Power</span>
                <span className="text-base font-bold text-gray-800">{truck.power}</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xs text-gray-500 font-semibold mb-1">Location</span>
                <span className="text-base font-bold text-gray-800">{truck.location}, {truck.state}</span>
              </div>

            </div>
          </div>

          {/* C. Specifications Sheets */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-base font-bold text-brand-navy mb-4">Specifications Sheet</h3>
            
            <div className="space-y-6">
              
              {/* Category 1 */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Engine & Performance</h4>
                <div className="border border-gray-100 rounded-xl overflow-hidden text-sm">
                  <div className="grid grid-cols-2 border-b border-gray-100 p-3">
                    <span className="text-gray-500 font-medium">Power output</span>
                    <span className="text-gray-800 font-semibold">{truck.power}</span>
                  </div>
                  <div className="grid grid-cols-2 p-3 bg-gray-50/50">
                    <span className="text-gray-500 font-medium">Fuel type</span>
                    <span className="text-gray-800 font-semibold">Turbo Diesel</span>
                  </div>
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Chassis & Weight</h4>
                <div className="border border-gray-100 rounded-xl overflow-hidden text-sm">
                  <div className="grid grid-cols-2 border-b border-gray-100 p-3">
                    <span className="text-gray-500 font-medium">Gross Vehicle Mass (GVM)</span>
                    <span className="text-gray-800 font-semibold">{truck.gvm}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100 p-3 bg-gray-50/50">
                    <span className="text-gray-500 font-medium">Configuration</span>
                    <span className="text-gray-800 font-semibold">{truck.drivetrain}</span>
                  </div>
                  <div className="grid grid-cols-2 p-3">
                    <span className="text-gray-500 font-medium">Body style</span>
                    <span className="text-gray-800 font-semibold">{truck.categoryName}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* D. Description */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-base font-bold text-brand-navy mb-4">Seller's Description</h3>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {truck.description}
            </p>
          </div>

        </div>

        {/* Right Column: Sticky Contact Sidebar */}
        <div className="space-y-6 lg:h-fit lg:sticky lg:top-24">
          
          {/* Seller Details Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-brand-light-blue rounded-xl flex items-center justify-center font-black text-brand-blue text-lg shadow-xs">
                {truck.seller.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-tight">{truck.seller.name}</h3>
                <span className="text-[10px] font-bold text-brand-blue bg-brand-light-blue rounded px-1.5 py-0.5 mt-1 inline-block uppercase tracking-wider">
                  {truck.seller.type} Seller
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-6 text-xs font-semibold text-gray-500">
              <span className="text-amber-500 text-sm">★</span>
              <span className="text-gray-800 font-bold">{truck.seller.rating}</span>
              <span>/ 5.0 rating</span>
            </div>

            {/* Reveal Phone Number Button */}
            <div className="mb-4">
              {showPhoneNumber ? (
                <a 
                  href={`tel:${truck.seller.phone}`}
                  className="w-full bg-brand-light-blue text-brand-blue text-center font-bold py-3 px-4 rounded-xl border border-brand-blue/30 block text-base transition-colors"
                >
                  📞 {truck.seller.phone}
                </a>
              ) : (
                <button
                  onClick={() => setShowPhoneNumber(true)}
                  className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white text-center font-bold py-3 px-4 rounded-xl shadow-md transition-colors text-base"
                >
                  Reveal Phone Number
                </button>
              )}
            </div>

            <p className="text-[10px] text-gray-400 text-center">
              Mention <strong>Ref TA{1000000 + truck.id}</strong> when calling.
            </p>

          </div>

          {/* Enquiry Form */}
          <EnquiryForm truck={truck} />

        </div>

      </div>

    </div>
  );
}
