
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const articles = [
    {
      id: 1,
      title: "10 conseils pour optimiser votre site e-commerce",
      excerpt: "Découvrez les meilleures pratiques pour augmenter vos ventes en ligne et améliorer l'expérience utilisateur de votre boutique.",
      image: "https://static.readdy.ai/image/1c4b163de486a2c214398358fe87a701/4b03896246a4190470c68ab73bc7b7a8.jfif",
      category: "E-commerce",
      date: "15 Mars 2024",
      readTime: "5 min",
      author: "Équipe Clicraffter"
    },
    {
      id: 2,
      title: "L'importance du design responsive en 2024",
      excerpt: "Pourquoi votre site doit absolument être optimisé mobile et comment cela impacte votre référencement Google.",
      image: "https://readdy.ai/api/search-image?query=responsive%20web%20design%20multiple%20devices%20smartphone%20tablet%20laptop%20mobile%20optimization%20user%20experience%20modern%20website&width=600&height=300&seq=blog2&orientation=landscape",
      category: "Design",
      date: "10 Mars 2024",
      readTime: "4 min",
      author: "Équipe Clicraffter"
    },
    {
      id: 3,
      title: "SEO : Les bases pour bien référencer votre site",
      excerpt: "Guide complet pour comprendre le référencement naturel et positionner votre site en première page de Google.",
      image: "https://readdy.ai/api/search-image?query=SEO%20search%20engine%20optimization%20Google%20ranking%20keywords%20digital%20marketing%20analytics%20website%20traffic%20growth%20strategies&width=600&height=300&seq=blog3&orientation=landscape",
      category: "SEO",
      date: "8 Mars 2024",
      readTime: "7 min",
      author: "Équipe Clicraffter"
    },
    {
      id: 4,
      title: "Shopify vs Site sur mesure : que choisir ?",
      excerpt: "Comparaison détaillée entre Shopify et le développement sur mesure pour vous aider à faire le bon choix.",
      image: "https://readdy.ai/api/search-image?query=Shopify%20platform%20vs%20custom%20development%20comparison%20ecommerce%20solutions%20website%20building%20technology%20choices%20business%20decisions&width=600&height=300&seq=blog4&orientation=landscape",
      category: "Conseils",
      date: "5 Mars 2024",
      readTime: "6 min",
      author: "Équipe Clicraffter"
    },
    {
      id: 5,
      title: "Les tendances web design 2024",
      excerpt: "Découvrez les dernières tendances en matière de design web pour créer un site moderne et attractif.",
      image: "https://readdy.ai/api/search-image?query=modern%20web%20design%20trends%202024%20creative%20layouts%20minimalist%20style%20user%20interface%20contemporary%20digital%20aesthetics%20innovation&width=600&height=300&seq=blog5&orientation=landscape",
      category: "Design",
      date: "2 Mars 2024",
      readTime: "5 min",
      author: "Équipe Clicraffter"
    },
    {
      id: 6,
      title: "Comment mesurer le ROI de votre site web",
      excerpt: "Apprenez à calculer le retour sur investissement de votre site et les KPIs essentiels à suivre.",
      image: "https://readdy.ai/api/search-image?query=website%20ROI%20analytics%20dashboard%20business%20metrics%20conversion%20tracking%20digital%20performance%20measurement%20success%20indicators&width=600&height=300&seq=blog6&orientation=landscape",
      category: "Analytics",
      date: "28 Février 2024",
      readTime: "6 min",
      author: "Équipe Clicraffter"
    }
  ];

  const categories = ["Tous", "E-commerce", "Design", "SEO", "Conseils", "Analytics"];

  const filteredArticles = activeCategory === "Tous" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubscribeStatus("Veuillez entrer un email valide");
      return;
    }

    setSubscribeStatus("Inscription en cours...");
    
    // Simulation d'envoi
    setTimeout(() => {
      setSubscribeStatus(" Inscription réussie ! Merci de votre confiance.");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Blog Clicraffter
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conseils, astuces et actualités pour optimiser votre présence digitale
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé dans cette catégorie.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="ri-time-line mr-1"></i>
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="ri-calendar-line mr-1"></i>
                      {article.date}
                    </div>
                    <Link 
                      href={`/blog/${article.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm cursor-pointer"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Restez informé de nos actualités
          </h2>
          <p className="text-gray-600 mb-8">
            Recevez nos derniers conseils et astuces directement dans votre boîte mail
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              S'abonner
            </button>
          </form>
          
          {subscribeStatus && (
            <p className={`mt-4 text-sm ${subscribeStatus.includes(' ') ? 'text-green-600' : subscribeStatus.includes('Veuillez') ? 'text-red-600' : 'text-blue-600'}`}>
              {subscribeStatus}
            </p>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
