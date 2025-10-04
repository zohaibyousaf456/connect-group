'use client';

import { ReactNode } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}



