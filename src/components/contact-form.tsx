'use client';

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="absolute -top-1/4 right-0 w-1/2 h-full rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your business to the next level? Get in touch with
            our experts today.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 p-12 rounded-3xl shadow-lg border border-gray-700/50 relative group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-12">
                <div className="flex items-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-400/10 rounded-2xl transform rotate-6 scale-110 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gray-700 shadow-md group-hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                      <Phone className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Phone</h3>
                    <p className="mt-2 text-lg text-gray-300">+971 4 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary-100/10 rounded-2xl transform rotate-6 scale-110 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gray-800 shadow-md group-hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-blue-400 group-hover:text-blue-400-dark transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Email</h3>
                    <p className="mt-2 text-lg text-gray-300">info@connectgroup.co</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary-100/10 rounded-2xl transform rotate-6 scale-110 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gray-800 shadow-md group-hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-blue-400 group-hover:text-blue-400-dark transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Address</h3>
                    <p className="mt-2 text-lg text-gray-300">
                      804, City Tower 2, Sheikh Zayed Road, Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800 p-12 rounded-3xl shadow-lg border border-gray-700/50 relative"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-white mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`block w-full px-4 py-3 rounded-xl border bg-gray-700 text-white placeholder-gray-400 ${
                      errors.name ? 'border-red-500 focus:border-red-400 focus:ring-red-400' :
                      'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    } shadow-sm transition-colors duration-200`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`block w-full px-4 py-3 rounded-xl border bg-gray-700 text-white placeholder-gray-400 ${
                      errors.email ? 'border-red-500 focus:border-red-400 focus:ring-red-400' :
                      'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    } shadow-sm transition-colors duration-200`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium text-white mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`block w-full px-4 py-3 rounded-xl border bg-gray-700 text-white placeholder-gray-400 ${
                      errors.phone ? 'border-red-500 focus:border-red-400 focus:ring-red-400' :
                      'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    } shadow-sm transition-colors duration-200`}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-base font-medium text-white mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 rounded-xl border bg-gray-700 text-white ${
                      errors.service ? 'border-red-500 focus:border-red-400 focus:ring-red-400' :
                      'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    } shadow-sm transition-colors duration-200`}
                  >
                    <option value="">Select a service</option>
                    <option value="company-setup">Company Setup</option>
                    <option value="visa-services">Visa Services</option>
                    <option value="hr-services">HR Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="legal-services">Legal Services</option>
                  </select>
                  {errors.service && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className={`block w-full px-4 py-3 rounded-xl border bg-gray-700 text-white placeholder-gray-400 ${
                      errors.message ? 'border-red-500 focus:border-red-400 focus:ring-red-400' :
                      'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    } shadow-sm transition-colors duration-200`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-primary-300 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-600-dark hover:shadow-lg hover:shadow-accent/20'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>

                {/* Status messages */}
                <AnimatePresence mode="wait">
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center gap-2 p-4 rounded-xl ${
                        submitStatus === "success"
                          ? "bg-green-50 text-green-800"
                          : "bg-red-50 text-red-800"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span>Message sent successfully! We'll get back to you soon.</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5 text-red-500" />
                          <span>Failed to send message. Please try again later.</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}