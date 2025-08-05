
'use client';

import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xanwnvkp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('✅ Message envoyé avec succès ! Nous vous répondrons rapidement.');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('❌ Une erreur s\'est produite. Veuillez réessayer.');
      }
    } catch (error) {
      setFormStatus('❌ Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Parlons de vos besoins et créons ensemble le site web parfait pour votre entreprise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Contactez-nous
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-blue-600 text-lg sm:text-xl"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-600 text-sm sm:text-base">Email</p>
                    <a href="mailto:clicraffter@gmail.com" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer text-sm sm:text-base break-all">
                      clicraffter@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <i className="ri-phone-line text-blue-600 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm sm:text-base">Téléphone</p>
                    <a href="tel:+33625600914" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer text-sm sm:text-base">
                      06 25 60 09 14
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <i className="ri-time-line text-blue-600 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm sm:text-base">Horaires</p>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">
                      Lun - Ven : 9h - 18h
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-start">
                  <i className="ri-lightbulb-line text-blue-600 text-xl sm:text-2xl mr-3 mt-1 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Consultation gratuite
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Nous offrons 30 minutes de consultation gratuite pour analyser vos besoins et vous proposer la meilleure solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de projet
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-6 sm:pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Sélectionnez votre projet</option>
                    <option value="showcase-website">Site vitrine</option>
                    <option value="e-commerce">Site e-commerce</option>
                    <option value="redesign">Refonte de site existant</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget approximatif
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-6 sm:pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Sélectionnez votre budget</option>
                    <option value="under-1000">Moins de 1 000€</option>
                    <option value="1000-3000">1 000€ - 3 000€</option>
                    <option value="3000-5000">3 000€ - 5 000€</option>
                    <option value="over-5000">Plus de 5 000€</option>
                    <option value="to-discuss">À discuter</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    maxLength={500}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-y"
                    placeholder="Décrivez votre projet en quelques mots..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">Maximum 500 caractères</p>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 mr-3 flex-shrink-0"
                  />
                  <label htmlFor="consent" className="text-xs sm:text-sm text-gray-600">
                    J'accepte que mes données soient utilisées pour répondre à ma demande de contact *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span className="ml-2 text-sm sm:text-base">Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                {formStatus && (
                  <div className={`p-3 sm:p-4 rounded-lg text-xs sm:text-sm ${ 
                    formStatus.includes('✅') 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
