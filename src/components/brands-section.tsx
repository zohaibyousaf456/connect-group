'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Connect Resources",
    description: "Expand your team seamlessly in the UAE",
    category: "Global Workforce Solutions",
    image: "/a.JPG",
  },
  {
    name: "Connect Resources Saudi",
    description: "Powering growth all across Saudi Arabia",
    category: "Global Workforce Solutions",
    image: "/b.JPG",
  },
  {
    name: "Connect Freelance",
    description: "Simple and fast Freelance visas in Dubai",
    category: "Visa Services",
    image: "/c.JPG",
  },
  {
    name: "Connect HR",
    description: "All-in-one cloud HR & payroll system",
    category: "HR Software",
    image: "/e.JPG",
  },
  {
    name: "Connect Legal",
    description: "Get expert legal consultants, anytime, anywhere",
    category: "Legal Services",
    image: "/f.JPG",
  },
  {
    name: "Connect Business Center",
    description: "Workspaces that fit your team's needs",
    category: "Real Estate",
    image: "/g.JPG",
  },
];

const categories = [
  "All",
  "Global Workforce Solutions",
  "Visa Services",
  "HR Software",
  "Legal Services",
  "Real Estate",
];

import { useState, useRef, useEffect } from "react";

export default function BrandsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredBrands = selectedCategory === "All"
    ? brands
    : brands.filter(brand => brand.category === selectedCategory);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (!sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="absolute -top-1/4 right-0 w-1/2 h-full rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where Growth-Driven{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
              Brands
            </span>{" "}
            Come Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our family of brands, each specialized in different aspects of
            business growth and success in the UAE
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12 overflow-x-auto pb-4 scrollbar-hide"
        >
          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

          {/* Slider */}
          <div
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="inline-flex gap-8 px-8 min-w-full">
              {filteredBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0"
                >
                  <div className="group relative h-full bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative aspect-[4/3] rounded-t-3xl overflow-hidden">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
                    </div>

                    <div className="p-8 relative">
                      <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
                        {brand.category}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {brand.name}
                      </h3>
                      <p className="mt-3 text-gray-300 leading-relaxed">
                        {brand.description}
                      </p>
                      <Link
                        href="#"
                        className="mt-6 inline-flex items-center text-blue-400 font-semibold group/link"
                      >
                        Learn more
                        <motion.svg
                          className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </motion.svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}