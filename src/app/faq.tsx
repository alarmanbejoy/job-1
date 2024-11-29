"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. How do I become a member at EnergyVault?",
    desc: "Becoming a member is easy! Visit our gym or register online through our membership page. Choose the plan that suits you best, fill in your details, and you're ready to start your fitness journey with us!",
  },
  {
    title: "2. What facilities are included in the membership?",
    desc: "Our membership includes access to state-of-the-art equipment, group fitness classes, personal training options, sauna, and locker rooms. We also offer a nutrition consultation service to help you meet your goals.",
  },
  {
    title: "3. Can I bring a guest with me to the gym?",
    desc: "Yes, we offer guest passes! Members can bring a friend or family member for a small guest fee. Please check with the front desk for guest pass availability and terms.",
  },
  {
    title: "4. What are the gym's operating hours?",
    desc: "EnergyVault is open 24/7 to accommodate all schedules. Whether you're an early riser or a night owl, you’ll have access to our facilities whenever you need it.",
  },
  {
    title: "5. Do you offer personal training sessions?",
    desc: "Absolutely! Our certified personal trainers are here to help you achieve your fitness goals with tailored workout plans, motivation, and expert guidance. Contact the front desk or visit our personal training page to learn more.",
  },
  {
    title: "6. Is there a cancellation policy for memberships?",
    desc: "Yes, we offer flexible cancellation policies. You can cancel your membership with a 30-day notice. For more details, please visit our membership terms and conditions page or speak to a staff member.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-16 lg:w-3/5 text-gray-600"
          >
            Got questions about EnergyVault? We've got answers! Browse our FAQs
            to learn more about memberships, facilities, and what makes our gym
            the perfect place to achieve your fitness goals.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-600"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
