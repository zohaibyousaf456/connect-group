import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="absolute -top-1/4 right-0 w-1/2 h-full rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center p-12 lg:p-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/b.JPG"
                  alt="Professional businesswoman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl"
              >
                <div className="text-5xl font-bold mb-2">15k+</div>
                <div className="text-sm uppercase tracking-wider font-medium">
                  Businesses<br />Empowered
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <div className="w-6 h-6 bg-white rounded-lg transform rotate-45" />
                </div>
                <span className="text-blue-400 font-semibold">Launch strong in the UAE</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
                Elevate your Business with our Dedicated Guidance at Every Turn
              </h2>

              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Whether you're just starting out or scaling up, our team ensures a smooth, compliant, and confident journey through the UAE business landscape.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-3">
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
