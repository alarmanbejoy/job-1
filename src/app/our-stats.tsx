"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "5,000+",
    title: "Happy Members",
  },
  {
    count: "30+",
    title: "Expert Trainers",
  },
  {
    count: "15,000+ sq ft",
    title: "Training Space",
  },
  {
    count: "365",
    title: "Days Open",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-32 lg:grid-cols-1 lg:gap-16 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h6" color="orange" className="mb-4 font-medium text-lg">
          Our Stats
        </Typography>
        <Typography
          className="text-3xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          Why EnergyVault Stands Out
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 w-full !text-gray-500 lg:w-9/12 text-base"
        >
          Join the EnergyVault Gym family and experience unparalleled fitness
          excellence. From expert trainers to world-class facilities, we’ve got
          everything you need to achieve your health and fitness goals.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-6 gap-x-20">
          {STATS.map(({ count, title }, key) => (
            <div key={key} className="flex flex-col items-center">
              <Typography className="text-2xl font-bold" color="blue-gray">
                {count}
              </Typography>
              <Typography
                className="text-lg font-medium whitespace-nowrap text-center"
                color="blue-gray"
              >
                {title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
