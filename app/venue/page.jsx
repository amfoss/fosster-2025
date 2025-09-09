'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { usePill } from '@/app/_contexts/pill';
import { useCallback } from 'react';

const MapComponent = dynamic(() => import('@/components/sections/venue/map_component'), {
   ssr: false,
});

const travelData = {
   aero: {
      title: 'Kempegowda International Airport (BLR)',
      description:
         'Main gateway to Bangalore, located ~40km from city center. Modern facilities with good connectivity.',
      options: [
         { type: 'Ola / Uber', price: '₹1200', time: '1 hr' },
         { type: 'Prepaid Taxi', price: '₹1400', time: '1 hr' },
         { type: 'Airport Shuttle', price: '₹250', time: '1.5 hrs' },
      ],
      coordinates: [13.1991, 77.7033],
   },
   bus: {
      title: 'Major Bus Stations',
      description: 'Well connected KSRTC and BMTC services across the city.',
      stations: [
         {
            name: 'Kempegowda Bus Station (Majestic)',
            coords: [12.9757, 77.5728],
            note: 'City center, main hub',
            type: 'bus',
         },
         {
            name: 'Shantinagar Bus Station',
            coords: [12.9472, 77.5937],
            note: 'South Bangalore',
            type: 'bus',
         },
         {
            name: 'Shivajinagar Bus Station',
            coords: [12.9818, 77.6053],
            note: 'City center',
            type: 'bus',
         },
      ],
      coordinates: [12.9778, 77.5725],
   },
   train: {
      title: 'Major Train Stations',
      description: 'Direct connections to all major cities.',
      stations: [
         {
            name: 'KSR Bengaluru City (SBC)',
            coords: [12.9756, 77.5697],
            note: 'City center',
            type: 'train',
         },
         {
            name: 'Yesvantpur (YPR)',
            coords: [13.0076, 77.5683],
            note: 'North',
            type: 'train',
         },
         {
            name: 'Bengaluru Cantt (BNC)',
            coords: [12.9981, 77.5929],
            note: 'Central',
            type: 'train',
         },
      ],
      coordinates: [12.9784, 77.5684],
   },
   local: {
      title: 'Local Transport',
      description: 'Metro and cabs for local commute across the city.',
      options: [
         { type: 'Metro', price: '₹50-₹100', time: '10-30 min' },
         { type: 'Ola/Uber', price: '₹200-₹500', time: '15-45 min' },
      ],
      coordinates: [12.9716, 77.5946],
   },
};

export default function Venue() {
   const [selectedTab, setSelectedTab] = useState('aero');
   const data = travelData[selectedTab];
   const { setOptions, setHandleClick, setPersist } = usePill();

   const handleTabClick = useCallback((val) => setSelectedTab(val), []);

   useEffect(() => {
      setOptions([
         { label: 'Aero', value: 'aero' },
         { label: 'Bus', value: 'bus' },
         { label: 'Train', value: 'train' },
         { label: 'Local', value: 'local' },
      ]);
      setHandleClick(() => handleTabClick);
      setPersist(true);
   }, [setOptions, setHandleClick, handleTabClick, setPersist]);

   return (
      <div
         id="Venue"
         className="flex min-h-screen w-full flex-col bg-[#1b1b1f] p-[5vw] text-white max-md:pt-[20vw]"
      >
         <h1 className="text-left text-4xl font-bold max-md:text-[4vw] md:text-[1.5vw]">
            How to reach the{' '}
            <span className="bg-[#a5a1ff] bg-clip-text text-transparent">
               venue?
            </span>
         </h1>

         <div className="flex gap-x-[2.5vw] max-md:flex-col max-md:gap-y-[5vw]">
            <div key={selectedTab} className="flex flex-1 flex-col gap-y-[1vw]">
               <div className="">
                  <h2 className="text-[4vw] leading-tight font-semibold text-yellow-200 italic max-md:text-[10vw]">
                     {data.title}
                  </h2>
                  <p className="text-[1.5vw] text-gray-400 max-md:text-[4vw] md:max-w-[40vw]">
                     {data.description}
                  </p>
               </div>
               <div className="space-y-4 rounded-[5vw] bg-[#2a2a2a] p-[4vw] text-[1.5vw] max-md:rounded-[10vw] max-md:p-[8vw] max-md:text-[4vw]">
                  {data.options &&
                     data.options.map((opt, idx) => (
                        <div key={idx} className="flex justify-between">
                           <span className="font-medium">{opt.type}</span>
                           <span className="text-gray-300">
                              {opt.price} • {opt.time}
                           </span>
                        </div>
                     ))}
                  {data.stations &&
                     data.stations.map((s, idx) => (
                        <div key={idx} className="flex justify-between">
                           <span className="font-medium">{s.name}</span>
                           <span className="text-gray-400">{s.note}</span>
                        </div>
                     ))}
               </div>
            </div>
            <div className="ml-auto w-full overflow-hidden rounded-[28px] bg-[#2a2a2a] max-md:h-[50vh] md:h-[37.5vw] md:max-w-[45vw]">
               <div className="h-full w-full">
                  <MapComponent mode={selectedTab} data={data} />
               </div>
            </div>
         </div>
         <div className="mt-6 flex w-full items-center justify-center"></div>
      </div>
   );
}
