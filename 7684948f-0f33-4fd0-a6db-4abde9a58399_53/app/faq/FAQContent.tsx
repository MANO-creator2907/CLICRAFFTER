
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "Général",
      questions: [
        {
          question: "Combien de temps faut-il pour créer un site web ?",
          answer: "Le délai varie selon la complexité : 1-2 semaines pour un site vitrine, 2-4 semaines pour un e-commerce. Nous vous donnons un planning précis dès le début du projet."
        },
        {
          question: "Proposez-vous un suivi après la création ?",
          answer: "Oui ! Nous incluons 1 mois de support gratuit, puis proposons des contrats de maintenance adaptés à vos besoins (mise à jour, sécurité, sauvegardes)."
        },
        {
          question: "Puis-je modifier mon site moi-même après livraison ?",
          answer: "Absolument ! Nous vous formons à l'utilisation de votre interface d'administration. Vous pourrez modifier textes, images et ajouter du contenu facilement."
        }
      ]
    },
    {
      category: "Techniques",
      questions: [
        {
          question: "Mon site sera-t-il responsive (mobile-friendly) ?",
          answer: "Tous nos sites sont 100% responsives et optimisés pour mobiles, tablettes et ordinateurs. C'est essentiel pour le SEO et l'expérience utilisateur."
        },
        {
          question: "Utilisez-vous WordPress ou d'autres CMS ?",
          answer: "Nous utilisons principalement Shopify pour les e-commerces et développons sur mesure pour les sites vitrines. Cela garantit performance et sécurité optimales."
        },
        {
          question: "Mon site sera-t-il bien référencé sur Google ?",
          answer: "Oui, tous nos sites incluent une optimisation SEO de base : balises meta, structure, vitesse, sitemap. Pour un référencement avancé, nous proposons des prestations dédiées."
        },
        {
          question: "Que se passe-t-il si mon site tombe en panne ?",
          answer: "Nous surveillons la disponibilité de nos sites. En cas de problème, nous intervenons rapidement. Nos hébergeurs garantissent 99.9% de disponibilité."
        }
      ]
    },
    {
      category: "Tarification",
      questions: [
        {
          question: "Les prix affichés sont-ils définitifs ?",
          answer: "Oui, nos forfaits sont à prix fixes. Seules les demandes de modifications importantes en cours de projet peuvent générer des coûts supplémentaires."
        },
        {
          question: "Quels sont les frais récurrents ?",
          answer: "Pour Shopify : 30€/mois d'abonnement à votre charge. L'hébergement et domaine sont inclus la première année, puis environ 100€/an."
        },
        {
          question: "Proposez-vous un paiement en plusieurs fois ?",
          answer: "Oui ! Nous acceptons le paiement en 3 fois sans frais : 50% à la commande, 30% à la présentation, 20% à la livraison."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Aucun frais caché ! Nous sommes transparents sur tous les coûts. Seuls les services supplémentaires demandés en cours de route sont facturés en plus."
        }
      ]
    },
    {
      category: "E-commerce",
      questions: [
        {
          question: "Combien de produits puis-je ajouter ?",
          answer: "Nos forfaits incluent l'intégration de 60 à 100 produits. Après livraison, vous pouvez ajouter autant de produits que vous souhaitez sans limite."
        },
        {
          question: "Quels moyens de paiement sont disponibles ?",
          answer: "Nous intégrons tous les moyens : cartes bancaires, PayPal, Apple Pay, Google Pay, virement, et même le paiement en plusieurs fois selon vos besoins."
        },
        {
          question: "Comment fonctionne la gestion des commandes ?",
          answer: "Vous recevez automatiquement les commandes par email. L'interface Shopify permet de gérer stock, expéditions, factures et suivis clients facilement."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à toutes vos questions sur nos services
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {item.question}
                        </h3>
                        <i className={`ri-arrow-down-s-line text-2xl text-blue-600 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}></i>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-gray-600 mb-8">
            Notre équipe est là pour répondre à toutes vos questions spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Nous contacter
            </Link>
            <a 
              href="mailto:clicraffter@gmail.com" 
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
