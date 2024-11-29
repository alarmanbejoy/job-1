"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const GYM_INFO = [
  {
    title: "State-of-the-Art Facilities",
    description:
      "Experience top-tier equipment, modern training areas, and cutting-edge fitness technology designed to help you achieve your goals.",
    subTitle: "Facilities",
  },
  {
    title: "Expert Trainers",
    description:
      "Our certified trainers provide personalized guidance, ensuring your workout plans are safe, effective, and tailored to your needs.",
    subTitle: "Training",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About EnergyVault Gym
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Choose Us?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to EnergyVault Gym, where fitness meets innovation. Whether
        you're a beginner or a seasoned athlete, our gym is designed to inspire,
        motivate, and push you to your limits in a supportive and dynamic
        environment.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {GYM_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Community & Motivation"
            subTitle="Support"
            description="Join a vibrant community of like-minded individuals who share your passion for fitness, health, and personal growth."
          />
        </div>
      </div>
    </section>
    
  );
}

export default AboutEvent;
