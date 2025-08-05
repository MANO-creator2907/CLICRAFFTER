
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://static.readdy.ai/image/1c4b163de486a2c214398358fe87a701/bf67b63d1ad59e7d837cdba883b488f0.png" 
                alt="Clicraffter Logo" 
                className="h-8 w-8"
              />
              <span className="font-[\'Pacifico\'] text-xl bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Clicraffter</span>
            </div>
            <p className="text-gray-400 mb-4">
              Votre partenaire digital pour créer des sites web qui convertissent et développent votre activité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors cursor-pointer">Accueil</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors cursor-pointer">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors cursor-pointer">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Forfaits</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#forfaits" className="hover:text-white transition-colors cursor-pointer">Site Vitrine - 990€</Link></li>
              <li><Link href="/#forfaits" className="hover:text-white transition-colors cursor-pointer">E-commerce - 1990€</Link></li>
              <li><Link href="/#forfaits" className="hover:text-white transition-colors cursor-pointer">E-commerce Premium - 2500€</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors cursor-pointer">Projet sur mesure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                <span>clicraffter@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                <span>06-25-60-09-14</span>
              </div>
              <div className="flex items-start">
                <i className="ri-map-pin-line mr-2 mt-0.5"></i>
                <span>Paris, France</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                <span>Lun - Ven : 9h - 18h</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              2024 Clicraffter. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
