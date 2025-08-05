
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const projects = [
    {
      id: 1,
      title: "Boutique Mode Élégance",
      category: "E-commerce",
      image: "https://readdy.ai/api/search-image?query=elegant%20fashion%20boutique%20website%20modern%20ecommerce%20layout%20luxury%20clothing%20brand%20sophisticated%20design%20professional%20online%20store&width=600&height=400&seq=portfolio1&orientation=landscape",
      description: "Site e-commerce complet avec paiement en ligne et gestion des stocks",
      tech: ["Shopify", "React", "Stripe"],
      results: "3x plus de ventes en ligne",
      url: "#"
    },
    {
      id: 2,
      title: "Cabinet Avocat Juridis",
      category: "Site Vitrine",
      image: "https://readdy.ai/api/search-image?query=professional%20law%20firm%20website%20elegant%20legal%20services%20modern%20attorney%20office%20sophisticated%20business%20layout%20corporate%20design&width=600&height=400&seq=portfolio2&orientation=landscape",
      description: "Site vitrine professionnel avec formulaire de contact et blog juridique",
      tech: ["WordPress", "SEO", "Responsive"],
      results: "Doublé les demandes de consultation",
      url: "#"
    },
    {
      id: 3,
      title: "Restaurant Le Gourmet",
      category: "Site Vitrine",
      image: "https://readdy.ai/api/search-image?query=elegant%20restaurant%20website%20gourmet%20dining%20experience%20menu%20showcase%20culinary%20arts%20fine%20dining%20sophisticated%20food%20presentation&width=600&height=400&seq=portfolio3&orientation=landscape",
      description: "Site avec menu interactif et système de réservation en ligne",
      tech: ["Next.js", "Booking System", "Mobile"],
      results: "40% de réservations en plus",
      url: "#"
    },
    {
      id: 4,
      title: "Artisan Bois Créatif",
      category: "Site Vitrine",
      image: "https://readdy.ai/api/search-image?query=artisan%20woodworking%20workshop%20handcrafted%20furniture%20creative%20carpentry%20professional%20craftsmanship%20wooden%20products%20showcase&width=600&height=400&seq=portfolio4&orientation=landscape",
      description: "Portfolio d'artisan avec galerie photo et demande de devis",
      tech: ["HTML/CSS", "JavaScript", "Portfolio"],
      results: "Triple les demandes de devis",
      url: "#"
    },
    {
      id: 5,
      title: "Centre Yoga Harmonie",
      category: "E-commerce",
      image: "https://readdy.ai/api/search-image?query=peaceful%20yoga%20studio%20website%20wellness%20center%20meditation%20classes%20spiritual%20harmony%20relaxation%20modern%20zen%20design&width=600&height=400&seq=portfolio5&orientation=landscape",
      description: "Plateforme de cours en ligne avec abonnements et planning",
      tech: ["Woocommerce", "LMS", "Booking"],
      results: "5x plus d'inscriptions",
      url: "#"
    },
    {
      id: 6,
      title: "Kebab Dupont",
      category: "Site Vitrine",
      image: "https://readdy.ai/api/search-image?query=modern%20kebab%20restaurant%20website%20fast%20food%20delivery%20menu%20showcase%20professional%20food%20service%20turkish%20cuisine%20contemporary%20design&width=600&height=400&seq=portfolio6&orientation=landscape",
      description: "Site vitrine pour restaurant avec menu en ligne et système de commande",
      tech: ["WordPress", "Menu Digital", "Responsive"],
      results: "Augmentation de 60% des commandes",
      url: "https://kebabdupont.com/"
    },
    {
      id: 7,
      title: "Flyer Kebab Royal",
      category: "Flyers & Print",
      image: "https://readdy.ai/api/search-image?query=professional%20kebab%20restaurant%20flyer%20design%20turkish%20food%20promotional%20material%20vertical%20format%20appetizing%20grilled%20meat%20colorful%20menu%20items%20pricing%20special%20offers%20clean%20modern%20layout&width=600&height=800&seq=flyer_kebab1&orientation=portrait",
      description: "Flyer promotionnel format 148mm x 210mm pour kebab avec menu et offres spéciales",
      tech: ["Photoshop", "Print Design", "Papier Brillant 130g"],
      results: "Augmentation de 25% de la clientèle",
      url: "#"
    },
    {
      id: 8,
      title: "Flyer Istanbul Grill",
      category: "Flyers & Print",
      image: "https://readdy.ai/api/search-image?query=modern%20turkish%20grill%20restaurant%20flyer%20premium%20design%20kebab%20doner%20shawarma%20promotional%20vertical%20flyer%20elegant%20food%20photography%20dark%20background%20gold%20accents%20professional%20layout&width=600&height=800&seq=flyer_kebab2&orientation=portrait",
      description: "Design élégant pour restaurant turc avec photos haute qualité des plats",
      tech: ["Illustrator", "Photographie Culinaire", "Recto-verso"],
      results: "Doublé les commandes à emporter",
      url: "#"
    },
    {
      id: 9,
      title: "Flyer Kebab Express",
      category: "Flyers & Print",
      image: "https://readdy.ai/api/search-image?query=vibrant%20kebab%20fast%20food%20flyer%20colorful%20design%20delivery%20service%20promotional%20material%20vertical%20format%20appetizing%20food%20images%20bright%20colors%20modern%20typography%20bold%20layout&width=600&height=800&seq=flyer_kebab3&orientation=portrait",
      description: "Flyer dynamique pour service de livraison rapide avec codes promo",
      tech: ["InDesign", "Marketing Print", "Couleurs Vives"],
      results: "50% d'augmentation des livraisons",
      url: "#"
    },
    {
      id: 10,
      title: "Flyer Friterie du Parc",
      category: "Flyers & Print",
      image: "https://readdy.ai/api/search-image?query=traditional%20belgian%20french%20fries%20shop%20flyer%20design%20golden%20crispy%20fries%20promotional%20material%20vertical%20format%20appetizing%20fried%20food%20colorful%20menu%20items%20special%20offers%20clean%20layout&width=600&height=800&seq=flyer_friterie1&orientation=portrait",
      description: "Flyer traditionnel pour friterie belge avec spécialités locales",
      tech: ["Photoshop", "Style Traditionnel", "Format A5"],
      results: "30% de nouveaux clients",
      url: "#"
    },
    {
      id: 11,
      title: "Flyer Frites & Compagnie",
      category: "Flyers & Print",
      image: "https://readdy.ai/api/search-image?query=modern%20french%20fries%20restaurant%20flyer%20contemporary%20design%20gourmet%20fast%20food%20promotional%20vertical%20format%20premium%20fried%20foods%20colorful%20sauces%20clean%20professional%20layout&width=600&height=800&seq=flyer_friterie2&orientation=portrait",
      description: "Design moderne pour friterie gourmet avec sauces artisanales",
      tech: ["Illustrator", "Design Contemporain", "Papier Premium"],
      results: "Repositionnement haut de gamme réussi",
      url: "#"
    },
    {
      id: 12,
      title: "Flyer Friterie Central",
      category: "Flyers & Print",
      image: "https://readdy.ai/api/search-image?query=retro%20vintage%20french%20fries%20shop%20flyer%20nostalgic%20design%20classic%20friterie%20promotional%20material%20vertical%20format%20traditional%20fried%20food%20warm%20colors%20vintage%20typography&width=600&height=800&seq=flyer_friterie3&orientation=portrait",
      description: "Flyer rétro pour friterie familiale avec ambiance nostalgique",
      tech: ["Vintage Design", "Couleurs Chaudes", "Style Familial"],
      results: "Fidélisation clientèle locale +40%",
      url: "#"
    },
    {
      id: 13,
      title: "Animation TV Restaurant Saveurs",
      category: "Animations TV",
      image: "https://readdy.ai/api/search-image?query=professional%20restaurant%20tv%20screen%20animation%20display%20modern%20digital%20menu%20board%20elegant%20food%20presentation%20dynamic%20content%20restaurant%20interior%20premium%20dining%20experience&width=600&height=400&seq=tv_anim1&orientation=landscape",
      description: "Animation dynamique pour écrans TV avec menu tournant et promotions",
      tech: ["After Effects", "Motion Graphics", "4K Display"],
      results: "15% d'augmentation des ventes d'entrées",
      url: "#"
    },
    {
      id: 14,
      title: "Animation TV Burger House",
      category: "Animations TV",
      image: "https://readdy.ai/api/search-image?query=dynamic%20burger%20restaurant%20tv%20animation%20colorful%20fast%20food%20digital%20display%20motion%20graphics%20appetizing%20burger%20sequences%20modern%20restaurant%20screen%20advertising%20vibrant%20colors&width=600&height=400&seq=tv_anim2&orientation=landscape",
      description: "Séquences animées pour fast-food avec effets visuels attractifs",
      tech: ["Cinema 4D", "Animation 3D", "Boucle Continue"],
      results: "Temps d'attente perçu réduit de 25%",
      url: "#"
    },
    {
      id: 15,
      title: "Animation TV Pizzeria Bella",
      category: "Animations TV",
      image: "https://readdy.ai/api/search-image?query=italian%20pizzeria%20tv%20screen%20animation%20authentic%20restaurant%20digital%20display%20pizza%20making%20process%20motion%20graphics%20warm%20lighting%20traditional%20italian%20restaurant%20atmosphere&width=600&height=400&seq=tv_anim3&orientation=landscape",
      description: "Animation immersive montrant la préparation des pizzas en cuisine",
      tech: ["Premiere Pro", "Timelapse", "Ambiance Italienne"],
      results: "Expérience client enrichie",
      url: "#"
    },
    {
      id: 16,
      title: "Menu Digital Brasserie Modern",
      category: "Menus Digitaux",
      image: "https://readdy.ai/api/search-image?query=elegant%20digital%20menu%20design%20modern%20brasserie%20restaurant%20clean%20typography%20premium%20food%20photography%20sophisticated%20layout%20tablet%20menu%20display%20contemporary%20design&width=600&height=400&seq=menu_digital1&orientation=landscape",
      description: "Menu digital interactif pour brasserie avec photos haute définition",
      tech: ["React", "Interface Tactile", "QR Code"],
      results: "Réduction de 30% du temps de commande",
      url: "#"
    },
    {
      id: 17,
      title: "Menu Tablette Sushi Zen",
      category: "Menus Digitaux",
      image: "https://readdy.ai/api/search-image?query=japanese%20sushi%20restaurant%20digital%20menu%20zen%20minimalist%20design%20clean%20interface%20tablet%20display%20authentic%20japanese%20cuisine%20elegant%20food%20presentation%20modern%20technology&width=600&height=400&seq=menu_digital2&orientation=landscape",
      description: "Interface épurée pour restaurant japonais avec catégories visuelles",
      tech: ["Vue.js", "Design Minimaliste", "Multi-langues"],
      results: "Satisfaction client +45%",
      url: "#"
    },
    {
      id: 18,
      title: "Menu Interactif Crêperie Bretonne",
      category: "Menus Digitaux",
      image: "https://readdy.ai/api/search-image?query=traditional%20french%20creperie%20digital%20menu%20rustic%20design%20authentic%20breton%20restaurant%20tablet%20interface%20crepes%20galettes%20food%20photography%20warm%20colors%20traditional%20atmosphere&width=600&height=400&seq=menu_digital3&orientation=landscape",
      description: "Menu tactile authentique pour crêperie avec personnalisation des garnitures",
      tech: ["Angular", "Configurateur", "Style Traditionnel"],
      results: "Ventes de crêpes sucrées +35%",
      url: "#"
    }
  ];

  const categories = ["Tous", "E-commerce", "Site Vitrine", "Flyers & Print", "Animations TV", "Menus Digitaux"];

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Portfolio Clicraffter
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez nos réalisations et les résultats obtenus pour nos clients
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Plus de 150 projets réalisés
            </h2>
            <p className="text-lg text-gray-600">
              Des sites qui génèrent des résultats concrets
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                    {project.url !== "#" && (
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 cursor-pointer"
                      >
                        <i className="ri-external-link-line text-lg"></i>
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center">
                      <i className="ri-trophy-line text-green-600 mr-2"></i>
                      <span className="text-green-800 font-semibold text-sm">
                        {project.results}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Votre projet sera le prochain ?
          </h2>
          <p className="text-gray-600 mb-8">
            Parlons de vos objectifs et créons ensemble un site qui vous ressemble
          </p>
          <Link 
            href="/#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Démarrer mon projet
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
