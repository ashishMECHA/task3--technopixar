import React from 'react';
import TruckCard from './TruckCard';
import ShimmerCard from './ShimmerCard';

export default function TruckGrid({ 
  trucks, 
  onSelectTruck, 
  onContactClick,
  sortOrder,
  setSortOrder,
  isLoading
}) {
  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="w-full">
      {/* Grid Header & Sort Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 mb-6 gap-4 shadow-xs">
        <div>
          <h2 className="text-base md:text-lg font-bold text-brand-navy">
            {isLoading ? 'Searching...' : `${trucks.length} ${trucks.length === 1 ? 'Truck' : 'Trucks'} Found`}
          </h2>
          {!isLoading && trucks.length === 0 && (
            <p className="text-xs text-gray-500 mt-1">Try resetting or modifying your filters on the left.</p>
          )}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center space-x-2 shrink-0">
          <label htmlFor="sort" className="text-xs font-semibold text-gray-500">Sort by:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-200 rounded-lg py-2 px-3 text-xs font-bold text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
          >
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="year-desc">Year (Newest First)</option>
            <option value="odometer-asc">Odometer (Lowest First)</option>
          </select>
        </div>
      </div>

      {/* Grid containing cards */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
      ) : trucks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trucks.map(truck => (
            <TruckCard
              key={truck.id}
              truck={truck}
              onSelect={onSelectTruck}
              onContactClick={onContactClick}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-xs">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-lg font-bold text-brand-navy mb-2">No matching trucks</h3>
          <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">We couldn't find any trucks matching your exact search filters. Try widening your criteria.</p>
        </div>
      )}
    </div>
  );
}
