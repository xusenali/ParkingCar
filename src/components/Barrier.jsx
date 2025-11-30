import React, { useState } from 'react';

const Barrier = () => {
  // `isOpen` - shlagbaumning holatini (ochiq/yopiq) boshqaradi
  const [isOpen, setIsOpen] = useState(false);

  // Holatni o'zgartiruvchi funksiya
  const toggleBarrier = () => {
    setIsOpen(!isOpen);
  };

  // Tailwind CSS klasslari shlagbaumning holatiga qarab o'zgaradi:
  // - `rotate-0` (yopiq holat)
  // - `-rotate-45` (ochiq holat) - 45 daraja pastga egiladi
  const barrierStyle = isOpen
    ? 'transform -rotate-45 origin-top-left'
    : 'transform rotate-0 origin-top-left';

  return (
    <div className="flex flex-col items-center justify-center p-4">
      
      {/* Ochish/Yopish tugmasi */}
      <button
        onClick={toggleBarrier}
        className={`px-6 py-3 mb-10 text-lg font-semibold text-white rounded-lg shadow-lg transition duration-300 ease-in-out 
          ${isOpen 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-green-600 hover:bg-green-700'
          }`}
      >
        {isOpen ? "Shlagbaumni Yopish" : "Shlagbaumni Ochish"}
      </button>

      {/* Shlagbaum konteyneri */}
      <div className="relative w-full max-w-lg h-24 ">
        
        {/* Shlagbaum turgan joy (masalan, yo'l) */}
       

        {/* Shlagbaum tayanchi (ustuni) */}
        <div className="absolute bottom-0 left-0 w-8 h-24 bg-gray-800 rounded-t-lg shadow-xl z-20">
          {/* Tayanch tepasidagi chiroq */}
          <div className={`w-4 h-4 rounded-full mx-auto mt-2 transition-colors duration-500 
            ${isOpen ? 'bg-green-500 shadow-red-500/50' : 'bg-red-500 shadow-green-500/50 '}`}>
          </div>
        </div>

        {/* Asosiy Shlagbaum paneli */}
        <div 
          className={`absolute bottom-10 left-5 w-64 h-3 bg-red-700 rounded-full shadow-2xl z-10 
            transition-transform duration-700 ease-in-out ${barrierStyle}`}
        >
          {/* Oq/Qizil chiziqlar (estetika uchun) */}
          <div className="flex h-full ">
            <div className="w-1/6 h-full bg-white"></div>
            <div className="w-1/6 h-full bg-red-500"></div>
            <div className="w-1/6 h-full bg-white"></div>
            <div className="w-1/6 h-full bg-red-500"></div>
            <div className="w-1/6 h-full bg-white"></div>
            <div className="w-1/6 h-full bg-red-500 rounded-r-full"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Barrier;