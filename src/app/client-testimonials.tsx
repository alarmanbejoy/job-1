"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import EventContentCard from "@/components/event-content-card";

const GYM_TESTIMONIALS = [
  {
    title: "Achieved My Fitness Goals!",
    des: "EnergyVault has transformed my life! The expert trainers and supportive environment helped me lose 20 pounds and build muscle. The personalized workout plans are exceptional!",
    name: "Jakra Chulwali",
    position: "Entrepreneur",
    panel: "Client Success Story",
    img: "/image/avatar1.jpg",
  },
  {
    title: "State-of-the-Art Equipment",
    des: "The gym's facilities are top-notch! The equipment is modern, and the spacious workout areas allow for a comfortable and efficient workout experience. Highly recommend EnergyVault!",
    name: "Muchki Hashi",
    position: "Marketing Executive",
    panel: "Facility Feedback",
    img: "/image/avatar2.jpg",
  },
  {
    title: "Amazing Personal Trainers",
    des: "The trainers at EnergyVault are knowledgeable and genuinely care about your progress. My trainer kept me motivated and on track, and I’ve seen incredible results.",
    name: "Kallu Mama",
    position: "Software Engineer,bdcalling",
    panel: "Trainer Feedback",
    img: "/image/avatar3.jpg",
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="All" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="All" className="font-medium">
              All Reviews
            </Tab>
            <Tab value="Success" className="font-medium">
              Fitness Goals
            </Tab>
            <Tab value="Facility" className="font-medium">
              Facility Feedback
            </Tab>
            <Tab value="Trainer" className="font-medium">
              Trainer Feedback
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {GYM_TESTIMONIALS.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
