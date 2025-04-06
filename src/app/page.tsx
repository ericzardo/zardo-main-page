'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Header, Footer, Slogan } from '@zardo/ui-kit/layout';
import { LoadingScreen } from "@zardo/ui-kit/feedback"

import Hero from '@/components/sections/Hero';
import FAQ from '@/components/sections/FAQ';
import Services from '@/components/sections/ServicesList';
import Portfolio from '@/components/sections/Portfolio';
import Newsletter from '@/components/sections/Newsletter';

import { SOCIAL_LINKS } from '@/constants/footer';
import { NAV_ITEMS } from '@/constants/nav';

import { useScrollToSection } from '@/hooks/useScrollToSection';


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
  const scrollToSection = useScrollToSection();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingScreen />;
  }

  return (
    <div className="overflow-hidden bg-brand-offwhite">
      <Header 
        navItems={NAV_ITEMS.map(nav => ({
          ...nav,
          onClick: () => scrollToSection({ sectionId: nav.href, offset: 80, duration: 800 }),
        }))}
        ctaLabel="Get Started" 
        ctaOnClick={() => scrollToSection({ sectionId: "contact", offset: 80, duration: 800 })} 
      />
      <Hero/>
      <SolutionsLazy/>
      <Portfolio/>
      <Newsletter />
      <Services />
      <ProcessLazy />
      <BehindLazy/>
      <ContactLazy/>
      <FAQ/>
      <Slogan
        title="Innovative Digital Solutions"
        description="Combining creativity and cutting-edge technology to craft unique experiences that transform your business."/>
      <Footer
        email="contact@zardo.dev"
        socialLinks={SOCIAL_LINKS}
        onScrollToTop={() => scrollToSection({ sectionId: "hero", offset: 80, duration: 800 })}
      />
    </div>
  );
}
