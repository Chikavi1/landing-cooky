import { createContext, useContext, useState, useEffect } from 'react';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const [t, setT] = useState(es);

  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'es';
    setLang(saved);
    setT(saved === 'en' ? en : es);
  }, []);

  function changeLanguage(selectedLang) {
    setLang(selectedLang);
    setT(selectedLang === 'en' ? en : es);
    localStorage.setItem('lang', selectedLang);
  }

  return (
    <LanguageContext.Provider value={{ lang, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
