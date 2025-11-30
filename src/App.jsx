import React from 'react';
import { MdHexagon } from 'react-icons/md';
import Barrier from './components/Barrier';

const App = () => {

  // --- I. DATA: Dashboard ma'lumotlari (Konstantalar) ---

  const METRICS = [
    { label: 'Total Sales', value: '$26,433,856', color: 'text-red-600' },
    { label: 'Total Orders', value: '442', color: 'text-gray-100' },
    { label: 'Total Customer', value: '54', color: 'text-gray-100' },
  ];

  const MODELS = ['INTEGRA', 'RDX', 'TLX', 'MDX'];

  const YEAR_DATA = [
    { year: 2020, width: '80%' },
    { year: 2021, width: '100%' },
    { year: 2022, width: '53.3%' },
  ];
  const MAX_COLOR_VALUE = 100;

  const COLOR_SALES = [
    { value: 92, color: 'bg-white', iconClass: 'border border-gray-400' },
    { value: 76, color: 'bg-gray-500', iconClass: '' },
    { value: 67, color: 'bg-green-500', iconClass: '' },
    { value: 67, color: 'bg-red-600', iconClass: '' },
    { value: 59, color: 'bg-blue-600', iconClass: '' },
    { value: 59, color: 'bg-yellow-500', iconClass: '' },
  ];

  // --- II. ASOSIY RENDER QISMI (Barcha JSX) ---

  return (
    // Umumiy fon va konteyner
    <div className=" max-h-screen text-gray-100 p-0  font-sans">
      <div className="w-full mx-auto bg-[#1e1e1e] min-h-screen  overflow-hidden">

        {/* A. Header Qismi (div) */}
        <div className="flex justify-between items-center px-4 py-3 border-b-2 border-black  ">
          <div className="flex items-center space-x-4">
            <div className="text-white text-xl font-bold">ACURA</div>
            <div className="text-gray-300 text-sm hidden sm:block">Sales Dashboard software</div>
          </div>

          {/* Model Navigatsiyasi (nav emas, div) */}
          <div className="flex space-x-20 text-xs sm:text-sm font-semibold">
            {MODELS.map((model) => (
              <span
                key={model}
                className={`cursor-pointer ${model === 'INTEGRA' ? '' : 'text-gray-400 hover:text-white'}`}
              >
                {model}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="text-gray-400">FN</span>
            <div className="w-5 h-5 bg-gray-600 rounded-full cursor-pointer"></div>
          </div>
        </div>

        {/* B. Yuqori Asosiy Kontent (4 ustunlik grid) */}
        <div className="grid h-115 grid-cols-1 lg:grid-cols-4 gap-4 p-4">

          {/* 1. Chap ustun: Asosiy Metrikalar */}
          <div className="lg:col-span-1 flex flex-col justify-between space-y-6  lg:px-0">
            {METRICS.map((metric, index) => (
              <div className='border-l-4 pl-4 rounded p-5 shadow-black/50 shadow-[0_0_10px_0] border-b-amber-100 ' key={index}>
                <p className={`text-5xl font-extrabold ${metric.color}`}>{metric.value}</p>
                <p className="text-md text-gray-400 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* 2. O'rta va O'ng qismlar: Model va Yillik Savdo (3 ustunlik grid) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 ">

            {/* O'rta: Integra Hero (Rasm) - 2 ustun egallaydi */}
            <div className="md:col-span-2 relative flex items-center justify-center  overflow-hidden rounded">

              {/* Avtomobil rasmi taqlidi */}
              <div className='h-full w-full relative'>
                <div className='absolute bottom-20 left-30'>
                  <Barrier />
                </div>
                <img className='border h-full w-full' src="" alt="" />
              </div>
              {/* Model Ma'lumotlari Bloki */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right">
                <h2 className="text-5xl font-extrabold text-white">INTEGRA</h2>
                <p className="text-lg text-gray-300 mt-1">Premium Sport Compact</p>
                <p className="text-md text-red-500 mt-2">$31,300*</p>
              </div>
            </div>

            {/* O'ng Ustun: Yillik Savdo Grafigi - 1 ustun egallaydi */}
            <div className="bg-[#2a2a2a] p-5 rounded h-full ">
              <h3 className="text-xl text-center  font-semibold mb-4">Sales By Year</h3>
              <div className='flex justify-between gap-2 h-[80%]'>
                <ul className='border-white flex relative gap-15 flex-col justify-center  '>
                  <ul className='flex items-center'>
                    <li className='w-full '>2020</li>
                    <span className='h-10 left-11 absolute text-[11px] w-48 bg-yellow-500 text-gray-600 z-10 flex items-center justify-end'> <p>$10M</p></span>
                  </ul>
                  <ul className='flex items-center'>
                    <li className='w-full '>2021</li>
                    <span className='h-10 left-11 absolute text-[11px] w-70 bg-yellow-500 text-gray-600 z-10 flex items-center justify-end'> <p>$15M</p></span>
                  </ul>
                  <ul className='flex items-center'>
                    <li className='w-full '>2022</li>
                    <span className='h-10 left-11 absolute text-[11px] w-25 bg-yellow-500 text-gray-600 z-10 flex items-center justify-end'> <p>$6M</p></span>
                  </ul>
                </ul>
                <div className='border-gray-500 border-l-2 border-r-2 border-dashed  w-1/2 relative'>
                  <p className='absolute text-[12px] -bottom-5 -left-3'>$0M</p>
                  <p className='absolute text-[12px] -bottom-5 -right-4'>$10M</p>
                </div>
                <div className='border-gray-500 border-r-2 border-dashed w-1/2 relative'>
                  <p className='absolute text-[12px] -bottom-5 -right-4'>$20M</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* C. Pastki Kontent Tuzilmasi (3 ustunlik grid) */}
        <div className="flex h-90 justify-between gap-4 p-4 pt-0">

          {/* 1. Pastki Chap: Rang Bo'yicha Savdo Grafigi */}
          <div className="bg-[#2a2a2a] w-[30%] p-4 rounded shadow-lg">
            <h3 className="text-sm font-semibold mb-4">Sales By Paint Color</h3>
            <div className='flex justify-around h-[80%] items-end'>
              <ul className='flex items-center justify-center  flex-col'>
                <li className=' text-[11px] text-white h-50 w-6 text-center bg-neutral-700'>127</li>
                <MdHexagon size={60} />
              </ul>
              <ul className='flex items-center  flex-col'>
                <li className=' text-[11px] text-white h-45 w-6 text-center bg-neutral-700'>122</li>
                <MdHexagon color='gray' size={60} />
              </ul>
              <ul className='flex items-center  flex-col'>
                <li className=' text-[11px] text-white h-40 w-6 text-center bg-neutral-700'>107</li>
                <MdHexagon color='green' size={60} />
              </ul>
              <ul className='flex items-center  flex-col'>
                <li className=' text-[11px] text-white h-35 w-6 text-center bg-neutral-700'>96</li>
                <MdHexagon color='blue' size={60} />
              </ul>
              <ul className='flex items-center  flex-col'>
                <li className=' text-[11px] text-white h-30 w-6 text-center bg-neutral-700'>83</li>
                <MdHexagon color='red' size={60} />
              </ul>
              <ul className='flex items-center  flex-col'>
                <li className=' text-[11px] text-white h-25 w-6 text-center bg-neutral-700'>72</li>
                <MdHexagon color='yellow' size={60} />
              </ul>
            </div>
          </div>

          {/* 2. Pastki O'rta: Kelishuv Hajmi Grafigi */}
          <div className="flex w-[30%] flex-col items-center bg-[#2d2d2d] text-white p-6 rounded-xl">
            <h2 className="text-lg mb-4">Sales by Deal Size</h2>

            <div className="relative w-40 h-40 flex mt-10 items-center justify-center">

              {/* Donut Chart */}
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(
              #FFB300 0deg 140deg,      /* Medium */
              #FFE9A9 140deg 350deg,    /* Small */
              #FDD36A 350deg 360deg     /* Large */
            )`
                }}
              ></div>

              {/* Center hole */}
              <div className="absolute w-28 h-28 bg-[#2d2d2d] rounded-full"></div>

              {/* Labels */}
              <span className="absolute -top-5 text-sm text-gray-300">Large 16</span>
              <span className="absolute -right-20 top-1/2 -translate-y-1/2 text-sm text-gray-300">
                Medium 304
              </span>
              <span className="absolute -left-17 top-1/2 -translate-y-1/2 text-sm text-gray-300">
                Small 287
              </span>
            </div>
          </div>

          {/* 3. Pastki O'ng: Mamlakat Bo'yicha Savdo Grafigi (Xarita) */}
          <div className="bg-[#2a2a2a] w-[50%] p-3 rounded shadow-lg h-full">
            <h3 className="text-lg font-semibold text-center">Sales By Country</h3>
            <img className='w-full h-[95%] object-cover' src="https://pictures.by.trbna.com/image/44356feb-93f6-4254-9c93-72e2e0ac732a?width=1920&quality=70" alt="a" />
          </div>
        </div>

        {/* D. Footer Qismi (div) */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 text-xs text-gray-500 border-t border-gray-700 mt-4">
          <div className='flex items-center space-x-2 mb-2 sm:mb-0'>
            <div className='w-4 h-4 rounded-full border-2 border-green-500 bg-black'></div>
            <span>MetaShellz | Reach Us: </span>
            <span className='text-sm cursor-pointer'>✉️</span>
          </div>
          <span className='text-[10px] sm:text-xs'>
            © 2023 Microsoft Corporation. | <a href="#" className="underline hover:text-white">Terms</a>
          </span>
        </div>

      </div>
    </div>
  );
};

export default App;