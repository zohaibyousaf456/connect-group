import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const timeline = [
  {
    year: "2016",
    title: "Foundation",
    description: "Established in Dubai with a vision to simplify business setup and growth in the UAE.",
  },
  {
    year: "2018",
    title: "Service Expansion",
    description: "Launched comprehensive HR solutions and visa services to support growing businesses.",
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "Introduced digital transformation services and expanded IT solutions portfolio.",
  },
  {
    year: "2023",
    title: "Middle East Expansion",
    description: "Extended operations to Saudi Arabia and key Middle Eastern markets.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute -top-1/4 right-0 w-1/2 h-full rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From One Idea to a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
              Powerhouse of Brands
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Helping businesses launch and grow across the Middle East since 2016.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/advice.JPG"
                alt="Our journey"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl"
            >
              <div className="text-5xl font-bold mb-2">9+</div>
              <div className="text-sm uppercase tracking-wider font-medium">
                Years of<br />Excellence
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative space-y-8"
          >
            {/* Timeline line */}
            <div className="absolute left-[26px] top-[48px] bottom-8 w-px bg-gradient-to-b from-blue-400 to-blue-600" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-[22px] w-[13px] h-[13px] rounded-full bg-blue-400 shadow-lg shadow-blue-400/30" />
                
                <div className="bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-700/50 group">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="text-lg text-blue-400 font-semibold mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Button
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Our Journey
          </Button>
        </motion.div>
      </div>
    </section>
  )
}