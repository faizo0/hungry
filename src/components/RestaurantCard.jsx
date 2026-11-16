import React from 'react';
import { Clock, Star, MapPin, ArrowUpRight } from 'lucide-react';

export default function RestaurantCard({ restaurant, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(restaurant)}
      className="group bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-red-600/70 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-red-950/40 flex flex-col justify-between"
    >
      {/* Top Image & Badges */}
      <div>
        <div className="relative h-48 overflow-hidden bg-black">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t- from-black via-transparent to-transparent opacity-80"></div>

          {/* Open Status Badge */}
          <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-700 flex items-center space-x-1.5 shadow-md">
            <span className={`w-2 h-2 rounded-full ${restaurant.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-600'}`}></span>
            <span className="text-[11px] font-bold text-white">
              {restaurant.isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>

          {/* Rating Badge (Yellow) */}
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-black text-yellow-400 flex items-center border border-neutral-700 shadow-md">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 mr-1" />
            {restaurant.rating}
          </div>

          {/* Area Location Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center text-xs text-neutral-200 font-medium">
            <MapPin className="w-3.5 h-3.5 text-red-500 mr-1 shrink-0" />
            <span className="truncate">{restaurant.area}</span>
          </div>
        </div>

        {/* Restaurant Title & Categories */}
        <div className="p-5 pb-3">
          <div className="flex justify-between items-start">
            <h4 className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors">
              {restaurant.name}
            </h4>
            <div className="bg-neutral-800 group-hover:bg-red-600 group-hover:text-white text-neutral-400 p-1.5 rounded-xl transition-colors shadow-sm">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xs text-red-500 font-bold mt-1.5 line-clamp-1 uppercase tracking-wider">{restaurant.category}</p>
        </div>
      </div>

      {/* Footer Delivery Time & CTA */}
      <div className="px-5 py-3.5 bg-black/60 border-t border-neutral-800/80 flex justify-between items-center text-xs">
        <span className="flex items-center text-neutral-300 font-semibold">
          <Clock className="w-3.5 h-3.5 text-yellow-400 mr-1.5" />
          {restaurant.deliveryTime}
        </span>
        <span className="text-yellow-400 font-black group-hover:translate-x-1 transition-transform">
          Open Menu &rarr;
        </span>
      </div>
      
    </div>
  );
}