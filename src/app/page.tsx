'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';

import Hero from '@/components/sections/Hero';
import Slogan from '@/components/layout/Slogan';
import FAQ from '@/components/sections/FAQ';
import Services from '@/components/sections/ServicesList';
import Portfolio from '@/components/sections/Portfolio';
import Newsletter from '@/components/sections/Newsletter';

// Lazy loading apenas para componentes que não dependem de scroll ou interações complexas
const SolutionsLazy = dynamic(() => import('@/components/sections/Solutions'), {
  loading: () => <div className="min-h-screen bg-brand-navy/5" />,
  ssr: false,
});

const ProcessLazy = dynamic(() => import('@/components/sections/Process'), {
  loading: () => <div className="min-h-screen bg-brand-navy/5" />,
  ssr: false,
});

const BehindLazy = dynamic(() => import('@/components/sections/Behind'), {
  loading: () => <div className="min-h-screen bg-brand-navy/5" />,
  ssr: false,
});

const ContactLazy = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="min-h-screen bg-brand-navy/5" />,
  ssr: false,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingScreen />;
  }

  return (
    <div className="overflow-hidden bg-brand-offwhite">
      <LoadingScreen />
      <Header />
      <Hero/>
      <SolutionsLazy/>
      <Portfolio/>
      <Newsletter />
      <Services/>
      <ProcessLazy />
      <BehindLazy/>
      <ContactLazy/>
      <FAQ/>
      <Slogan/>
      <Footer />
    </div>
  );
}
