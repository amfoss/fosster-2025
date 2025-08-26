'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import MapComponent from "./MapComponent";
import PillTabs from "./Pill";

const travelData = {
  aero: {
    title: "Kempegowda International Airport (BLR)",
    description:
      "Main gateway to Bangalore, located ~40km from city center. Modern facilities with good connectivity.",
    options: [
      { type: "Ola / Uber", price: "₹1200", time: "1 hr" },
      { type: "Prepaid Taxi", price: "₹1400", time: "1 hr" },
      { type: "Airport Shuttle", price: "₹250", time: "1.5 hrs" },
    ],
    coordinates: [13.1991, 77.7033],
  },
  bus: {
    title: "Major Bus Stations",
    description: "Well connected KSRTC and BMTC services across the city.",
    stations: [
      { name: "Kempegowda Bus Station (Majestic)", coords: [12.9757, 77.5728], note: "City center, main hub", type: 'bus' },
      { name: "Shantinagar Bus Station", coords: [12.9472, 77.5937], note: "South Bangalore", type: 'bus' },
      { name: "Shivajinagar Bus Station", coords: [12.9818, 77.6053], note: "City center", type: 'bus' },
    ],
    coordinates: [12.9778, 77.5725],
  },
  train: {
    title: "Major Train Stations",
    description: "Direct connections to all major cities.",
    stations: [
      { name: "KSR Bengaluru City (SBC)", coords: [12.9756, 77.5697], note: "City center", type: 'train' },
      { name: "Yesvantpur (YPR)", coords: [13.0076, 77.5683], note: "North", type: 'train' },
      { name: "Bengaluru Cantt (BNC)", coords: [12.9981, 77.5929], note: "Central", type: 'train' },
    ],
    coordinates: [12.9784, 77.5684],
  },
  local: {
    title: "Local Transport",
    description: "Metro and cabs for local commute across the city.",
    options: [
      { type: "Metro", price: "₹50-₹100", time: "10-30 min" },
      { type: "Ola/Uber", price: "₹200-₹500", time: "15-45 min" },
    ],
    coordinates: [12.9716, 77.5946],
  },
};

export default function Venue() {
  const [selectedTab, setSelectedTab] = useState("aero");
  const data = travelData[selectedTab];

  return (
    <div id = "Venue" className="flex flex-col rounded-[5vw] bg-[#1b1b1f] px-[10.5vw] pt-[6vw] pb-[10.5vw] text-white w-full h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left -mt-6">
        How to reach the{" "}
        <span className="bg-[#a5a1ff] text-transparent bg-clip-text">
          venue?
        </span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-x-8 gap-y-6 items-start flex-grow">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          <div>
            <h2 className="text-5xl text-font-semibold italic text-yellow-200 leading-tight">{data.title}</h2>
            <p className="text-md text-gray-400 mt-5 max-w-[360px]">
              {data.description}
            </p>
          </div>
          <div className="mt-7 w-[600px] md:w-[600px] h-[250px] bg-[#2a2a2a] rounded-[20px] p-8 space-y-4">
            {data.options &&
              data.options.map((opt, idx) => (
                <div key={idx} className="flex justify-between text-lg">
                  <span className="font-medium">{opt.type}</span>
                  <span className="text-gray-300">{opt.price} • {opt.time}</span>
                </div>
              ))}
            {data.stations &&
              data.stations.map((s, idx) => (
                <div key={idx} className="flex justify-between text-lg">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-gray-400">{s.note}</span>
                </div>
              ))}
          </div>
        </motion.div>
        <div className="rounded-[28px] bg-[#2a2a2a] h-[600px] max-w-[700px] w-full overflow-hidden ml-auto">
          <div className="w-full h-full">
            <MapComponent mode={selectedTab} data={data} />
          </div>
        </div>
      </div>
      <div className="mt-6 w-full flex items-center justify-center">
        <PillTabs
          fill={false}
          options={[
            { label: "Aero", value: "aero" },
            { label: "Bus", value: "bus" },
            { label: "Train", value: "train" },
            { label: "Local", value: "local" },
          ]}
          onTabChange={(val) => setSelectedTab(val)}
          selected={selectedTab}
        />
      </div>
    </div>
  );
}