'use client';

import i18n from '../config';

export function switchLanguage(lang: 'en' | 'pt') {
  i18n.changeLanguage(lang);
  localStorage.setItem("preferredLanguage", lang);
  document.cookie = `preferredLanguage=${lang}; path=/; max-age=31536000`;
}