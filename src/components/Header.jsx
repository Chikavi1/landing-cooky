import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

export default function Header() {
  const [lang, setLang] = useState('es');
  const [t, setT] = useState(es);

  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'es';
    setLang(saved);
    setT(saved === 'en' ? en : es);
  }, []);

  function handleLangChange(selectedLang) {
    setLang(selectedLang);
    setT(selectedLang === 'en' ? en : es);
    localStorage.setItem('lang', selectedLang);
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-pet-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">🐾</span>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">mypets.id</div>
              <div className="text-xs text-gray-500">Find your pet</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.home}</a>
            <a href="#found-pets" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.foundPets}</a>
            <a href="#success" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.success}</a>
            <a href="#pet-care" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.petCare}</a>
            <a href="#about" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.about}</a>
            <button className="text-pet-blue-600 font-semibold hover:text-pet-blue-700 transition-colors">{t.buttons.login}</button>
            <button className="bg-pet-blue-500   text-green-800 px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">{t.buttons.findPets}</button>
          </nav>

          {/* Mobile menu button */}
          <button id="mobile-menu-btn" className="md:hidden">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <LanguageSwitcher onChange={handleLangChange} initialLang={lang} />
        </div>
      </div>
    </header>
  );
}
