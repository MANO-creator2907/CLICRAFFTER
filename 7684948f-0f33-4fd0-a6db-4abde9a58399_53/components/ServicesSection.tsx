
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-restaurant-line',
      title: 'Sites pour Restaurants',
      description: 'Libérez-vous des commissions élevées des plateformes ! Sites avec commande directe, réservations et paiement sécurisé.',
      features: ['Commande en ligne 0% commission', 'Système de réservation', 'Menu digital interactif', 'Paiement direct sécurisé'],
      highlight: true
    },
    {
      icon: 'ri-computer-line',
      title: 'Sites Vitrines',
      description: 'Sites élégants et professionnels pour présenter votre activité avec une page optimisée pour la conversion.',
      features: ['Design responsive', 'Optimisé SEO', 'Domaine offert']
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-commerce',
      description: 'Boutiques en ligne complètes avec gestion des commandes, paiements sécurisés et accompagnement.',
      features: ['Paiement sécurisé', 'Gestion stock', 'Analytics avancés']
    },
    {
      icon: 'ri-file-paper-line',
      title: 'Flyers & Supports Print',
      description: 'Création de flyers professionnels rectangulaires verticaux 148mm x 210mm sur papier brillant 130g, recto-verso couleur avec réalisation de maquette numérique. Impression 5000 exemplaires incluse.',
      features: ['Format 148mm x 210mm', 'Papier brillant 130 grammes', 'Recto-verso couleur', 'Maquette numérique incluse', '5000 exemplaires imprimés', 'À partir de 290€']
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Marketing Digital',
      description: 'Campagnes publicitaires ciblées pour augmenter votre visibilité et générer plus de ventes.',
      features: ['Publicité Facebook/Google', 'Stratégie digitale', 'Devis sur mesure à partir de 30€']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Applications Mobiles',
      description: 'Applications iOS et Android natives ou hybrides pour étendre votre présence sur mobile.',
      features: ['Design natif', 'Notifications push', 'Synchronisation cloud']
    },
    {
      icon: 'ri-search-line',
      title: 'Référencement SEO',
      description: 'Optimisation complète pour améliorer votre positionnement sur Google et générer du trafic qualifié.',
      features: ['Audit SEO complet', 'Optimisation technique', 'Suivi des positions']
    },
    {
      icon: 'ri-palette-line',
      title: 'Design & Branding',
      description: 'Création d\'identité visuelle complète : logo, charte graphique, supports de communication.',
      features: ['Logo professionnel', 'Charte graphique', 'Supports print/web']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Maintenance & Support',
      description: 'Service de maintenance technique, mises à jour de sécurité et support client réactif.',
      features: ['Mises à jour sécurisées', 'Sauvegardes automatiques', 'Support 7j/7']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Analytics & Reporting',
      description: 'Analyse approfondie des performances avec tableaux de bord personnalisés et recommandations.',
      features: ['Tableaux de bord', 'Rapports mensuels', 'Recommandations stratégiques']
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Marketing',
      description: 'Campagnes email automatisées pour fidéliser vos clients et augmenter vos ventes.',
      features: ['Campagnes automatisées', 'Templates personnalisés', 'A/B testing']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour développer votre présence en ligne et réduire vos coûts
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 mb-16 text-white hover:scale-105 transition-transform duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Restaurants : Stop aux commissions !
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Les plateformes comme Uber Eats prennent jusqu'à 35% de commission sur chaque commande. Avec votre propre site, gardez 100% de vos revenus !
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                  <div className="text-2xl font-bold">35%</div>
                  <div className="opacity-90">Commission plateformes</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                  <div className="text-2xl font-bold">0%</div>
                  <div className="opacity-90">Avec votre site</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Restaurant%20owner%20happy%20looking%20at%20tablet%20showing%20online%20orders%20and%20revenue%20increase%2C%20modern%20restaurant%20kitchen%20background%2C%20professional%20chef%20celebrating%20business%20success%20with%20digital%20ordering%20system&width=500&height=350&seq=restaurant_success&orientation=landscape"
                alt="Succès restaurant avec site web"
                className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20web%20development%20team%20working%20on%20multiple%20computer%20screens%20in%20a%20bright%20office%20environment%2C%20professional%20software%20development%20workspace%20with%20clean%20minimalist%20design%2C%20coding%20and%20design%20work%20in%20progress%2C%20technology%20and%20innovation%20atmosphere&width=600&height=400&seq=services_hero_image&orientation=landscape"
              alt="Équipe de développement web travaillant sur plusieurs projets"
              className="rounded-2xl shadow-2xl w-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Votre vision, notre expertise
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Chaque projet est unique. Nous transformons vos idées en sites web performants qui reflètent parfaitement votre identité et atteignent vos objectifs business.
            </p>
            <div className="space-y-4">
              <div className="flex items-center hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-lightbulb-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Conception sur mesure</h4>
                  <p className="text-gray-600">Design unique adapté à votre secteur</p>
                </div>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-rocket-line text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Performance optimale</h4>
                  <p className="text-gray-600">Sites rapides et bien référencés</p>
                </div>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-customer-service-line text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Support continu</h4>
                  <p className="text-gray-600">Accompagnement avant, pendant et après</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${service.highlight ? 'ring-2 ring-orange-400 relative' : ''}`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                    ⭐ SPÉCIAL RESTAURANTS
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110 ${service.highlight ? 'bg-orange-100' : 'bg-blue-100'}`}>
                <i className={`${service.icon} text-2xl ${service.highlight ? 'text-orange-600' : 'text-blue-600'}`}></i>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-sm text-gray-700 hover:translate-x-1 transition-transform"
                  >
                    <i className={`ri-check-line mr-2 ${service.highlight ? 'text-orange-500' : 'text-green-500'}`}></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
