import React from 'react';
import { categories, makes, states } from '../data/mockData';

export default function HeroSearch({ 
  searchParams, 
  setSearchParams, 
  filteredCount, 
  onSearchSubmit 
}) {
  
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    setSearchParams({
      category: 'all',
      make: 'all',
      keyword: '',
      location: 'all',
      priceMin: '',
      priceMax: '',
      sort: 'price-asc'
    });
  };

  const handleCategoryShortcut = (catId) => {
    setSearchParams(prev => ({
      ...prev,
      category: catId
    }));
    onSearchSubmit();
  };

  // SVGs for categories matching the real site outlines
  const getCategorySvg = (icon) => {
    switch (icon) {
      case 'cab_chassis':
        return (
          <svg className="w-12 h-6 text-gray-600 group-hover:text-brand-blue" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 15h12l3-6h8v6h17M17 9v6M30 15h12v3H30z" />
            <circle cx="12" cy="15" r="3" />
            <circle cx="35" cy="15" r="3" />
          </svg>
        );
      case 'tipper':
        return (
          <svg className="w-12 h-6 text-gray-600 group-hover:text-brand-blue" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 15h8l2-5h7M22 6l16-3 3 8-19 4z" />
            <circle cx="10" cy="15" r="3" />
            <circle cx="33" cy="15" r="3" />
          </svg>
        );
      case 'prime_mover':
        return (
          <svg className="w-12 h-6 text-gray-600 group-hover:text-brand-blue" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 15h18l2-7h15l1 7h4v2H5v-2z" />
            <path d="M30 8v7m5-7v7" />
            <circle cx="12" cy="15" r="3" />
            <circle cx="34" cy="15" r="3" />
            <circle cx="41" cy="15" r="3" />
          </svg>
        );
      case 'tray_truck':
        return (
          <svg className="w-12 h-6 text-gray-600 group-hover:text-brand-blue" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 15h12l2-5h6v5h20v2H5v-2zm20-5h20" />
            <circle cx="12" cy="15" r="3" />
            <circle cx="35" cy="15" r="3" />
          </svg>
        );
      case 'semi_trailer':
        return (
          <svg className="w-12 h-6 text-gray-600 group-hover:text-brand-blue" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h38M4 12V6h39v6M10 12h10m15 0h10" />
            <circle cx="15" cy="15" r="3" />
            <circle cx="35" cy="15" r="3" />
            <circle cx="42" cy="15" r="3" />
          </svg>
        );
      case 'bus':
        return (
          <svg className="w-12 h-6 text-gray-600 group-hover:text-brand-blue" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 15V5c0-1 1-2 2-2h38c1 0 2 1 2 2v10H4zm6-8h6m6 0h6m6 0h6m-30 4h6m6 0h6m6 0h6" />
            <circle cx="12" cy="15" r="3" />
            <circle cx="38" cy="15" r="3" />
          </svg>
        );
      default:
        return (
          <svg className="w-12 h-6 text-gray-600 group-hover:text-brand-blue" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 15h40" />
            <circle cx="15" cy="15" r="3" />
            <circle cx="35" cy="15" r="3" />
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full">
      {/* Scenic Backdrop */}
      <div 
        className="w-full h-[320px] md:h-[420px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.4), rgba(10, 37, 64, 0.75)), url('/assets/scania_r660_1.png')`
        }}
      >
        {/* Decorative Curve graphic from the real page */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 hidden md:block">
          <svg width="300" height="80" viewBox="0 0 300 80" fill="none">
            <path d="M10 70 C 100 10, 200 10, 290 70" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          </svg>
        </div>


      </div>

      {/* Floating Find your next truck card */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 md:-mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-navy mb-6">Find your next truck</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            
            {/* Category Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="category" className="text-xs font-semibold text-gray-500 mb-2">Category</label>
              <select
                id="category"
                name="category"
                value={searchParams.category}
                onChange={handleSelectChange}
                className="w-full border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-white appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%234a5568' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 12px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
              >
                <option value="all">All categories</option>
                {categories.filter(c => c.id !== 'all').map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* Make Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="make" className="text-xs font-semibold text-gray-500 mb-2">Make</label>
              <select
                id="make"
                name="make"
                value={searchParams.make}
                onChange={handleSelectChange}
                className="w-full border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-white appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%234a5568' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 12px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
              >
                <option value="all">All makes</option>
                {makes.map(mk => (
                  <option key={mk} value={mk}>{mk}</option>
                ))}
              </select>
            </div>

            {/* Keyword Input */}
            <div className="flex flex-col">
              <label htmlFor="keyword" className="text-xs font-semibold text-gray-500 mb-2">Keyword</label>
              <input
                id="keyword"
                name="keyword"
                type="text"
                value={searchParams.keyword}
                onChange={handleSelectChange}
                placeholder="Search by keyword"
                className="w-full border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              />
            </div>

            {/* Action Show Items Button */}
            <div>
              <button
                onClick={onSearchSubmit}
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 px-6 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
              >
                Show {filteredCount} {filteredCount === 1 ? 'item' : 'items'}
              </button>
            </div>

          </div>

          {/* Under-search inline filters */}
          <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-gray-100 pt-6 text-sm">
            
            {/* Location selector */}
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">Location:</span>
              <select
                name="location"
                value={searchParams.location}
                onChange={handleSelectChange}
                className="bg-transparent font-semibold text-brand-blue focus:outline-none cursor-pointer"
              >
                <option value="all">Any State</option>
                {states.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Min Price */}
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">Price min:</span>
              <select
                name="priceMin"
                value={searchParams.priceMin}
                onChange={handleSelectChange}
                className="bg-transparent font-semibold text-brand-blue focus:outline-none cursor-pointer"
              >
                <option value="">Min</option>
                <option value="25000">$25,000</option>
                <option value="50000">$50,000</option>
                <option value="100000">$100,000</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
              </select>
            </div>

            {/* Max Price */}
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">Price max:</span>
              <select
                name="priceMax"
                value={searchParams.priceMax}
                onChange={handleSelectChange}
                className="bg-transparent font-semibold text-brand-blue focus:outline-none cursor-pointer"
              >
                <option value="">Max</option>
                <option value="60000">$60,000</option>
                <option value="100000">$100,000</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="400000">$400,000</option>
              </select>
            </div>

            {/* Clear All */}
            <a 
              href="#clear" 
              onClick={handleClearAll} 
              className="text-gray-400 hover:text-brand-blue font-medium ml-auto hover:underline"
            >
              Clear all
            </a>

          </div>
        </div>

        {/* Quick Category Icons underneath the card */}
        <div className="mt-8">
          <div className="flex overflow-x-auto py-2 px-1 justify-between gap-4 md:gap-0 no-scrollbar select-none">
            {categories.filter(c => c.id !== 'all').map(cat => {
              const isActive = searchParams.category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryShortcut(cat.id)}
                  className={`group flex flex-col items-center p-3 rounded-xl border transition-all duration-200 min-w-[95px] md:min-w-[120px] shrink-0 text-center ${
                    isActive 
                      ? 'border-brand-blue bg-brand-light-blue shadow-xs' 
                      : 'border-gray-200 bg-white hover:border-brand-blue/50 hover:shadow-xs'
                  }`}
                >
                  <div className={`mb-2 transform group-hover:scale-105 transition-transform ${isActive ? 'text-brand-blue' : ''}`}>
                    {getCategorySvg(cat.icon)}
                  </div>
                  <span className={`text-xs font-semibold ${isActive ? 'text-brand-blue' : 'text-gray-700'}`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
