 
import { useLanguage } from '../context/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Header() {
  const { t } = useLanguage();  

  return (
    <>
    <header class="bg-yellow-600 text-white py-2 text-center text-sm font-medium animate-pulse-fast">
        <div class="max-w-7xl mx-auto px-4">
            🚨 <strong>ALERTA:</strong> Cada minuto cuenta cuando tu mascota está perdida - <span class="underline">Actúa AHORA</span>
        </div>
    </header>

    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-pet-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">🐾</span>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">Cooky</div>
              <div className="text-xs text-gray-500">Find your pet</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">Cómo funciona</a>
            {/* <a href="#about" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.about}</a> */}
            {/* <a href="#found-pets" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.foundPets}</a> */}
            <a href="#pet-care" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.pricing}</a>
            <a href="#success" className="text-gray-700 hover:text-pet-blue-600 font-medium transition-colors">{t.navbar.faq}</a>

            {/* <button className="text-pet-blue-600 font-semibold hover:text-pet-blue-700 transition-colors">{t.buttons.login}</button> */}
          </nav>

          {/* Mobile menu button */}
          <button id="mobile-menu-btn" className="md:hidden">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <LanguageSwitcher />
          <button class="bg-red-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 animate-pulse">
                        ¡RESCATAR AHORA!
                    </button>

        </div>
      </div>
    </header>
    </>

        );
}