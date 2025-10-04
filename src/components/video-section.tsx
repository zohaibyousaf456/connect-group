import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="absolute -top-1/4 right-0 w-1/2 h-full rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center p-12 lg:p-16 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Want expert advice on
                  <br />
                  business growth and
                  <br />
                  success in Dubai?
                </h2>
                <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed">
                  Our videos cover solutions and expert advice on today's biggest business challenges. Dive deeper with
                  our YouTube content.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                      <Play className="w-6 h-6 fill-white relative z-10" />
                    </div>
                    Watch Now
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Video preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative h-full min-h-[400px] lg:min-h-0">
                    <Image
                      src="/b.JPG"
                      alt="Business experts discussing growth strategies"
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent" />
                
                {/* Play button overlay */}
                <motion.div
                  initial={false}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="relative group cursor-pointer pointer-events-auto">
                    {/* Ripple effect */}
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping group-hover:bg-white/40" />
                    
                    {/* Play button */}
                    <div className="relative w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-10 h-10 fill-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
