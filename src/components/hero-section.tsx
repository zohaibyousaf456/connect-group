'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Welcome text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-32 text-center relative z-10"
      >
        <h2 className="text-xl text-blue-400 font-medium mb-2">Welcome to</h2>
        <h1 className="text-6xl font-bold text-white mb-4">Connect Group</h1>
        <p className="text-lg text-blue-400">Scroll to see how we connect possibilities</p>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex items-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center lg:text-left space-y-8"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                We created
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                  A Modern Business Ecosystem,
                </span>
                <br />
                Built for What&apos;s Next
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Through business setup, recruitment, visa services, mobility, and
                global workforce solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    Let&apos;s Talk
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-h-[700px]">
                <Image
                  src="/globe.svg"
                  alt="Global Business"
                  fill
                  className="object-contain filter brightness-0 invert"
                  priority
                />
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-20 left-10 w-3 h-3 bg-purple-400 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Launch, Scale, Succeed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { word: "Launch", delay: 1.0 },
              { word: "Scale", delay: 1.2 },
              { word: "Succeed", delay: 1.4 }
            ].map((item, index) => (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                className="text-center group"
              >
                <motion.h3 
                  className="text-6xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.word}
                </motion.h3>
                {index === 2 && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-xl text-gray-300 font-medium"
                  >
                    in the UAE with…
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Connect Group text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-20 text-center"
          >
            <h2 className="text-7xl font-bold text-white mb-6">
              Connect{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
                Group
              </span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-2xl text-gray-300"
            >
              We&apos;ll guide you there
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
      
      {/* Animated wave */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -bottom-1 left-0 right-0"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z"
            fill="#1f2937"
          />
        </svg>
      </motion.div>
    </section>
  );
}