 
import { useLanguage } from '../context/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Header() {
  const { t } = useLanguage();  

  return (
    <>
    {/* <header class="bg-[#FF9F1C] text-white  text-center text-lg py-4 font-medium animate-pulse-fast">
        <div class="max-w-7xl mx-auto px-8">
            🚨 <strong>ALERTA:</strong> Cada minuto cuenta cuando tu mascota está perdida - <span class="underline">Actúa AHORA</span>
        </div>
    </header> */}

    <header className="bg-[#1E235A ] sticky top-0 z-50">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            
            <div className="w-10 h-10 bg-pet-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">🐾</span>
            </div>

            <div>
              <div className="font-bold text-xl text-[#1E235A] ">Cooky</div>
              <div className="text-xs text-[#1E235A]">Encuentra a tu mascota</div>
            </div>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">Cómo funciona</a>
             <a href="#pet-care" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.pricing}</a>
            <a href="#success" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.faq}</a>
           </nav> */}

          {/* Mobile menu button */}
          {/* <button id="mobile-menu-btn" className="md:hidden">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}

          {/* <LanguageSwitcher /> */}
          {/* <button class="bg-red-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 animate-pulse">
              ¡RESCATAR AHORA!
          </button> */}

        </div>
      </div>
    </header>
    </>

        );
}