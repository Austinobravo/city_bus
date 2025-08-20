"use client";

import { BusFront, Star } from "lucide-react";
import React from "react";

interface Stop {
  name: string;
  time: string;
  status: string;
  expected?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const stops: Stop[] = [
  { name: "Douglas Road Bus Stop", time: "07:30am", status: "On time", isFirst: true },
  { name: "Emmanuel College Bus Stop", time: "08:30am", status: "On time" },
  { name: "Nekede Junction", time: "09:00am", status: "On time" },
  { name: "IMSUTH Junction", time: "09:30am", status: "Exp. 09:35am" },
  { name: "Relief Market Bus Stop", time: "09:45am", status: "Exp. 09:48am" },
  { name: "Ikenegbu Layout Bus Stop", time: "09:50am", status: "On time" },
  { name: "Wetheral Road", time: "09:55am", status: "Exp. 09:56am", isLast: true },
];

export default function BusRoute() {
  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center not-sm:flex-wrap gap-5 justify-between mb-6">
        <div className="flex items-center gap-2">
            <div className="bg-gray-50 rounded-lg border border-solid w-fit p-2">
                <BusFront />
            </div>
          <h2 className="lg:text-lg text-base font-semibold">Bus 7A Douglas Junction - Imsun Junction</h2>
        </div>
        <button className="flex items-center gap-1 bg-citybus-primary px-3 py-1 rounded-full text-white text-sm">
          <Star className="w-4 h-4" />
          Save
        </button>
      </div>

      {/* Timeline */}
      <div className="flex">
        {/* Left side: timeline + stops */}
        <div className="relative flex flex-col items-center mr-6">
          {/* vertical line */}
          <div className="absolute top-0 bottom-0 w-px bg-gray-600"></div>

          {stops.map((stop, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              {/* Marker */}
              <div
                className={`
                  w-4 h-4 bg-white 
                  ${stop.isFirst || stop.isLast ? "rotate-45" : "rounded-full"} 
                  border-2 border-blue-500
                  mb-12
                `}
              ></div>
            </div>
          ))}
        </div>

        {/* Right side: names & times */}
        <div className="flex-1">
          {stops.map((stop, idx) => (
            <div key={idx} className="flex justify-between items-start mb-8">
              <span
                className={`text-sm ${idx > stops.length - stops.length / 2 ? "font-semibold" : "text-gray-300"}`}
              >
                {stop.name}
              </span>
              <div className="text-right text-xs">
                <p>{stop.time}</p>
                <p
                  className={
                    stop.status.toLowerCase().includes("on time")
                      ? "text-green-500"
                      : "text-blue-400"
                  }
                >
                  {stop.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
