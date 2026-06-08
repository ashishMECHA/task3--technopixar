import React from 'react';

export default function ShimmerCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs p-5 flex flex-col h-full animate-pulse select-none">
      {/* 1. Image Area */}
      <div className="aspect-video md:aspect-[4/3] bg-gray-200 rounded-lg mb-5 w-full"></div>

      {/* 2. Badge & Heart Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 bg-gray-200 rounded-md w-24"></div>
        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
      </div>

      {/* 3. Title */}
      <div className="space-y-2 mb-4">
        <div className="h-5 bg-gray-200 rounded-md w-11/12"></div>
        <div className="h-5 bg-gray-200 rounded-md w-2/3"></div>
      </div>

      {/* 4. Price */}
      <div className="space-y-1.5 mb-5">
        <div className="h-7 bg-gray-200 rounded-md w-1/3"></div>
        <div className="h-3 bg-gray-200 rounded-md w-1/4"></div>
      </div>

      {/* 5. 2x2 Specs Grid */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-3 border-t border-b border-gray-100 py-4 mb-4">
        <div className="flex items-center">
          <div className="w-4.5 h-4.5 bg-gray-200 rounded-md mr-2"></div>
          <div className="h-3 bg-gray-200 rounded-md w-1/2"></div>
        </div>
        <div className="flex items-center">
          <div className="w-4.5 h-4.5 bg-gray-200 rounded-md mr-2"></div>
          <div className="h-3 bg-gray-200 rounded-md w-2/3"></div>
        </div>
        <div className="flex items-center">
          <div className="w-4.5 h-4.5 bg-gray-200 rounded-md mr-2"></div>
          <div className="h-3 bg-gray-200 rounded-md w-1/2"></div>
        </div>
        <div className="flex items-center">
          <div className="w-4.5 h-4.5 bg-gray-200 rounded-md mr-2"></div>
          <div className="h-3 bg-gray-200 rounded-md w-2/3"></div>
        </div>
      </div>

      {/* 6. Location Tag */}
      <div className="h-3 bg-gray-200 rounded-md w-1/4 mb-4"></div>

      {/* 7. Action CTAs */}
      <div className="flex items-center space-x-3 w-full">
        <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
        <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
