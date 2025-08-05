
'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function TestimonialsSection() {
  const pathname = usePathname();
  const router = useRouter();

  const testimonials = [
    {
      name: "Sophie Martinez",
      company: "Boutique Luna",
      role: "Propriétaire",
      image: "https://readdy.ai/api/search-image?query=professional%20woman%20business%20owner%20smiling%20confident%20portrait%20headshot%20studio%20lighting%20clean%20white%20background%20modern%20entrepreneurship&width=150&height=150&seq=testimonial1&orientation=squarish",
      content: "Grâce à leur expertise, mon site e-commerce a généré 3x plus de ventes dès le premier mois. L'équipe a parfaitement compris mes besoins et livré un site magnifique.",
      rating: 5
    },
    {
      name: "Marc Dubois",
      company: "Cabinet d'Avocat Dubois",
      role: "Avocat",
      image: "https://readdy.ai/api/search-image?query=professional%20lawyer%20man%20in%20suit%20confident%20smile%20portrait%20headshot%20studio%20lighting%20clean%20white%20background%20legal%20professional&width=150&height=150&seq=testimonial2&orientation=squarish",
      content: "Un travail exceptionnel ! Mon site vitrine reflète parfaitement le sérieux de mon cabinet. Le référencement est excellent, je reçois beaucoup plus de clients.",
      rating: 5
    },
    {
      name: "Amélie Chen",
      company: "Restaurant Le Jardin",
      role: "Gérante",
      image: "https://readdy.ai/api/search-image?query=professional%20woman%20restaurant%20owner%20chef%20smiling%20confident%20portrait%20headshot%20studio%20lighting%20clean%20white%20background%20hospitality%20industry&width=150&height=150&seq=testimonial3&orientation=squarish",
      content: "Service impeccable du début à la fin ! Notre site attire maintenant de nouveaux clients chaque jour. Les réservations en ligne fonctionnent parfaitement.",
      rating: 5
    },
    {
      name: "Thomas Leroy",
      company: "Artisan Menuisier",
      role: "Artisan",
      image: "https://readdy.ai/api/search-image?query=professional%20craftsman%20artisan%20man%20smiling%20confident%20portrait%20headshot%20studio%20lighting%20clean%20white%20background%20skilled%20worker&width=150&height=150&seq=testimonial4&orientation=squarish",
      content: "Enfin un site qui met en valeur mon savoir-faire ! Les photos de mes réalisations sont sublimes et j'ai doublé mes demandes de devis en 2 mois.",
      rating: 5
    },
    {
      name: "Carla Rossi",
      company: "Studio Yoga Zen",
      role: "Instructrice",
      image: "https://readdy.ai/api/search-image?query=professional%20yoga%20instructor%20woman%20peaceful%20smile%20portrait%20headshot%20studio%20lighting%20clean%20white%20background%20wellness%20industry&width=150&height=150&seq=testimonial5&orientation=squarish",
      content: "Mon site web est devenu mon meilleur outil de communication. Les élèves s'inscrivent directement en ligne et l'ambiance zen transparaît parfaitement.",
      rating: 5
    },
    {
      name: "David Bernard",
      company: "Garage Auto Plus",
      role: "Gérant",
      image: "https://readdy.ai/api/search-image?query=professional%20automotive%20mechanic%20man%20confident%20smile%20portrait%20headshot%20studio%20lighting%20clean%20white%20background%20automotive%20industry&width=150&height=150&seq=testimonial6&orientation=squarish",
      content: "Très satisfait du résultat ! Le site est moderne, facile à utiliser et me permet de gérer mes rendez-vous en ligne. Mes clients adorent la simplicité.",
      rating: 5
    }
  ];

  const handleContactClick = () => {
    if (pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui ont transformé leur activité grâce à nos solutions web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-white"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`Photo de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover mr-4 hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-600 font-semibold">{testimonial.company}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i 
                    key={i} 
                    className="ri-star-fill text-yellow-400 text-lg hover:scale-125 transition-transform"
                  ></i>
                ))}
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto hover:bg-blue-100 transition-colors duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <img 
                    key={index}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover hover:scale-125 transition-transform duration-300"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className="ri-star-fill text-yellow-400 text-xl hover:scale-125 transition-transform"
                    ></i>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Note moyenne : 5/5 ⭐</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Plus de 150 projets réalisés avec succès
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez nos clients satisfaits et transformez votre activité dès aujourd'hui
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-110 hover:shadow-xl"
            >
              Démarrer mon projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}