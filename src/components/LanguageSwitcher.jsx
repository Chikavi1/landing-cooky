import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();
  const [localLang, setLocalLang] = useState(lang || 'es');

  // Sincronizar con localStorage al inicio
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved && saved !== localLang) {
      setLocalLang(saved);
      changeLanguage(saved);
    }
  }, []);

  function handleChange(e) {
    const newLang = e.target.value;
    setLocalLang(newLang);
    localStorage.setItem('lang', newLang);
    changeLanguage(newLang);
  }

  return (
    <div className="relative inline-block w-22">
      <select
        value={localLang}
        onChange={handleChange}
        className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pet-blue-500 focus:border-pet-blue-500"
      >
        <option value="es">🇲🇽</option>
        <option value="en">🇺🇸</option>
        <option value="zh">🇨🇳</option>
        <option value="hi">🇮🇳</option>
        <option value="ar">🇸🇦</option>
      </select>

      {/* Flecha personalizada */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.516 7.548a.5.5 0 0 1 .707 0L10 11.324l3.777-3.776a.5.5 0 1 1 .707.707l-4.131 4.13a.5.5 0 0 1-.707 0L5.516 8.255a.5.5 0 0 1 0-.707z" />
        </svg>
      </div>
    </div>
  );
}
