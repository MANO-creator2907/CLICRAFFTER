
'use client';

import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenPromo = localStorage.getItem('clicraffter-promo-seen');
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('_subject', '🎁 Nouveau prospect - Code promo -10%');
    formData.append('_replyto', email);
    formData.append('_autoresponse', `Bonjour !

Merci de votre intérêt pour nos services web !

Voici votre code promo exclusif : CLICRAFFTER

✅ Réduction de 10% sur votre facture
✅ Valable sur tous nos forfaits  
✅ Offre limitée dans le temps

Pour utiliser votre code, contactez-nous :
📧 Email : clicraffter@gmail.com
📱 Téléphone : 06 25 60 09 14

Nous avons hâte de booster vos ventes en ligne !

L'équipe CliCraffter`);
    formData.append('message', `Nouveau prospect intéressé par l'offre -10% !

📧 Email du client : ${email}
🎁 Code à envoyer : CLICRAFFTER
📅 Date : ${new Date().toLocaleString('fr-FR')}

IMPORTANT: Le client doit recevoir automatiquement le code CLICRAFFTER par email de confirmation.`);

    try {
      const response = await fetch('https://formspree.io/f/xanwnvkp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        localStorage.setItem('clicraffter-promo-seen', 'true');
        setTimeout(() => {
          setIsOpen(false);
        }, 4000);
      } else {
        throw new Error('Erreur envoi');
      }
    } catch (error) {
      console.error('Erreur envoi:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement à clicraffter@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('clicraffter-promo-seen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
        >
          <i className="ri-close-line text-gray-600"></i>
        </button>

        <div className="bg-gradient-to-br from-orange-400 to-red-500 p-6 text-white text-center">
          <div>
            <i className="ri-gift-line text-4xl mb-2"></i>
          </div>
          <h2 className="text-2xl font-bold mb-2">Offre Spéciale !</h2>
          <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
            <span className="text-3xl font-black">-10%</span>
          </div>
        </div>

        <div className="p-6">
          {!submitted ? (
            <>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Recevez votre code promo !
              </h3>
              <p className="text-gray-600 mb-4 text-center text-sm">
                Saisissez votre email et recevez automatiquement votre code de réduction <strong>-10%</strong> dans votre boîte mail.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="promo-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre email *
                  </label>
                  <input
                    type="email"
                    id="promo-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="votre@email.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all disabled:opacity-50 cursor-pointer whitespace-nowrap flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span className="ml-2">Envoi automatique...</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-mail-send-line mr-2"></i>
                      Recevoir mon code automatiquement
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-3">
                * Code envoyé automatiquement par email
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Code envoyé automatiquement ! 
              </h3>
              <p className="text-gray-600 text-sm">
                Vérifiez votre boîte email ! Votre code de réduction <strong>-10%</strong> vous attend avec toutes les instructions.
              </p>
            </div>
          )}
        </div>

        <div className="bg-gray-50 px-6 py-3 text-center">
          <p className="text-xs text-gray-600">
            Envoi automatique • Valable sur tous nos forfaits • Offre limitée
          </p>
        </div>
      </div>
    </div>
  );
}