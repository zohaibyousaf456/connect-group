'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const servicesDropdown = [
  {
    category: "Company Setup",
    items: [
      { name: "UAE Free Zone", href: "#freezone" },
      { name: "UAE Mainland", href: "#mainland" },
      { name: "UAE Offshore", href: "#offshore" },
      { name: "Business Licensing", href: "#licensing" },
      { name: "PRO Services", href: "#pro" },
    ]
  },
  {
    category: "IT Services",
    items: [
      { name: "Cybersecurity Solutions", href: "#cybersecurity" },
      { name: "Web Development", href: "#webdev" },
      { name: "Software Development", href: "#software" },
      { name: "CRM & Marketing", href: "#crm" },
    ]
  },
  {
    category: "HR Services",
    items: [
      { name: "Employer of Record", href: "#eor" },
      { name: "Immigration Service", href: "#immigration" },
      { name: "Payroll Services", href: "#payroll" },
      { name: "Employee Benefits", href: "#benefits" },
    ]
  },
  {
    category: "Visa Services",
    items: [
      { name: "Freelance Visa", href: "#freelance" },
      { name: "Business Visa", href: "#business" },
      { name: "Employment Visa", href: "#employment" },
    ]
  }
];

const brandsDropdown = [
  {
    category: "Global Workforce Solutions",
    items: [
      { name: "Connect Resources", href: "#connect-resources" },
      { name: "Connect Resources Saudi", href: "#connect-saudi" },
      { name: "NG Manpower", href: "#ng-manpower" },
      { name: "Kinza HR", href: "#kinza-hr" },
    ]
  },
  {
    category: "Business Setup",
    items: [
      { name: "C-UAE", href: "#c-uae" },
      { name: "Connect FZ", href: "#connect-fz" },
      { name: "Connect Zone", href: "#connect-zone" },
      { name: "UAE Gate", href: "#uae-gate" },
    ]
  },
  {
    category: "HR Software",
    items: [
      { name: "Connect HR", href: "#connect-hr" },
      { name: "Pittant", href: "#pittant" },
    ]
  },
  {
    category: "Real Estate",
    items: [
      { name: "Connect Business Center", href: "#business-center" },
      { name: "Redo", href: "#redo" },
      { name: "LLA Designers", href: "#lla-designers" },
    ]
  }
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Brands", href: "#brands", hasDropdown: true },
  { name: "Insights", href: "/insights" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-semibold text-white tracking-tight">
                Connect Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center text-base font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                          onMouseLeave={handleDropdownClose}
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                              {(item.name === "Services" ? servicesDropdown : brandsDropdown).map((category) => (
                                <div key={category.category}>
                                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                                    {category.category}
                                  </h3>
                                  <ul className="space-y-2">
                                    {category.items.map((subItem) => (
                                      <li key={subItem.name}>
                                        <Link
                                          href={subItem.href}
                                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1"
                                          onClick={handleDropdownClose}
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Let's Talk Button - Right Side */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg border border-gray-200">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-1"
                        >
                          {(item.name === "Services" ? servicesDropdown : brandsDropdown).map((category) => (
                            <div key={category.category} className="mb-3">
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">{category.category}</h4>
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    handleDropdownClose();
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#contact"
              className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}