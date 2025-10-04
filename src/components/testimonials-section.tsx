'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Setting up our business was easier than we imagined. Connect Group guided us through every step — smooth, responsive, and efficient.",
    author: "Fatima A",
    role: "Retail Industry",
  },
  {
    id: 2,
    content:
      "Their visa services are the best we've used. Professional, fast, and always reliable.",
    author: "Jonathan K",
    role: "HR Director, Logistics Firm",
  },
  {
    id: 3,
    content:
      "We've expanded across the UAE thanks to Connect's recruitment and EOR support. It's like having an in-house team.",
    author: "Rami D",
    role: "Founder, Tech Start-up",
  },
  {
    id: 4,
    content:
      "Connect Group helped us hire and relocate a team of 15 within a month. Seamless execution!",
    author: "Sara P",
    role: "COO, Hospitality Group",
  },
  {
    id: 5,
    content:
      "Honestly, Connect Group took the stress out of HR for us. Quick setup, easy to use, and always reliable.",
    author: "Walter Daniel",
    role: "HR Manager, Real Estate",
  },
  {
    id: 6,
    content:
      "The IT services provided by Connect Group transformed our digital infrastructure. Their cybersecurity solutions gave us peace of mind.",
    author: "Lisa Chen",
    role: "CTO, Fintech Company",
  },
  {
    id: 7,
    content:
      "Connect Group's legal team helped us navigate complex UAE regulations effortlessly. Their expertise is unmatched.",
    author: "Ahmed Al-Mansouri",
    role: "Managing Director, Trading Company",
  },
  {
    id: 8,
    content:
      "From company formation to ongoing compliance, Connect Group has been our trusted partner for over 3 years.",
    author: "Maria Rodriguez",
    role: "CEO, Consulting Firm",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="absolute -top-1/4 right-0 w-1/2 h-full rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Connect{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Hear from our satisfied clients about their journey with us
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[400px] sm:h-[300px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    next();
                  } else if (swipe > swipeConfidenceThreshold) {
                    previous();
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-gray-800 rounded-3xl shadow-xl p-12 sm:p-16 border border-gray-700/50 relative group">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quote icon with gradient background */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-400/10 rounded-2xl transform rotate-6 scale-110 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gray-700 shadow-md group-hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                      <Quote className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                    </div>
                  </div>

                  <blockquote className="relative text-2xl sm:text-3xl font-medium text-white mb-8 leading-relaxed">
                    {testimonials[currentIndex].content}
                  </blockquote>

                  <div className="relative flex items-center">
                    <div>
                      <div className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center pointer-events-none z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={previous}
              className="pointer-events-auto transform -translate-x-8 w-16 h-16 rounded-full bg-blue-600 shadow-xl hover:shadow-2xl flex items-center justify-center text-white hover:text-blue-200 transition-all duration-300 focus:outline-none border-2 border-blue-500"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="pointer-events-auto transform translate-x-8 w-16 h-16 rounded-full bg-blue-600 shadow-xl hover:shadow-2xl flex items-center justify-center text-white hover:text-blue-200 transition-all duration-300 focus:outline-none border-2 border-blue-500"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-primary-200 hover:bg-primary-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}