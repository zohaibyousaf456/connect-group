'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Users,
  FileText,
  Globe,
  Code,
  Briefcase,
  Home,
  Scale,
} from "lucide-react";

const services = [
  {
    name: "Company Setup",
    description:
      "Start your business in UAE with our comprehensive company formation services across Free Zones and Mainland.",
    icon: Building2,
  },
  {
    name: "IT Services",
    description:
      "From cybersecurity to software development, we provide cutting-edge IT solutions for your business needs.",
    icon: Code,
  },
  {
    name: "HR Services",
    description:
      "Complete HR solutions including recruitment, payroll, and employee management services.",
    icon: Users,
  },
  {
    name: "Visa Services",
    description:
      "Streamlined visa processing for business owners, employees, and their families.",
    icon: FileText,
  },
  {
    name: "Global Mobility",
    description:
      "Seamless relocation services and global expansion support for your business.",
    icon: Globe,
  },
  {
    name: "Outsourcing",
    description:
      "Professional outsourcing solutions for HR, IT, and business processes.",
    icon: Briefcase,
  },
  {
    name: "Real Estate",
    description:
      "Premium office spaces, co-working solutions, and real estate services in prime locations.",
    icon: Home,
  },
  {
    name: "Legal Services",
    description:
      "Expert legal consultation and services for all your business needs in the UAE.",
    icon: Scale,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-gray-900 to-transparent" />
      <div className="absolute -top-1/4 right-0 w-1/2 h-full rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
                Business Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Everything you need to launch, operate, and scale your business in the
              UAE
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className="relative group"
            >
              <div className="h-full rounded-3xl bg-gray-800 p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-700/50">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon with gradient background */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-400/10 rounded-2xl transform rotate-6 scale-110 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-700 shadow-md group-hover:shadow-lg transition-all duration-500">
                    <service.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-500">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}