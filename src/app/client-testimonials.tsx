"use client";

import { useState } from "react";
import EventContentCard from "@/components/event-content-card";

const GYM_TESTIMONIALS = [
  {
    id: 1,
    title: "Achieved My Fitness Goals!",
    des: "EnergyVault has transformed my life! The expert trainers and supportive environment helped me lose 20 pounds and build muscle. The personalized workout plans are exceptional!",
    name: "Jakra Chulwali",
    position: "Entrepreneur",
    panel: "Client Success Story",
    img: "/image/avatar1.jpg",
  },
  {
    id: 2,
    title: "State-of-the-Art Equipment",
    des: "The gym's facilities are top-notch! The equipment is modern, and the spacious workout areas allow for a comfortable and efficient workout experience. Highly recommend EnergyVault!",
    name: "Muchki Hashi",
    position: "Marketing Executive",
    panel: "Facility Feedback",
    img: "/image/avatar2.jpg",
  },
  {
    id: 3,
    title: "Amazing Personal Trainers",
    des: "The trainers at EnergyVault are knowledgeable and genuinely care about your progress. My trainer kept me motivated and on track, and I've seen incredible results.",
    name: "Kallu Mama",
    position: "Software Engineer,bdcalling",
    panel: "Trainer Feedback",
    img: "/image/avatar3.jpg",
  },
  {
    id: 4,
    title: "Comprehensive Fitness Journey",
    des: "EnergyVault isn't just a gym, it's a complete fitness transformation center. Their holistic approach has been life-changing!",
    name: "Sarah Johnson",
    position: "Fitness Enthusiast",
    panel: "Client Success Story",
    img: "/image/avatar4.jpg",
  },
  {
    id: 5,
    title: "Cutting-Edge Gym Facilities",
    des: "The equipment here is incredible. Clean, modern, and perfectly maintained. It's like a fitness technology showcase!",
    name: "Michael Chen",
    position: "Tech Professional",
    panel: "Facility Feedback",
    img: "/image/avatar5.jpg",
  },
  {
    id: 6,
    title: "Expert Training Guidance",
    des: "My personal trainer developed a program that perfectly matches my fitness goals. The expertise is truly remarkable!",
    name: "Emily Rodriguez",
    position: "Corporate Manager",
    panel: "Trainer Feedback",
    img: "/image/avatar6.jpg",
  }
];

export function EventContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering logic
  const filteredTestimonials = activeFilter === "All" 
    ? GYM_TESTIMONIALS 
    : GYM_TESTIMONIALS.filter(testimonial => {
      switch(activeFilter) {
        case "Success": 
          return testimonial.panel === "Client Success Story";
        case "Facility": 
          return testimonial.panel === "Facility Feedback";
        case "Trainer": 
          return testimonial.panel === "Trainer Feedback";
        default: 
          return true;
      }
    });

  // Button filter options
  const filterOptions = [
    { value: "All", label: "All Reviews" },
    { value: "Success", label: "Fitness Goals" },
    { value: "Facility", label: "Facility Feedback" },
    { value: "Trainer", label: "Trainer Feedback" }
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 space-x-2 md:space-x-4 overflow-x-auto">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`
                px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-lg transition-all duration-300
                relative overflow-hidden
                ${activeFilter === option.value 
                  ? 'bg-[rgb(239,108,0)] text-white shadow-xl shadow-[rgba(239,108,0,0.4)]' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[rgb(239,108,0)]' }
                
                hover:shadow-md hover:shadow-[rgba(239,108,0,0.3)] 
                
                /* Glow effect on hover */
                hover:box-shadow-[0_0_10px_rgba(239,108,0,0.8),_0_0_15px_rgba(239,108,0,0.8)]
              `}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Testimonials Container */}
        <div className="space-y-6">
          {filteredTestimonials.length > 0 ? (
            filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full"
              >
                <EventContentCard 
                  {...testimonial} 
                />
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              No testimonials found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default EventContent;
