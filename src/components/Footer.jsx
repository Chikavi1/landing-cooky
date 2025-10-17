 
import { useLanguage } from '../context/LanguageContext.jsx';
// primario: #1E235A 
// Secundario: #4A8D6E 
// Fondo: #F9F9F9 
// Accento: #FF9F1C 
// Texto neutro: #6B7280 

export default function Footer() {
    const { t  } = useLanguage();

  return (
 
<footer class="bg-[#1E235A] text-gray-200 pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-4 gap-12">

       <div>
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-12 h-12 bg-[#FF9F1C] rounded-xl flex items-center justify-center">
            <span class="text-[#1E235A] text-2xl font-bold">🐾</span>
          </div>
          <span class="font-bold text-2xl text-white">Cooky</span>
        </div>
        <p class="text-gray-300 text-sm leading-relaxed mb-4">
          Ayudamos a que las familias reencuentren a sus mascotas perdidas. Cada publicación cuenta 🐶🐱.
        </p>
        <a href="#" class="inline-block px-5 py-2 rounded-lg bg-[#FF9F1C] text-sm font-medium text-white hover:bg-[#e68d17] transition">
          Publica tu mascota →
        </a>
      </div>
 
      <div>
        <h3 class="font-semibold text-white mb-4">Recursos</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-[#FF9F1C] transition-colors">Historias de éxito</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C] transition-colors">Consejos de cuidado</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C] transition-colors">Cómo funciona</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C] transition-colors">Publicidad en Meta</a></li>
        </ul>
      </div>

   
      <div>
        <h3 class="font-semibold text-white mb-4">Comunidad</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-[#FF9F1C] transition-colors">Mascotas Perdidas</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C] transition-colors">Mascotas Encontradas</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C] transition-colors">Voluntariado</a></li>
          <li><a href="#" class="hover:text-[#FF9F1C] transition-colors">Únete al equipo</a></li>
        </ul>
      </div>

    
      <div>
        <h3 class="font-semibold text-white mb-4">Mantente Informado</h3>
        <p class="text-gray-300 text-sm mb-3">Recibe noticias y consejos para ayudar a tus mascotas a volver a casa.</p>
        <form class="flex flex-col sm:flex-row gap-2">
          <input type="email" placeholder="Tu correo electrónico"
            class="flex-1 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none" />
          <button type="submit" class="px-5 py-2 bg-[#4A8D6E] text-white rounded-lg hover:bg-[#3c735a] transition">
            Suscribirse
          </button>
        </form>
      </div>

    </div>

 
   <div class="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
  <p>© 2025 my.pets.id. Todos los derechos reservados.</p>
  <div class="flex space-x-6 mt-4 md:mt-0">
    <a href="#" aria-label="Facebook" class="hover:text-[#FF9F1C] transition-colors">
      <i class="fab fa-facebook-f text-lg"></i>
    </a>
    <a href="#" aria-label="Instagram" class="hover:text-[#FF9F1C] transition-colors">
      <i class="fab fa-instagram text-lg"></i>
    </a>
    <a href="#" aria-label="Meta Ads" class="hover:text-[#FF9F1C] transition-colors">
      <i class="fab fa-facebook-messenger text-lg"></i>
    </a>
  </div>
</div>

  </div>
</footer>


        );
}