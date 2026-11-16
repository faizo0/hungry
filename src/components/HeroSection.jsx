import React, { useState, useEffect } from 'react';
import Hero3D from './Hero3D';
import { Sparkles, Flame, Tag } from 'lucide-react';

const featuredDeals = [
  {
    restaurant: "Wevee's",
    deal: "Special Crown Pizza + 1.5L Drink",
    price: "Rs. 1399",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    restaurant: "Melt 'n Bite",
    deal: "Malai Boti Pizza Large + Garlic Bread",
    price: "Rs. 1699",
    tag: "Chef Special",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    restaurant: "Grill City",
    deal: "BBQ Platter for 2 + Puri Paratha",
    price: "Rs. 1399",
    tag: "Hot & Spicy",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    restaurant: "Kaly’s Fri Chicken",
    deal: "4 Crispy Burgers + Large Fries + Drink",
    price: "Rs. 1299",
    tag: "Family Deal",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  }
];

export default function HeroSection() {
  const [currentDeal, setCurrentDeal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % featuredDeals.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8 mb-12">
      {/* Top Hero Banner */}
      <div className="relative bg-gradient-to-br from-black via-neutral-950 to-neutral-900 border border-red-600/30 rounded-3xl p-6 md:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/20 to-yellow-500/20 border border-red-500/40 px-3.5 py-1.5 rounded-full text-yellow-400 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Jaranwala’s Premier Food Delivery Hub</span>
            </div>

            {/* یہاں ہیڈنگ کو وائٹ، ریڈ اور یلو کے زبردست کم্বینیشن میں سیٹ کر دیا گیا ہے */}
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Order Hot & Fresh Food Direct from <span className="text-yellow-400">Jaranwala's</span> <span className="text-red-500">Favorite</span> <span className="text-white">Kitchens!</span>
            </h2>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Experience lightning-fast local home delivery straight from Jaranwala's top restaurants to your WhatsApp in one click.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full h-72 md:h-80 bg-black/60 rounded-3xl border border-neutral-800 overflow-hidden shadow-inner flex items-center justify-center relative backdrop-blur-md">
              <Hero3D />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Big Deals Banner Section */}
      <div className="relative bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-red-600/40 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-br from-red-600/20 to-yellow-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          {/* Deal Text Info */}
          <div className="space-y-4 flex-1">
            <div className="flex items-center space-x-3">
              <span className="bg-gradient-to-r from-red-600 to-yellow-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center shadow-lg">
                <Flame className="w-3.5 h-3.5 mr-1 text-black animate-bounce" /> Hot Deal Banner
              </span>
              <span className="text-yellow-400 text-xs font-bold flex items-center">
                <Tag className="w-3.5 h-3.5 mr-1 text-red-500" /> {featuredDeals[currentDeal].restaurant} Exclusive
              </span>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
                {featuredDeals[currentDeal].deal}
              </h3>
              <p className="text-2xl md:text-3xl font-black text-yellow-400 mt-2">
                {featuredDeals[currentDeal].price}
              </p>
            </div>

            <p className="text-xs text-neutral-400">
              Order this special promotional combo directly on restaurant WhatsApp instantly!
            </p>

            {/* Pagination Dots */}
            <div className="flex space-x-2 pt-2">
              {featuredDeals.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentDeal(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentDeal === idx ? 'w-8 bg-gradient-to-r from-red-600 to-yellow-400' : 'w-2 bg-neutral-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Deal Image Card */}
          <div className="w-full lg:w-80 h-52 rounded-2xl overflow-hidden relative border border-neutral-800 shadow-2xl group shrink-0">
            <img 
              src={featuredDeals[currentDeal].image} 
              alt={featuredDeals[currentDeal].deal}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
              <span className="bg-black/80 backdrop-blur-md text-yellow-400 text-[10px] font-black px-2.5 py-1 rounded-md border border-neutral-700 shadow">
                {featuredDeals[currentDeal].tag}
              </span>
              <span className="text-xs font-bold bg-gradient-to-r from-red-600 to-yellow-500 text-black px-3 py-1 rounded-xl shadow">
                Tap Restaurant Below
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}