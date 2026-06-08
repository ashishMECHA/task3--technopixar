import React, { useState } from 'react';
import { categories, makes, states } from '../data/mockData';

export default function FilterSidebar({ 
  searchParams, 
  setSearchParams, 
  onSearchSubmit,
  listingsCount 
}) {
  // Local state to keep track of which accordions are open
  const [openSections, setOpenSections] = useState({
    popular: true,
    make: true,
    location: true,
    price: true,
    keyword: true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSelectCategory = (catId) => {
    setSearchParams(prev => ({
      ...prev,
      category: catId
    }));
  };

  const handleSelectMake = (make) => {
    setSearchParams(prev => {
      const isSelected = prev.make === make;
      return {
        ...prev,
        make: isSelected ? 'all' : make
      };
    });
  };

  const handleSelectLocation = (state) => {
    setSearchParams(prev => {
      const isSelected = prev.location === state;
      return {
        ...prev,
        location: isSelected ? 'all' : state
      };
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleKeywordChange = (e) => {
    setSearchParams(prev => ({
      ...prev,
      keyword: e.target.value
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
      sort: searchParams.sort || 'price-asc'
    });
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-5 shadow-xs select-none">
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
        <h2 className="text-lg font-bold text-brand-navy">Filters</h2>
        <button 
          onClick={handleClearAll} 
          className="text-sm font-semibold text-brand-blue hover:text-brand-blue-hover hover:underline"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-4">
        
        {/* Accordion 1: Popular & Category */}
        <div className="border-b border-gray-100 pb-4">
          <button 
            onClick={() => toggleSection('popular')}
            className="w-full flex items-center justify-between font-bold text-sm text-gray-800 uppercase tracking-wider py-2"
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-orange-500 fill-current" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Popular
            </span>
            <span>{openSections.popular ? '▲' : '▼'}</span>
          </button>

          {openSections.popular && (
            <div className="mt-3 pl-6 space-y-2">
              
              {/* Active Category Chip indicator */}
              <div className="flex flex-col space-y-2">
                <span className="text-xs font-semibold text-gray-400 uppercase">Category</span>
                <div className="flex flex-wrap gap-2">
                  {searchParams.category !== 'all' ? (
                    <div className="inline-flex items-center bg-brand-light-blue border border-brand-blue/30 text-brand-blue text-xs font-bold px-3 py-1.5 rounded-lg">
                      <span>{categories.find(c => c.id === searchParams.category)?.name}</span>
                      <button 
                        onClick={() => handleSelectCategory('all')} 
                        className="ml-2 font-black text-sm text-brand-blue/60 hover:text-brand-blue focus:outline-none"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400 italic">All Categories Selected</span>
                  )}
                </div>
              </div>

              {/* Sub-category Drawer (lists category selectors) */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-gray-400 uppercase block mb-2">Change Category</span>
                <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-2 no-scrollbar">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`w-full text-left text-xs font-medium py-1.5 px-2 rounded-md transition-colors ${
                        searchParams.category === cat.id 
                          ? 'bg-brand-blue text-white' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Accordion 2: Make */}
        <div className="border-b border-gray-100 pb-4">
          <button 
            onClick={() => toggleSection('make')}
            className="w-full flex items-center justify-between font-bold text-sm text-gray-800 uppercase tracking-wider py-2"
          >
            <span>Make</span>
            <span>{openSections.make ? '▲' : '▼'}</span>
          </button>

          {openSections.make && (
            <div className="mt-3 pl-2 space-y-1.5 max-h-[160px] overflow-y-auto pr-2 no-scrollbar">
              {makes.map(make => {
                const isChecked = searchParams.make === make;
                return (
                  <label 
                    key={make} 
                    className="flex items-center space-x-2.5 text-xs text-gray-700 font-medium cursor-pointer hover:text-brand-blue py-1"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleSelectMake(make)}
                      className="rounded-sm border-gray-300 text-brand-blue focus:ring-brand-blue/30 h-4 w-4"
                    />
                    <span>{make}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Accordion 3: Location / State */}
        <div className="border-b border-gray-100 pb-4">
          <button 
            onClick={() => toggleSection('location')}
            className="w-full flex items-center justify-between font-bold text-sm text-gray-800 uppercase tracking-wider py-2"
          >
            <span>Location</span>
            <span>{openSections.location ? '▲' : '▼'}</span>
          </button>

          {openSections.location && (
            <div className="mt-3 pl-2 grid grid-cols-3 gap-2">
              {states.map(state => {
                const isSelected = searchParams.location === state;
                return (
                  <button
                    key={state}
                    onClick={() => handleSelectLocation(state)}
                    className={`text-xs font-semibold py-1.5 rounded-lg border text-center transition-all ${
                      isSelected 
                        ? 'border-brand-blue bg-brand-light-blue text-brand-blue shadow-xs' 
                        : 'border-gray-200 text-gray-600 bg-white hover:border-gray-300'
                    }`}
                  >
                    {state}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Accordion 4: Price Range */}
        <div className="border-b border-gray-100 pb-4">
          <button 
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between font-bold text-sm text-gray-800 uppercase tracking-wider py-2"
          >
            <span>Price Range</span>
            <span>{openSections.price ? '▲' : '▼'}</span>
          </button>

          {openSections.price && (
            <div className="mt-3 pl-2 space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  name="priceMin"
                  value={searchParams.priceMin}
                  onChange={handlePriceChange}
                  placeholder="Min ($)"
                  className="w-full text-xs border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                />
                <span className="text-gray-400 text-xs">-</span>
                <input
                  type="number"
                  name="priceMax"
                  value={searchParams.priceMax}
                  onChange={handlePriceChange}
                  placeholder="Max ($)"
                  className="w-full text-xs border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                />
              </div>
            </div>
          )}
        </div>

        {/* Accordion 5: Keyword */}
        <div className="border-b border-gray-100 pb-4">
          <button 
            onClick={() => toggleSection('keyword')}
            className="w-full flex items-center justify-between font-bold text-sm text-gray-800 uppercase tracking-wider py-2"
          >
            <span>Keyword</span>
            <span>{openSections.keyword ? '▲' : '▼'}</span>
          </button>

          {openSections.keyword && (
            <div className="mt-3 pl-2">
              <input
                type="text"
                value={searchParams.keyword}
                onChange={handleKeywordChange}
                placeholder="Search by keywords..."
                className="w-full text-xs border border-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              />
            </div>
          )}
        </div>

      </div>

      {/* Dynamic Results Counter Button inside Sidebar for mobile or bottom drawer */}
      <div className="mt-6">
        <button
          onClick={onSearchSubmit}
          className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-2.5 rounded-lg text-xs font-bold shadow-xs transition-all duration-150"
        >
          Apply Filters ({listingsCount})
        </button>
      </div>

    </div>
  );
}
