'use client';

import dynamic from 'next/dynamic';
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import BrandsSection from "@/components/brands-section";
import { JourneySection } from "@/components/journey-section";
import { VideoSection } from "@/components/video-section";
import TestimonialsSection from "@/components/testimonials-section";
import { StatsSection } from "@/components/stats-section";
import ContactForm from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <JourneySection />
      <VideoSection />
      <TestimonialsSection />
      <BrandsSection />
      <CTASection />
      <ContactForm />
    </main>
  );
}