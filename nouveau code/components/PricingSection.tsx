
'use client';

export default function PricingSection() {
  const forfaits = [
    {
      name: 'Site Vitrine',
      price: '990',
      description: 'Parfait pour présenter votre activité',
      platform: 'Shopify ou Codage sur mesure',
      features: [
        'Site one page professionnel',
        'Design responsive',
        'Nom de domaine offert (1 an)',
        'Optimisation SEO de base',
        'Formulaire de contact',
        'Hébergement sécurisé'
      ],
      note: 'Abonnement Shopify 30€/mois à la charge du client',
      popular: false
    },
    {
      name: 'E-commerce',
      price: '1990',
      description: 'Boutique complète avec accompagnement',
      platform: 'Shopify',
      features: [
        'Boutique en ligne complète',
        'Intégration de 60 produits incluse',
        'Gestion des produits illimitée',
        'Paiements sécurisés',
        'Nom de domaine offert (1 an)',
        'Formation à la gestion',
        'Support technique inclus',
        'Optimisation conversion'
      ],
      note: 'Abonnement Shopify 30€/mois à la charge du client',
      popular: true
    },
    {
      name: 'E-commerce Premium',
      price: '2500',
      description: 'Solution complète avec publicité',
      platform: 'Shopify',
      features: [
        'Boutique e-commerce avancée',
        'Intégration de 100 produits incluse',
        'Campagnes publicitaires incluses',
        'Pub sans booster GRATUIT pendant 3 mois',
        'Stratégie marketing digitale',
        'Nom de domaine offert (1 an)',
        'Formation complète',
        'Support prioritaire',
        'Analytics avancés',
        'Suivi ROI mensuel'
      ],
      note: 'Abonnement Shopify 30€/mois à la charge du client',
      popular: false
    }
  ];

  return (
    <section id="forfaits" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Forfaits
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le forfait qui correspond le mieux à vos besoins et à votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {forfaits.map((forfait, index) => (
            <div key={index} className={`relative rounded-2xl p-6 sm:p-8 ${
              forfait.popular 
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl lg:scale-105' 
                : 'bg-white border-2 border-gray-200 shadow-lg'
            }`}>
              {forfait.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${forfait.popular ? 'text-white' : 'text-gray-900'}`}>
                  {forfait.name}
                </h3>
                <p className={`text-xs sm:text-sm mb-4 ${forfait.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {forfait.description}
                </p>
                <div className="flex items-center justify-center mb-2">
                  <span className={`text-4xl sm:text-5xl font-bold ${forfait.popular ? 'text-white' : 'text-blue-600'}`}>
                    {forfait.price}€
                  </span>
                </div>
                <p className={`text-xs sm:text-sm ${forfait.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  {forfait.platform}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {forfait.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start text-xs sm:text-sm ${forfait.popular ? 'text-white' : 'text-gray-700'}`}>
                    <i className={`ri-check-line mr-2 sm:mr-3 mt-0.5 flex-shrink-0 ${forfait.popular ? 'text-orange-300' : 'text-green-500'}`}></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={`text-xs p-3 rounded-lg mb-4 sm:mb-6 ${
                forfait.popular ? 'bg-blue-800/50 text-blue-100' : 'bg-orange-50 text-orange-700'
              }`}>
                <i className="ri-information-line mr-1"></i>
                {forfait.note}
              </div>

              <button className={`w-full py-3 sm:py-4 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap text-sm sm:text-base ${
                forfait.popular 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Choisir ce forfait
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-gray-600 space-y-2">
          <p>
            * Pour le codage sur mesure, tarification selon le temps passé
          </p>
          <p>
            Tous nos forfaits incluent le nom de domaine offert pendant 1 an
          </p>
        </div>
      </div>
    </section>
  );
}
