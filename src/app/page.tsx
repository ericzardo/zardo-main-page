'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { switchLanguage } from '@/lib/translate/service/switch';
import { Header, Footer, Slogan } from '@zardo/ui-kit/layout';
import { LoadingScreen } from "@zardo/ui-kit/feedback";
import { Instagram, Linkedin } from 'lucide-react';

import Hero from '@/components/sections/Hero';
import FAQ from '@/components/sections/FAQ';
import Services from '@/components/sections/ServicesList';
import Portfolio from '@/components/sections/Portfolio';
import Newsletter from '@/components/sections/Newsletter';

import { useScrollToSection } from '@/hooks/useScrollToSection';

const iconMap = {
  instagram: <Instagram strokeWidth={2} className="size-6 text-white/60" />,
  linkedin: <Linkedin strokeWidth={2} className="size-6 text-white/60" />,
};

const SolutionsLazy = dynamic(() => import('@/components/sections/Solutions'), {
  loading: () => <LoadingScreen />,
  ssr: false,
});

const ProcessLazy = dynamic(() => import('@/components/sections/Process'), {
  loading: () => <LoadingScreen />,
  ssr: false,
});

const BehindLazy = dynamic(() => import('@/components/sections/Behind'), {
  loading: () => <LoadingScreen />,
  ssr: false,
});

const ContactLazy = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <LoadingScreen />,
  ssr: false,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation('home');
  const { i18n } = useTranslation();
  const NAV_ITEMS = t('nav', { returnObjects: true }) as { label: string; href: string }[];
  const rawSocial = t('social', { returnObjects: true }) as { platform: keyof typeof iconMap; url: string; label: string }[];
  const SOCIAL_LINKS = rawSocial.map((item) => ({
    ...item,
    icon: iconMap[item.platform],
  }));
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage");
  
    if (storedLang && storedLang !== i18n.language) {
      switchLanguage(storedLang as "en" | "pt");
    }
  }, [i18n.language]);

  if (!isClient) {
    return <LoadingScreen />;
  }

  return (
    <div className="overflow-hidden bg-brand-offwhite relative">
      <Header 
        navItems={NAV_ITEMS.map(nav => ({
          ...nav,
          onClick: () => scrollToSection({ sectionId: nav.href, offset: 80, duration: 800 }),
        }))}
        ctaLabel={t('cta')}
        ctaOnClick={() => scrollToSection({ sectionId: "contact", offset: 80, duration: 800 })}
        selector={{
          current: i18n.language,
          options: [
            { value: "pt", label: "Português", icon: "🇧🇷" },
            { value: "en", label: "English", icon: "🇺🇸" },
          ],
          onSelect: (lang: string) => {
            switchLanguage(lang as "en" | "pt");
          }
        }}
      />
      <Hero />
      <SolutionsLazy />
      <Portfolio />
      <Newsletter />
      <Services />
      <ProcessLazy />
      <BehindLazy />
      <ContactLazy />
      <FAQ />
      <Slogan
        title={t('slogan.title')}
        description={t('slogan.description')}
      />
      <Footer
        email="contact@zardo.dev"
        socialLinks={SOCIAL_LINKS}
        onScrollToTop={() => scrollToSection({ sectionId: "hero", offset: 80, duration: 800 })}
      />
    </div>
  );
}
