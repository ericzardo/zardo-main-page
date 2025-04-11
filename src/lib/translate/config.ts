'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeEN from '../../../public/locales/en/home.json';
import homePT from '../../../public/locales/pt/home.json';

import behindEN from '../../../public/locales/en/behind.json';
import behindPT from '../../../public/locales/pt/behind.json';

import contactEN from '../../../public/locales/en/contact.json';
import contactPT from '../../../public/locales/pt/contact.json';

import faqEN from '../../../public/locales/en/faq.json';
import faqPT from '../../../public/locales/pt/faq.json';

import heroEN from '../../../public/locales/en/hero.json';
import heroPT from '../../../public/locales/pt/hero.json';

import newsletterEN from '../../../public/locales/en/newsletter.json';
import newsletterPT from '../../../public/locales/pt/newsletter.json';

import portfolioEN from '../../../public/locales/en/portfolio.json';
import portfolioPT from '../../../public/locales/pt/portfolio.json';

import processEN from '../../../public/locales/en/process.json';
import processPT from '../../../public/locales/pt/process.json';

import servicesEN from '../../../public/locales/en/services.json';
import servicesPT from '../../../public/locales/pt/services.json';

import solutionsEN from '../../../public/locales/en/solutions.json';
import solutionsPT from '../../../public/locales/pt/solutions.json';

import chattOnPT from '../../../public/locales/pt/cases/chatt-on.json';
import chattOnEN from '../../../public/locales/en/cases/chatt-on.json';

import ebookLpPT from '../../../public/locales/pt/cases/ebook-lp.json';
import ebookLpEN from '../../../public/locales/en/cases/ebook-lp.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: homeEN,
        behind: behindEN,
        contact: contactEN,
        faq: faqEN,
        hero: heroEN,
        newsletter: newsletterEN,
        portfolio: portfolioEN,
        process: processEN,
        services: servicesEN,
        solutions: solutionsEN,
        'cases/chatt-on': chattOnEN,
        'cases/ebook-lp': ebookLpEN,
      },
      pt: {
        home: homePT,
        behind: behindPT,
        contact: contactPT,
        faq: faqPT,
        hero: heroPT,
        newsletter: newsletterPT,
        portfolio: portfolioPT,
        process: processPT,
        services: servicesPT,
        solutions: solutionsPT,
        'cases/chatt-on': chattOnPT,
        'cases/ebook-lp': ebookLpPT,
      },
    },
    lng: 'pt',
    fallbackLng: 'en',
    ns: ['home', 'hero', 'footer'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
