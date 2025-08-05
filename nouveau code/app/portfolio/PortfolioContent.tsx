
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
    }
  ];

  const categories = ["Tous", "E-commerce", "Site Vitrine"];

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
