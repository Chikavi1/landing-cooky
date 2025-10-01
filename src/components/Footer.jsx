 
import { useLanguage } from '../context/LanguageContext.jsx';
// primario: #1E235A 
// Secundario: #4A8D6E 
// Fondo: #F9F9F9 
// Accento: #FF9F1C 
// Texto neutro: #6B7280 

export default function Footer() {
    const { t  } = useLanguage();

  return (
 
<footer class="bg-[#1E235A] text-gray-200 pt-12 pb-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-4 gap-10">
      
       <div>
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 bg-[#1E235A] rounded-xl flex items-center justify-center">
            <span class="text-white text-lg font-bold">🐾</span>
          </div>
          <span class="font-bold text-xl text-white">mypets.id</span>
        </div>
        <p class="text-gray-300 text-sm leading-relaxed mb-4">
          Helping families reunite with their beloved pets.  
          Every share counts 🐶🐱.
        </p>
        <a href="#" class="inline-block px-4 py-2 rounded-lg bg-[#FF9F1C] text-sm font-medium text-white hover:bg-[#e68d17] transition">
          Get MyPets →
        </a>
      </div>
      
       <div>
        <h3 class="font-semibold text-white mb-4">Resources</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-[#FF9F1C]">Success Stories</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C]">Pet Care Tips</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C]">How it Works</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-white mb-4">Community</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-[#FF9F1C]">Lost Pets</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C]">Found Pets</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C]">Volunteer</a></li>
        </ul>
      </div>

       <div>
        <h3 class="font-semibold text-white mb-4">Stay Updated</h3>
        <p class="text-gray-300 text-sm mb-3">Get news & tips to help pets return home safely.</p>
        <form class="flex">
          <input type="email" placeholder="Your email"
            class="w-full rounded-l-lg px-3 py-2 text-gray-800 text-sm focus:outline-none" />
          <button type="submit" class="px-4 py-2 bg-[#4A8D6E] text-white rounded-r-lg hover:bg-[#3c735a]">
            Subscribe
          </button>
        </form>
      </div>

    </div>

     <div class="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
      <p>© 2025 MyPets.id. All rights reserved.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-[#FF9F1C]">Facebook</a>
        <a href="#" class="hover:text-[#FF9F1C]">Instagram</a>
        <a href="#" class="hover:text-[#FF9F1C]">Twitter</a>
      </div>
    </div>
  </div>
</footer>

        );
}