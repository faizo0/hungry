import React, { useState } from 'react';
import { restaurants } from './data/restaurants';
import HeroSection from './components/HeroSection';
import RestaurantCard from './components/RestaurantCard';
import RestaurantDetail from './components/RestaurantDetail';
import Footer from './components/Footer';
import { Search, Utensils, Store, Sparkles, X, CheckCircle } from 'lucide-react';

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showPartnerModal, setShowPartnerModal] = useState(false);

  // Filter categories
  const categories = ['All', 'Pizza', 'Burgers', 'BBQ', 'Fast Food', 'Fried Chicken'];

  // Filter logic for restaurants
  const filteredRestaurants = restaurants.filter((rest) => {
    const matchesSearch =
      rest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rest.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rest.area.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      rest.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo with Red, Yellow, White & Black Theme */}
          <div 
            onClick={() => setSelectedRestaurant(null)}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
          >
            <div className="bg-gradient-to-tr from-red-600 to-yellow-500 p-2.5 rounded-2xl shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              <Utensils className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                HUNGRY <span className="text-red-500">JARANWALA</span>
              </h1>
              <p className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest hidden sm:block">
                Direct Food Delivery Hub
              </p>
            </div>
          </div>

          {/* Search Input (Visible on Main Page) */}
          {!selectedRestaurant && (
            <div className="relative flex-1 max-w-md hidden md:block">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search restaurants, pizza, burgers, or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 outline-none transition-all shadow-inner"
              />
            </div>
          )}

          {/* Partner CTA Button (For Pitching Local Owners) */}
          <button
            onClick={() => setShowPartnerModal(true)}
            className="bg-neutral-900 hover:bg-neutral-800 border border-red-500/50 text-yellow-400 text-xs font-extrabold px-4 py-2.5 rounded-2xl transition-all flex items-center space-x-2 shrink-0 shadow-lg shadow-red-950/40"
          >
            <Store className="w-4 h-4 text-red-500" />
            <span>Add Your Restaurant</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-8 flex-1">
        {selectedRestaurant ? (
          /* Dedicated Restaurant Detail & WhatsApp Ordering Page */
          <RestaurantDetail 
            restaurant={selectedRestaurant} 
            onBack={() => {
              setSelectedRestaurant(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        ) : (
          /* Home Storefront View */
          <>
            {/* Interactive Hero Section & Deals Carousel */}
            <HeroSection />

            {/* Mobile Search Input */}
            <div className="relative mb-6 md:hidden">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search restaurants or food in Jaranwala..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 rounded-2xl pl-10 pr-4 py-3 text-xs text-white outline-none"
              />
            </div>

            {/* Category Filter Pills & Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-black text-white flex items-center">
                  <Sparkles className="w-5 h-5 text-yellow-400 mr-2" /> Top Jaranwala Kitchens
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Select a restaurant to view full menu & order directly on WhatsApp
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 border border-red-500'
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Restaurants Grid */}
            {filteredRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    onSelect={(rest) => {
                      setSelectedRestaurant(rest);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-neutral-900/50 border border-neutral-800 rounded-3xl">
                <p className="text-neutral-400 text-sm font-bold">No restaurants found matching "{searchQuery}".</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-3 text-yellow-400 text-xs font-extrabold underline hover:text-white"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Professional Footer Component with All Partner Restaurants */}
      <Footer />

      {/* Partner With Us Modal (Useful when pitching restaurant owners!) */}
      {showPartnerModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-md w-full p-6 md:p-8 relative shadow-2xl">
            <button
              onClick={() => setShowPartnerModal(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-neutral-800 p-1.5 rounded-xl transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="bg-red-600/10 border border-red-500/30 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
              <Store className="w-6 h-6 text-red-500" />
            </div>

            <h3 className="text-2xl font-black text-white">Partner With Us</h3>
            <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
              Own a restaurant or fast-food point in Jaranwala? Get listed on Hungry Jaranwala and receive direct WhatsApp orders seamlessly.
            </p>

            <ul className="space-y-2.5 my-5 text-xs text-neutral-300">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-400 mr-2 shrink-0" /> Dedicated Digital Menu Page</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-400 mr-2 shrink-0" /> Instant Formatted Orders on Your WhatsApp</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-400 mr-2 shrink-0" /> Connect Directly with Local Customers</li>
            </ul>

            <a
              href="https://wa.me/923000000000?text=Assalam-o-Alaikum!%20I%20want%20to%20list%20my%20restaurant%20on%20Hungry%20Jaranwala."
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-red-600 hover:bg-red-500 text-white font-black text-xs py-3.5 rounded-xl transition-all shadow-lg shadow-red-950/50"
            >
              Contact Founder on WhatsApp
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
