
'use client';

import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden pt-14 sm:pt-16 md:pt-20">
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20multiple%20computer%20screens%20showing%20website%20designs%2C%20bright%20clean%20office%20environment%2C%20professional%20developers%20working%20on%20restaurant%20websites%20and%20e-commerce%20platforms%2C%20technology%20innovation%20atmosphere%20with%20clean%20minimalist%20background&width=1920&height=1080&seq=hero_background&orientation=landscape"
          alt="Développement web moderne"
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-blue-800/80"></div>
      </div>
      
      <div className="relative w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Créateur de sites web qui
              <span className="text-orange-400"> boostent vos ventes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Nous aidons les entreprises, notamment les restaurants, à développer leur présence en ligne et réduire leur dépendance aux plateformes coûteuses comme Uber Eats ou Deliveroo.
            </p>
            
            <div className="bg-orange-500/20 border border-orange-400/30 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center mb-3">
                <i className="ri-restaurant-line text-orange-400 text-xl sm:text-2xl mr-3"></i>
                <h3 className="text-lg sm:text-xl font-bold text-orange-400">Notre Mission Restaurants</h3>
              </div>
              <p className="text-blue-100 mb-3 text-sm sm:text-base">
                Libérez-vous des commissions élevées (jusqu'à 35%) des plateformes de livraison !
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-center">
                  <i className="ri-check-line text-orange-400 mr-2 flex-shrink-0"></i>
                  <span className="text-xs sm:text-sm">Site avec commande en ligne directe</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-orange-400 mr-2 flex-shrink-0"></i>
                  <span className="text-xs sm:text-sm">Système de réservation intégré</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-orange-400 mr-2 flex-shrink-0"></i>
                  <span className="text-xs sm:text-sm">Paiement sécurisé sans commission</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-orange-400 mr-2 flex-shrink-0"></i>
                  <span className="text-xs sm:text-sm">Fidélisation de votre clientèle</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleContactClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center"
              >
                <i className="ri-rocket-line mr-2"></i>
                Démarrer mon projet
              </button>
              <button 
                onClick={() => router.push('/portfolio')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-500 cursor-pointer whitespace-nowrap"
              >
                Voir nos réalisations
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-bold text-orange-400">150+</span>
                <span className="text-blue-100 ml-2 text-sm sm:text-base">Projets réalisés</span>
              </div>
              <div className="flex items-center text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-bold text-orange-400">95%</span>
                <span className="text-blue-100 ml-2 text-sm sm:text-base">Clients satisfaits</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20restaurant%20website%20mockup%20showing%20online%20ordering%20system%20on%20laptop%20and%20mobile%20devices%2C%20elegant%20food%20presentation%20interface%2C%20professional%20restaurant%20digital%20menu%20design%20with%20clean%20background%20for%20text%20overlay&width=600&height=500&seq=hero_devices&orientation=landscape"
                alt="Sites web pour restaurants modernes"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-orange-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}