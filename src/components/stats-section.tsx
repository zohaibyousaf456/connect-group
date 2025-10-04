"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface CountUpProps {
  end: number
  duration: number
  suffix?: string
  isInView: boolean
}

function CountUp({ end, duration, suffix = "", isInView }: CountUpProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!isInView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const nextCount = Math.floor(progress * end)
      
      if (nextCount !== countRef.current) {
        countRef.current = nextCount
        setCount(nextCount)
      }

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(step)
      }
    }

    frameRef.current = window.requestAnimationFrame(step)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration, isInView])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { number: 9, suffix: "+", label: "Years in UAE" },
  { number: 8, suffix: "", label: "Global Locations" },
  { number: 15, suffix: "k+", label: "Happy Clients" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
      <div className="absolute -top-1/2 -right-1/4 w-2/3 h-full rounded-full bg-blue-100/5 blur-3xl" />
      <div className="absolute -bottom-1/2 -left-1/4 w-2/3 h-full rounded-full bg-blue-100/20 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-900 mb-20 max-w-4xl mx-auto leading-tight"
        >
          Empowering <span className="text-blue-600">15,000+ businesses</span> with world-class services in Dubai, Saudi Arabia & beyond.
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center group"
            >
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-4 transition-transform group-hover:scale-110">
                <CountUp 
                  end={stat.number} 
                  duration={2000} 
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <div className="text-lg text-blue-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Built by people, driven by purpose
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 2016 and based in Dubai, Connect Group brings over 9 years of experience delivering efficient business solutions for individuals and companies across the Middle East.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
