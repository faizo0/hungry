import React from 'react';
import { Utensils, MapPin, Phone, Heart, ArrowRight } from 'lucide-react';

const restaurantsList = [
  { name: "Melt 'n Bite", category: "Fast Food & Pizza" },
  { name: "Wevee's", category: "Pizza & Fast Food" },
  { name: "Grill City", category: "BBQ & Traditional" },
  { name: "Kaly’s Fri Chicken", category: "Crispy Fried Chicken" },
  { name: "Pizza Planet", category: "Italian & Fast Food" },
  { name: "Royal Casino", category: "Fast Food & Drinks" },
  { name: "Al-Madina Restaurant", category: "Desi & Fast Food" },
  { name: "Jaranwala Food Point", category: "Local Snacks & Rolls" }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br- from-neutral-950 via-black to-neutral-900 border-t border-red-600/40 text-neutral-400 pt-16 pb-12 mt-20 overflow-hidden shadow-2xl">
      {/* Background Red & Yellow Glow Mix Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r- from-red-600 to-yellow-500 flex items-center justify-center text-black font-black shadow-lg shadow-red-950/50">
                <Utensils className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-black text-white tracking-wide">
                Hungry <span className="text-yellow-400">Jaranwala</span>
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Jaranwala's premier food delivery hub connecting you directly with top local kitchens. Order hot & fresh meals instantly via WhatsApp.
            </p>
            <div className="flex items-center space-x-2 text-xs text-yellow-400 font-bold bg-black/60 p-2.5 rounded-xl border border-neutral-800">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-neutral-200">Jaranwala</span>
            </div>
          </div>

          {/* All 8 Partner Restaurants */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2 flex items-center">
              <span className="text-yellow-400 mr-2">■</span> Our 8 Partner Kitchens in Jaranwala
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {restaurantsList.map((rest, idx) => (
                <div 
                  key={idx}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-black/70 border border-neutral-800 hover:border-red-500/40 transition-colors shadow-inner"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-r- from-red-600/20 to-yellow-500/20 text-yellow-400 flex items-center justify-center font-black text-xs shrink-0 border border-red-500/30">
                    {idx + 1}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-black text-white truncate">{rest.name}</p>
                    <p className="text-[10px] text-neutral-400 truncate">{rest.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Support / Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2 flex items-center">
              <span className="text-red-500 mr-2">■</span> Direct Support
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Are you a restaurant owner in Jaranwala? Add your kitchen to our platform today.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center text-xs font-bold text-yellow-400 bg-red-600/15 border border-red-500/30 px-3 py-2.5 rounded-xl shadow-md">
                <Phone className="w-3.5 h-3.5 mr-2 text-red-500 shrink-0" /> WhatsApp Direct Integration
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} Hungry Jaranwala. All rights reserved.</p>
          <p className="flex items-center text-neutral-300">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 mx-1.5 fill-red-500 animate-pulse" /> for Jaranwala Food Lovers
          </p>
        </div>
      </div>
    </footer>
  );
}