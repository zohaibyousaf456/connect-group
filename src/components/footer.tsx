'use client';

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const navigation = {
  business: [
    { name: "Connect Resources", href: "#" },
    { name: "C-UAE", href: "#" },
    { name: "Connect Freelance", href: "#" },
    { name: "Connect Zone", href: "#" },
    { name: "Connect HR", href: "#" },
  ],
  industries: [
    { name: "Staff Outsourcing", href: "#" },
    { name: "Employer of Record and PEO", href: "#" },
    { name: "Freelance Visa", href: "#" },
    { name: "Business Center", href: "#" },
    { name: "Company Formation", href: "#" },
  ],
  company: [
    { name: "About us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Insights", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Connect Group</span>
            </Link>
            <p className="text-gray-400 text-base">
              Empowering businesses with world-class services in Dubai, Saudi
              Arabia & beyond.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  BUSINESS
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.business.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  INDUSTRIES
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.industries.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  COMPANY
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  CONTACT
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-400">
                    804, City Tower 2, Sheikh Zayed Road, Dubai, United Arab
                    Emirates
                  </li>
                  <li>
                    <Link
                      href="tel:+97141234567"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      +971 4 123 4567
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:info@connectgroup.co"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      info@connectgroup.co
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Connect Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}