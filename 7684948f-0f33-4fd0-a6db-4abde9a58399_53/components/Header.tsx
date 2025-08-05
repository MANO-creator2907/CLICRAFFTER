
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  // Fermer le menu mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <img 
              src="https://static.readdy.ai/image/1c4b163de486a2c214398358fe87a701/bf67b63d1ad59e7d837cdba883b488f0.png" 
              alt="Clicraffter Logo" 
              className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-['Pacifico']">Clicraffter</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer text-sm xl:text-base">
              Accueil
            </Link>
            <button 
              onClick={() => handleScrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer text-sm xl:text-base"
            >
              Services
            </button>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer text-sm xl:text-base">
              Portfolio
            </Link>
            <button 
              onClick={() => handleScrollToSection('forfaits')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer text-sm xl:text-base"
            >
              Forfaits
            </button>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer text-sm xl:text-base">
              Blog
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer text-sm xl:text-base">
              FAQ
            </Link>
            <button 
              onClick={() => handleScrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 xl:px-6 xl:py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-sm xl:text-base"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer relative z-50 mobile-menu-container"
            aria-label="Menu mobile"
          >
            <span className={`block h-0.5 w-5 sm:w-6 bg-gray-600 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block h-0.5 w-5 sm:w-6 bg-gray-600 mt-1.5 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block h-0.5 w-5 sm:w-6 bg-gray-600 mt-1.5 transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        <nav className={`lg:hidden fixed right-0 top-0 h-screen w-full max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out mobile-menu-container ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col pt-16 sm:pt-20 p-4 sm:p-6 space-y-1 overflow-y-auto">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all cursor-pointer rounded-lg"
            >
              <i className="ri-home-line mr-3 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">Accueil</span>
            </Link>
            
            <button 
              onClick={() => handleScrollToSection('services')}
              className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all cursor-pointer text-left rounded-lg w-full"
            >
              <i className="ri-service-line mr-3 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">Services</span>
            </button>
            
            <Link 
              href="/portfolio" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all cursor-pointer rounded-lg"
            >
              <i className="ri-briefcase-line mr-3 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">Portfolio</span>
            </Link>
            
            <button 
              onClick={() => handleScrollToSection('forfaits')}
              className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all cursor-pointer text-left rounded-lg w-full"
            >
              <i className="ri-price-tag-line mr-3 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">Forfaits</span>
            </button>
            
            <Link 
              href="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all cursor-pointer rounded-lg"
            >
              <i className="ri-article-line mr-3 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">Blog</span>
            </Link>
            
            <Link 
              href="/faq" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all cursor-pointer rounded-lg"
            >
              <i className="ri-question-line mr-3 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">FAQ</span>
            </Link>
            
            <button 
              onClick={() => handleScrollToSection('contact')}
              className="flex items-center justify-center mt-4 sm:mt-6 bg-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all cursor-pointer text-center whitespace-nowrap font-semibold text-sm sm:text-base"
            >
              <i className="ri-mail-line mr-2"></i>
              Contact
            </button>

            {/* Informations de contact dans le menu mobile */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600">
                  <i className="ri-phone-line mr-2 text-blue-600"></i>
                  <a href="tel:+33625600914" className="hover:text-blue-600">06 25 60 09 14</a>
                </div>
                <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600">
                  <i className="ri-mail-line mr-2 text-blue-600"></i>
                  <a href="mailto:clicraffter@gmail.com" className="hover:text-blue-600 break-all">clicraffter@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
