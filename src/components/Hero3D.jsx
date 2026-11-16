import React, { useState, useEffect } from 'react';
import { Sparkles, Flame, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const foodItems = [
  {
    title: "Signature Chef Burger",
    category: "Jaranwala Special",
    price: "Rs. 699",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
    tag: "Hot & Juicy"
  },
  {
    title: "Crispy Club Sandwich & Fries",
    category: "Fast Food Classic",
    price: "Rs. 550",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
    tag: "Best Seller"
  },
  {
    title: "Extra Cheese Melt Pizza",
    category: "Italian Crust",
    price: "Rs. 1399",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
    tag: "Chef Special"
  },
  {
    title: "Loaded Supreme Pizza Slice",
    category: "Wood Fired",
    price: "Rs. 350",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80",
    tag: "Crispy Crust"
  },
  {
    title: "Special Chicken Shawarma Wrap",
    category: "Arabic Roll",
    price: "Rs. 380",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1529042298742-b5e12815124b?auto=format&fit=crop&w=1000&q=80",
    tag: "Spicy & Garlic"
  }
];

export default function Hero3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % foodItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % foodItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + foodItems.length) % foodItems.length);
  };

  const current = foodItems[currentIndex];

  return (
    <div className="w-full h-72 md:h-96 relative flex items-center justify-center p-2 group overflow-hidden rounded-3xl">
      {/* Glowing Ambient Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr- from-amber-500/20 via-orange-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>

      {/* Slider Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-950 flex flex-col items-center justify-center">
        
        {/* Food Image with Smooth Fade Transition */}
        <img 
          key={currentIndex}
          src={current.image} 
          alt={current.title} 
          className="w-full h-full object-cover animate-fadeIn opacity-95 transition-all duration-700 group-hover:scale-105"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t- from-slate-950 via-slate-950/30 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center space-x-1.5 bg-slate-950/80 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded-full shadow-lg">
          <Flame className="w-3.5 h-3.5 text-orange-500 animate-bounce" />
          <span className="text-[11px] font-black text-white tracking-wide">{current.category}</span>
        </div>

        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-slate-950/80 backdrop-blur-md border border-amber-500/40 px-2.5 py-1 rounded-full shadow-lg">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-xs font-black text-white">{current.rating}</span>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white p-2 rounded-full backdrop-blur-md border border-slate-700 transition-all shadow-lg opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white p-2 rounded-full backdrop-blur-md border border-slate-700 transition-all shadow-lg opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Banner Info & Dots */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 shadow-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{current.tag}</span>
              <span className="text-slate-500">•</span>
              <span className="text-[11px] font-black text-white">{current.price}</span>
            </div>
            <p className="text-sm md:text-base font-black text-white mt-0.5">{current.title}</p>
          </div>

          {/* Dots Indicator */}
          <div className="flex space-x-1.5 mb-1">
            {foodItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-amber-500' : 'w-1.5 bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}