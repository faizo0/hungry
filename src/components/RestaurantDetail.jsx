import React, { useState } from 'react';
import { ArrowLeft, Clock, MapPin, ShoppingBag, Plus, Minus, Send, Navigation, ChevronUp, X } from 'lucide-react';

export default function RestaurantDetail({ restaurant, onBack }) {
  const [cart, setCart] = useState({});
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [locationLoading, setLocationLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item with selected size
  const handleAddToCart = (item, sizeName, price) => {
    const cartKey = `${item.id}-${sizeName}`;
    setCart((prev) => {
      const currentQty = prev[cartKey] ? prev[cartKey].qty : 0;
      return {
        ...prev,
        [cartKey]: {
          id: item.id,
          name: item.name,
          size: sizeName,
          price: price,
          qty: currentQty + 1,
          image: item.image
        }
      };
    });
  };

  // Remove item
  const handleRemoveFromCart = (cartKey) => {
    setCart((prev) => {
      const current = prev[cartKey] ? prev[cartKey].qty : 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[cartKey];
        return copy;
      }
      return {
        ...prev,
        [cartKey]: { ...prev[cartKey], qty: current - 1 }
      };
    });
  };

  const cartItems = Object.values(cart);
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Auto Get Live GPS Location Function
  const handleGetLiveLocation = () => {
    if (!navigator.geolocation) {
      alert('Aapka browser Geolocation ko support nahi karta.');
      return;
    }

    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;
        setCustomerAddress(`Live GPS Location: ${mapsLink}`);
        setLocationLoading(false);
        alert('Live Location successfully attach ho gayi hai!');
      },
      (error) => {
        setLocationLoading(false);
        alert('Location access nahi mil saki. Baraye meherbani manually address likh dein.');
      }
    );
  };

  // WhatsApp Checkout with Phone Number & Location
  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) {
      alert('Bhai, please apna Naam, Phone Number aur Address (ya Live Location) enter karein!');
      return;
    }
    if (cartItems.length === 0) {
      alert('Cart khali hai!');
      return;
    }

    let message = `*New Order via Hungry Jaranwala* 🍔\n\n`;
    message += `*Restaurant:* ${restaurant.name}\n`;
    message += `*Customer Name:* ${customerName}\n`;
    message += `*Phone Number:* ${customerPhone}\n`;
    message += `*Delivery Address / Location:* ${customerAddress}\n\n`;
    message += `*Order Items:*\n`;
    
    cartItems.forEach((i, index) => {
      const sizeText = i.size !== 'Standard' ? ` [Size: ${i.size}]` : '';
      message += `${index + 1}. ${i.name}${sizeText} x ${i.qty} = Rs. ${i.price * i.qty}\n`;
    });

    message += `\n*Total Bill:* Rs. ${totalAmount + 150} (Including Delivery)\n`;
    message += `_Please confirm my order!_`;

    const encodedURL = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(encodedURL, '_blank');
  };

  const nameParts = restaurant.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <div className="space-y-8 animate-fadeIn pb-24 relative">
      
      {/* Sticky Floating Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button 
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-white bg-neutral-950/90 hover:bg-black backdrop-blur-md border border-red-500/60 px-3.5 py-2 rounded-xl text-xs font-black shadow-2xl shadow-red-950/50 transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 text-red-500" />
          <span>Back</span>
        </button>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-red-600/40 rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl mt-2">
        <div className="absolute -top-12 -right-12 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 pt-2">
          <div className="md:col-span-4 h-56 rounded-2xl overflow-hidden border border-red-500/30 bg-black shadow-inner">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-8 space-y-3">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              {firstName} <span className="text-yellow-400">{lastName}</span>
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-200 pt-1">
              <span className="flex items-center bg-black/70 px-3 py-2 rounded-xl border border-neutral-800 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-red-500 mr-1.5 shrink-0" /> 
                <span className="text-white font-medium">{restaurant.area}</span>
              </span>
              <span className="flex items-center bg-black/70 px-3 py-2 rounded-xl border border-neutral-800 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-yellow-400 mr-1.5 shrink-0" /> 
                <span className="text-white font-medium">Delivery: {restaurant.deliveryTime}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          <h3 className="text-xl font-extrabold text-white flex items-center">
            <ShoppingBag className="w-5 h-5 text-yellow-400 mr-2" /> Explore Menu & Order
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurant.menu.map((item) => (
              <div key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl">
                <div>
                  {item.image && (
                    <div className="h-36 overflow-hidden relative border-b border-neutral-800 bg-black">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-4 pb-2">
                    <h4 className="text-white font-bold text-base">{item.name}</h4>
                    <p className="text-neutral-400 text-xs mt-1">{item.description}</p>
                  </div>
                </div>

                <div className="p-4 pt-2 space-y-3">
                  {item.prices ? (
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-bold text-yellow-400">Select Size & Add:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(item.prices).map(([sizeKey, sizePrice]) => {
                          const cartKey = `${item.id}-${sizeKey.toUpperCase()}`;
                          const qty = cart[cartKey] ? cart[cartKey].qty : 0;

                          return (
                            <div key={sizeKey} className="bg-black border border-neutral-800 p-2 rounded-xl flex items-center justify-between">
                              <div>
                                <span className="text-[10px] uppercase font-extrabold text-neutral-300 block">{sizeKey}</span>
                                <span className="text-yellow-400 font-extrabold text-xs">Rs. {sizePrice}</span>
                              </div>

                              {qty === 0 ? (
                                <button
                                  onClick={() => handleAddToCart(item, sizeKey.toUpperCase(), sizePrice)}
                                  className="bg-red-600 hover:bg-red-500 text-white font-black text-[11px] px-2.5 py-1.5 rounded-lg transition-colors flex items-center shadow-md shadow-red-950/50"
                                >
                                  <Plus className="w-3 h-3 mr-0.5" /> Add
                                </button>
                              ) : (
                                <div className="flex items-center space-x-1.5 bg-neutral-900 border border-neutral-700 px-2 py-1 rounded-lg">
                                  <button onClick={() => handleRemoveFromCart(cartKey)} className="text-neutral-400 hover:text-white"><Minus className="w-3 h-3" /></button>
                                  <span className="text-white font-bold text-xs">{qty}</span>
                                  <button onClick={() => handleAddToCart(item, sizeKey.toUpperCase(), sizePrice)} className="text-yellow-400 hover:text-white"><Plus className="w-3 h-3" /></button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center pt-2 border-t border-neutral-800">
                      <span className="text-yellow-400 font-extrabold text-base">Rs. {item.price}</span>
                      {(() => {
                        const cartKey = `${item.id}-Standard`;
                        const qty = cart[cartKey] ? cart[cartKey].qty : 0;
                        return qty === 0 ? (
                          <button 
                            onClick={() => handleAddToCart(item, 'Standard', item.price)}
                            className="bg-red-600 hover:bg-red-500 text-white font-black text-xs px-4 py-2 rounded-xl shadow-lg shadow-red-950/50 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5 mr-1" /> Add
                          </button>
                        ) : (
                          <div className="flex items-center space-x-2 bg-black border border-neutral-800 px-2.5 py-1.5 rounded-xl">
                            <button onClick={() => handleRemoveFromCart(cartKey)} className="text-neutral-400 hover:text-white"><Minus className="w-3 h-3" /></button>
                            <span className="text-white font-bold text-xs">{qty}</span>
                            <button onClick={() => handleAddToCart(item, 'Standard', item.price)} className="text-yellow-400 hover:text-white"><Plus className="w-3 h-3" /></button>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Cart & Checkout Form Sidebar */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-red-600/40 rounded-3xl p-6 sticky top-6 shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-red-600/15 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-lg font-black text-white mb-4 pb-3 border-b border-neutral-800 flex items-center">
                <ShoppingBag className="w-4 h-4 text-yellow-400 mr-2" /> Your Cart ({totalItemsCount})
              </h3>

              {cartItems.length === 0 ? (
                <p className="text-neutral-400 text-xs text-center py-8">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    {cartItems.map((item) => {
                      const cartKey = `${item.id}-${item.size}`;
                      return (
                        <div key={cartKey} className="flex justify-between items-center text-xs bg-black/70 p-2.5 rounded-xl border border-neutral-800 shadow-inner">
                          <div>
                            <p className="text-white font-bold">{item.name} {item.size !== 'Standard' && <span className="text-yellow-400">({item.size})</span>}</p>
                            <p className="text-yellow-400 font-semibold">Rs. {item.price} x {item.qty}</p>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <button onClick={() => handleRemoveFromCart(cartKey)} className="bg-neutral-800 text-neutral-300 p-1 rounded-lg"><Minus className="w-3 h-3" /></button>
                            <span className="text-white font-bold px-1">{item.qty}</span>
                            <button onClick={() => handleAddToCart(item, item.size, item.price)} className="bg-neutral-800 text-yellow-400 p-1 rounded-lg"><Plus className="w-3 h-3" /></button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-3 border-t border-neutral-800 space-y-1.5 text-xs text-neutral-200">
                    <div className="flex justify-between"><span>Subtotal:</span> <span className="font-bold text-white">Rs. {totalAmount}</span></div>
                    <div className="flex justify-between"><span>Delivery Charges:</span> <span className="font-bold text-white">Rs. 150</span></div>
                    <div className="flex justify-between text-sm font-black pt-2 border-t border-neutral-800 text-yellow-400">
                      <span>Total Bill:</span> <span>Rs. {totalAmount + 150}</span>
                    </div>
                  </div>

                  <form onSubmit={handleWhatsAppCheckout} className="space-y-3 pt-3 border-t border-neutral-800">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-300 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Muhammad Faizan"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-black/80 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:border-red-600 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-300 mb-1">Phone Number (Contact)</label>
                      <input 
                        type="tel" 
                        placeholder="e.g. 03001234567"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full bg-black/80 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:border-red-600 outline-none transition"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-[11px] font-bold text-neutral-300">Delivery Address / Location</label>
                        <button
                          type="button"
                          onClick={handleGetLiveLocation}
                          className="text-[10px] bg-red-600/20 hover:bg-red-600/30 text-yellow-400 font-bold px-2 py-0.5 rounded-lg flex items-center space-x-1 border border-red-500/30 transition-colors"
                        >
                          <Navigation className="w-3 h-3 mr-1 text-red-500" />
                          <span>{locationLoading ? 'Locating...' : 'Get Live GPS'}</span>
                        </button>
                      </div>
                      <input 
                        type="text" 
                        placeholder="Type address or click 'Get Live GPS'"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full bg-black/80 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:border-red-600 outline-none transition"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:from-red-500 hover:to-yellow-400 text-black font-black text-xs py-3.5 rounded-xl transition-all shadow-xl shadow-red-950/60 flex items-center justify-center space-x-2 mt-2 border border-yellow-400/40"
                    >
                      <Send className="w-4 h-4 text-black" />
                      <span>Send Order via WhatsApp</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Foodpanda Style Sticky Bottom Cart Bar */}
      {totalItemsCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-md border-t border-red-600/50 p-4 shadow-2xl animate-slideUp">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-black font-black px-3 py-1.5 rounded-xl text-xs shadow-md">
                {totalItemsCount} Items
              </div>
              <div>
                <p className="text-white font-extrabold text-sm">Rs. {totalAmount + 150}</p>
                <p className="text-[10px] text-neutral-400">Incl. delivery charges</p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:from-red-500 hover:to-yellow-400 text-black font-black px-5 py-2.5 rounded-xl text-xs shadow-lg shadow-red-950/50 flex items-center space-x-1.5 border border-yellow-400/40 transition-transform active:scale-95"
            >
              <span>View Cart & Checkout</span>
              <ChevronUp className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      )}
{/* Foodpanda Style Cart Modal / Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center animate-fadeIn">
          <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border-t border-red-600/50 w-full max-w-lg rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-neutral-800">
              <h3 className="text-lg font-black text-white flex items-center">
                <ShoppingBag className="w-5 h-5 text-yellow-400 mr-2" /> Your Cart ({totalItemsCount})
              </h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-xl"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2.5 max-h-40 overflow-y-auto pr-1">
                {cartItems.map((item) => {
                  const cartKey = `${item.id}-${item.size}`;
                  return (
                    <div key={cartKey} className="flex justify-between items-center text-xs bg-black/70 p-3 rounded-xl border border-neutral-800 shadow-inner">
                      <div>
                        <p className="text-white font-bold">{item.name} {item.size !== 'Standard' && <span className="text-yellow-400">({item.size})</span>}</p>
                        <p className="text-yellow-400 font-semibold">Rs. {item.price} x {item.qty}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => handleRemoveFromCart(cartKey)} className="bg-neutral-800 text-neutral-300 p-1.5 rounded-lg"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="text-white font-bold px-1 text-sm">{item.qty}</span>
                        <button onClick={() => handleAddToCart(item, item.size, item.price)} className="bg-neutral-800 text-yellow-400 p-1.5 rounded-lg"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-neutral-800 space-y-1.5 text-xs text-neutral-200">
                <div className="flex justify-between"><span>Subtotal:</span> <span className="font-bold text-white">Rs. {totalAmount}</span></div>
                <div className="flex justify-between"><span>Delivery Charges:</span> <span className="font-bold text-white">Rs. 150</span></div>
                <div className="flex justify-between text-sm font-black pt-2 border-t border-neutral-800 text-yellow-400">
                  <span>Total Bill:</span> <span>Rs. {totalAmount + 150}</span>
                </div>
              </div>

              <form onSubmit={(e) => { handleWhatsAppCheckout(e); setIsCartOpen(false); }} className="space-y-3 pt-3 border-t border-neutral-800">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-300 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Muhammad Faizan"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-black/80 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-red-600 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-300 mb-1">Phone Number (Contact)</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 03001234567"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-black/80 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-red-600 outline-none transition"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-bold text-neutral-300">Delivery Address / Location</label>
                    <button
                      type="button"
                      onClick={handleGetLiveLocation}
                      className="text-[10px] bg-red-600/25 hover:bg-red-600/40 text-yellow-400 font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1 border border-red-500/40 transition-colors"
                    >
                      <Navigation className="w-3 h-3 mr-1 text-red-500" />
                      <span>{locationLoading ? 'Locating...' : 'Get Live GPS'}</span>
                    </button>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Type address or click 'Get Live GPS'"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full bg-black/80 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-red-600 outline-none transition"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hover:from-red-500 hover:to-yellow-400 text-black font-black text-xs py-3.5 rounded-xl transition-all shadow-xl shadow-red-950/60 flex items-center justify-center space-x-2 mt-2 border border-yellow-400/40"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Order via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
