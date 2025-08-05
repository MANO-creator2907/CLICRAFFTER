
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';
import LoadingSpinner from '@/components/LoadingSpinner';

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export default function BlogArticleContent({ articleId }: { articleId: string }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  const articles: Article[] = [
    {
      id: 1,
      title: "10 conseils pour optimiser votre site e-commerce",
      excerpt: "Découvrez les meilleures pratiques pour augmenter vos ventes en ligne et améliorer l'expérience utilisateur de votre boutique.",
      image: "https://static.readdy.ai/image/1c4b163de486a2c214398358fe87a701/4b03896246a4190470c68ab73bc7b7a8.jfif",
      category: "E-commerce",
      date: "15 Mars 2024",
      readTime: "5 min",
      author: "Équipe Clicraffter",
      content: `
        <div class="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">À propos de moi</h2>
          <p class="text-gray-700 leading-relaxed">En tant que fondateur de Clicraffter, j'ai accompagné plus de 100 entreprises dans leur transformation digitale. Ma passion pour l'e-commerce et l'optimisation des conversions m'a amené à développer une expertise unique dans ce domaine.</p>
        </div>
        
        <div class="mb-8 p-6 bg-green-50 rounded-lg">
          <h2 class="text-2xl font-bold text-green-900 mb-4">Mes objectifs</h2>
          <p class="text-gray-700 leading-relaxed">À travers cet article, je souhaite partager avec vous les stratégies éprouvées qui ont permis à mes clients d'augmenter leurs ventes en ligne de 40% en moyenne. Mon objectif est de démocratiser ces bonnes pratiques pour que chaque entrepreneur puisse réussir sur le web.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6">L'importance d'un site e-commerce optimisé</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Dans le monde du commerce en ligne d'aujourd'hui, avoir un site e-commerce bien optimisé n'est plus un luxe, c'est une nécessité. Avec des millions de boutiques en ligne qui se disputent l'attention des consommateurs, il est crucial de se démarquer par une expérience utilisateur exceptionnelle et des performances techniques irréprochables.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">1. Optimisez la vitesse de chargement</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">La vitesse de chargement est l'un des facteurs les plus critiques pour le succès d'un site e-commerce. Des études montrent qu'une seconde de délai peut réduire les conversions de 7%. Assurez-vous que vos pages se chargent en moins de 3 secondes pour maintenir l'engagement des visiteurs.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">2. Simplifiez le processus de commande</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Un processus de commande complexe est l'une des principales causes d'abandon de panier. Réduisez le nombre d'étapes, offrez des options de paiement multiples et permettez l'achat sans création de compte.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">3. Investissez dans un design responsive</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Avec plus de 50% des achats en ligne effectués sur mobile, votre site doit offrir une expérience parfaite sur tous les appareils. Un design responsive n'est plus optionnel.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">4. Optimisez vos fiches produits</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Des descriptions détaillées, des photos de haute qualité sous plusieurs angles, et des avis clients authentiques sont essentiels pour convertir les visiteurs en acheteurs.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">5. Mettez en place un système de recherche efficace</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Permettez à vos clients de trouver rapidement ce qu'ils cherchent avec un moteur de recherche intuitif, des filtres pertinents et des suggestions de produits.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">6. Sécurisez les transactions</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">La confiance est primordiale dans l'e-commerce. Utilisez des certificats SSL, affichez clairement vos politiques de sécurité et proposez des moyens de paiement reconnus.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">7. Implémentez un chat en direct</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Le support client en temps réel peut considérablement améliorer les taux de conversion en répondant immédiatement aux questions et objections des prospects.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">8. Optimisez pour le SEO</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Un bon référencement naturel est crucial pour attirer du trafic qualifié. Travaillez vos mots-clés, optimisez vos balises et créez du contenu de qualité.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">9. Utilisez la preuve sociale</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Les avis clients, témoignages et certifications rassurent les nouveaux visiteurs et peuvent significativement augmenter vos conversions.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">10. Analysez et optimisez continuellement</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Utilisez des outils d'analytics pour comprendre le comportement de vos visiteurs et identifier les points d'amélioration. L'optimisation est un processus continu.</p>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">L'optimisation d'un site e-commerce est un investissement qui porte ses fruits sur le long terme. En appliquant ces conseils, vous devriez voir une amélioration significative de vos performances et de votre chiffre d'affaires. N'hésitez pas à me contacter si vous souhaitez un accompagnement personnalisé pour votre projet e-commerce.</p>
      `,
    },
    {
      id: 2,
      title: "L'importance du design responsive en 2024",
      excerpt: "Pourquoi votre site doit absolument être optimisé mobile et comment cela impacte votre référencement Google.",
      image: "https://readdy.ai/api/search-image?query=responsive%20web%20design%20multiple%20devices%20smartphone%20tablet%20laptop%20mobile%20optimization%20user%20experience%20modern%20website&width=600&height=300&seq=blog2&orientation=landscape",
      category: "Design",
      date: "10 Mars 2024",
      readTime: "4 min",
      author: "Équipe Clicraffter",
      content: `
        <div class="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">À propos de moi</h2>
          <p class="text-gray-700 leading-relaxed">Designer et développeur web depuis plus de 8 ans, j'ai vu l'évolution du web mobile transformer complètement notre approche du design. Chez Clicraffter, nous plaçons l'expérience mobile au cœur de chaque projet.</p>
        </div>
        
        <div class="mb-8 p-6 bg-green-50 rounded-lg">
          <h2 class="text-2xl font-bold text-green-900 mb-4">Mes objectifs</h2>
          <p class="text-gray-700 leading-relaxed">Mon but avec cet article est de vous faire comprendre pourquoi le design responsive n'est plus optionnel en 2024 et comment il peut directement impacter votre succès en ligne. Je veux vous donner les clés pour prendre les bonnes décisions concernant votre site web.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Le mobile-first n'est plus une option</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">En 2024, le design responsive n'est plus un avantage concurrentiel, c'est une exigence fondamentale. Avec plus de 60% du trafic web provenant des appareils mobiles, ignorer l'expérience mobile revient à ignorer la majorité de votre audience.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">L'évolution du comportement des utilisateurs</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Les habitudes de navigation ont radicalement changé. Les utilisateurs passent facilement d'un appareil à l'autre durant leur parcours d'achat, et ils s'attendent à une expérience fluide sur chaque plateforme.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Impact sur le référencement Google</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Google utilise l'indexation mobile-first depuis 2019. Cela signifie que Google évalue principalement la version mobile de votre site pour le classement dans les résultats de recherche, même pour les recherches effectuées sur desktop.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Les principes du design responsive</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Un bon design responsive repose sur plusieurs piliers : grilles flexibles, images adaptatives, points de rupture intelligents et approche mobile-first dans la conception.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Performance et vitesse</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Un site responsive bien conçu améliore les performances sur tous les appareils. Les temps de chargement réduits se traduisent par une meilleure expérience utilisateur et un meilleur référencement.</p>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Meilleures pratiques pour 2024</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Privilégiez les approches modernes comme CSS Grid et Flexbox, optimisez les images avec les formats WebP et AVIF, et testez régulièrement sur différents appareils et navigateurs.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Conclusion</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Investir dans un design responsive de qualité, c'est investir dans l'avenir de votre présence en ligne. C'est un facteur déterminant pour votre succès digital. Si votre site n'est pas encore optimisé pour mobile, il est temps d'agir !</p>
      `,
    },
    {
      id: 3,
      title: "SEO : Les bases pour bien référencer votre site",
      excerpt: "Guide complet pour comprendre le référencement naturel et positionner votre site en première page de Google.",
      image: "https://readdy.ai/api/search-image?query=SEO%20search%20engine%20optimization%20Google%20ranking%20keywords%20digital%20marketing%20analytics%20website%20traffic%20growth%20strategies&width=600&height=300&seq=blog3&orientation=landscape",
      category: "SEO",
      date: "8 Mars 2024",
      readTime: "7 min",
      author: "Équipe Clicraffter",
      content: `
        <div class="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">À propos de moi</h2>
          <p class="text-gray-700 leading-relaxed">Expert en référencement naturel depuis plus de 10 ans, j'ai aidé des centaines d'entreprises à améliorer leur visibilité sur Google. Ma spécialité ? Transformer les données en insights actionnables pour maximiser la performance de vos sites web.</p>
        </div>
        
        <div class="mb-8 p-6 bg-green-50 rounded-lg">
          <h2 class="text-2xl font-bold text-green-900 mb-4">Mes objectifs</h2>
          <p class="text-gray-700 leading-relaxed">Ce guide SEO a pour objectif de démystifier le référencement naturel et de vous donner toutes les clés pour améliorer votre positionnement sur Google. Mon but est de vous rendre autonome dans l'optimisation de votre site web tout en vous évitant les erreurs coûteuses.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Comprendre les fondamentaux du SEO</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Le référencement naturel (SEO) est l'art d'optimiser votre site web pour qu'il soit mieux compris et mieux classé par les moteurs de recherche. C'est un investissement à long terme qui peut transformer votre visibilité en ligne.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">1. La recherche de mots-clés</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Tout commence par comprendre ce que recherchent vos clients potentiels. Utilisez des outils comme Google Keyword Planner pour identifier les mots-clés pertinents avec un bon volume de recherche et une concurrence modérée.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">2. L'optimisation on-page</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Chaque page de votre site doit être optimisée individuellement. Cela inclut les balises titre, meta descriptions, balises H1-H6, et l'optimisation du contenu autour de vos mots-clés cibles.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">3. La création de contenu de qualité</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Google privilégie le contenu qui apporte une réelle valeur aux utilisateurs. Créez du contenu original, informatif et régulièrement mis à jour qui répond aux questions de votre audience.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">4. L'optimisation technique</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">La structure technique de votre site est cruciale. Assurez-vous que votre site se charge rapidement, qu'il est sécurisé (HTTPS), et que sa structure est facile à naviguer pour les robots des moteurs de recherche.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">5. Le maillage interne</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Créez des liens entre vos pages pour aider Google à comprendre la structure et l'importance relative de votre contenu. Un bon maillage interne améliore l'expérience utilisateur et le SEO.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">6. Les backlinks de qualité</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Les liens provenant d'autres sites web vers le vôtre sont un signal fort de confiance pour Google. Concentrez-vous sur l'obtention de liens naturels provenant de sites autoritaires de votre secteur.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">7. L'expérience utilisateur (UX)</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Google intègre de plus en plus les signaux d'expérience utilisateur dans son algorithme. Un site facile à utiliser, avec un faible taux de rebond et une bonne durée de session, sera favorisé.</p>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Mesurer et ajuster</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Utilisez Google Analytics et Google Search Console pour suivre vos performances SEO. Identifiez ce qui fonctionne, ce qui ne fonctionne pas, et ajustez votre stratégie en conséquence.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Conclusion</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Le SEO est un marathon, pas un sprint. Avec de la patience, de la persévérance et les bonnes pratiques, vous pouvez considérablement améliorer la visibilité de votre site web dans les résultats de recherche. N'hésitez pas à nous contacter si vous souhaitez un audit SEO complet de votre site !</p>
      `,
    },
    {
      id: 4,
      title: "Shopify vs Site sur mesure : que choisir ?",
      excerpt: "Comparaison détaillée entre Shopify et le développement sur mesure pour vous aider à faire le bon choix.",
      image: "https://readdy.ai/api/search-image?query=Shopify%20platform%20vs%20custom%20development%20comparison%20ecommerce%20solutions%20website%20building%20technology%20choices%20business%20decisions&width=600&height=300&seq=blog4&orientation=landscape",
      category: "Conseils",
      date: "5 Mars 2024",
      readTime: "6 min",
      author: "Équipe Clicraffter",
      content: `
        <div class="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">À propos de moi</h2>
          <p class="text-gray-700 leading-relaxed">Avec plus de 12 ans d'expérience dans le développement web et e-commerce, j'ai travaillé sur tous types de projets : de petites boutiques Shopify aux plateformes e-commerce sur mesure pour de grandes entreprises. Cette expérience me permet de vous guider objectivement dans votre choix.</p>
        </div>
        
        <div class="mb-8 p-6 bg-green-50 rounded-lg">
          <h2 class="text-2xl font-bold text-green-900 mb-4">Mes objectifs</h2>
          <p class="text-gray-700 leading-relaxed">Mon objectif avec cette comparaison est de vous aider à prendre la meilleure décision pour votre projet e-commerce. Je veux vous donner une vision claire et honnête des avantages et inconvénients de chaque solution, sans parti pris commercial.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Le dilemme du choix technologique</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Quand il s'agit de créer une boutique en ligne, l'une des décisions les plus importantes concerne le choix de la plateforme. Shopify ou développement sur mesure ? Chaque option a ses avantages et inconvénients.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Shopify : La solution clé en main</h3>
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Avantages :</h4>
        <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Rapidité de mise en ligne</strong> : Votre boutique peut être opérationnelle en quelques jours</li>
          <li><strong>Maintenance simplifiée</strong> : Shopify s'occupe des mises à jour et de la sécurité</li>
          <li><strong>Écosystème riche</strong> : Milliers d'applications et de thèmes disponibles</li>
          <li><strong>Support intégré</strong> : Assistance technique disponible 24/7</li>
        </ul>
        
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Inconvénients :</h4>
        <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Coûts récurrents</strong> : Abonnement mensuel + commissions sur les ventes</li>
          <li><strong>Limitations de personnalisation</strong> : Contraintes du framework</li>
          <li><strong>Dépendance</strong> : Vous ne possédez pas votre plateforme</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Développement sur mesure : La liberté totale</h3>
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Avantages :</h4>
        <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Personnalisation illimitée</strong> : Tout est possible selon vos besoins</li>
          <li><strong>Propriété complète</strong> : Vous possédez 100% de votre solution</li>
          <li><strong>Évolutivité</strong> : Adaptation parfaite à votre croissance</li>
          <li><strong>Performance optimisée</strong> : Code optimisé pour vos besoins spécifiques</li>
        </ul>
        
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Inconvénients :</h4>
        <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Investissement initial</strong> : Coût de développement plus élevé</li>
          <li><strong>Temps de développement</strong> : Plusieurs mois de développement</li>
          <li><strong>Maintenance technique</strong> : Nécessite des compétences techniques</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Comment choisir ?</h2>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Choisissez Shopify si :</h3>
        <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Vous voulez démarrer rapidement</li>
          <li>Votre budget initial est limité</li>
          <li>Vous vendez des produits standards</li>
          <li>Vous n'avez pas d'équipe technique</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Choisissez le sur mesure si :</h3>
        <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Vous avez des besoins spécifiques complexes</li>
          <li>Vous voulez une solution unique</li>
          <li>Vous avez le budget pour investir</li>
          <li>Vous planifiez une croissance importante</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Conclusion</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Il n'y a pas de mauvais choix, seulement des choix inadaptés à votre situation. Analysez vos besoins, votre budget et vos objectifs pour prendre la décision qui vous correspond le mieux. N'hésitez pas à nous consulter pour un conseil personnalisé !</p>
      `,
    },
    {
      id: 5,
      title: "Les tendances web design 2024",
      excerpt: "Découvrez les dernières tendances en matière de design web pour créer un site moderne et attractif.",
      image: "https://readdy.ai/api/search-image?query=modern%20web%20design%20trends%202024%20creative%20layouts%20minimalist%20style%20user%20interface%20contemporary%20digital%20aesthetics%20innovation&width=600&height=300&seq=blog5&orientation=landscape",
      category: "Design",
      date: "2 Mars 2024",
      readTime: "5 min",
      author: "Équipe Clicraffter",
      content: `
        <div class="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">À propos de moi</h2>
          <p class="text-gray-700 leading-relaxed">Designer web passionné depuis plus de 7 ans, je suis constamment à l'affût des nouvelles tendances et innovations dans le domaine du design digital. Chez Clicraffter, je veille à ce que nos créations restent à la pointe de la modernité tout en conservant leur efficacité.</p>
        </div>
        
        <div class="mb-8 p-6 bg-green-50 rounded-lg">
          <h2 class="text-2xl font-bold text-green-900 mb-4">Mes objectifs</h2>
          <p class="text-gray-700 leading-relaxed">À travers cet article, je souhaite partager avec vous ma veille créative et vous présenter les tendances design qui marqueront 2024. Mon objectif est de vous inspirer et de vous aider à moderniser votre site web pour qu'il reste compétitif et attractif.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Les tendances qui marquent 2024</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Le web design évolue constamment, et 2024 apporte son lot de nouvelles tendances passionnantes. Voici les tendances à surveiller pour créer des sites web modernes et engageants.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">1. Le design néomorphique</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Le néomorphisme combine les avantages du design plat et du skeuomorphisme. Il utilise des ombres subtiles et des reliefs pour créer une interface tactile et moderne, donnant l'impression que les éléments sortent de l'écran.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">2. Les gradients audacieux</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Les dégradés colorés font leur grand retour, mais avec plus de sophistication. Les designers utilisent des transitions de couleurs complexes pour créer de la profondeur et attirer l'attention sur les éléments clés.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">3. La typographie expressive</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Les polices personnalisées et expressives deviennent des éléments de design à part entière. Les typographies variables permettent une flexibilité sans précédent dans l'expression visuelle.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">4. Les micro-interactions avancées</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Les animations subtiles et les micro-interactions améliorent l'expérience utilisateur en fournissant des feedbacks visuels immédiats et en guidant l'utilisateur dans sa navigation.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">5. Le mode sombre par défaut</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">De plus en plus de sites proposent le mode sombre comme option principale, réduisant la fatigue oculaire et offrant une esthétique moderne et élégante.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">6. Les layouts asymétriques</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Briser la grille traditionnelle avec des mises en page asymétriques crée des expériences visuelles uniques et mémorables, tout en mantenat la fonctionnalité.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">7. L'intégration d'éléments 3D</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Les éléments tridimensionnels deviennent plus accessibles grâce aux améliorations des performances web, permettant des expériences immersives sans compromettre la vitesse.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">8. La conception inclusive</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">L'accessibilité n'est plus une option mais une nécessité. Les designs incluent des contrastes élevés, une navigation au clavier et des alternatives textuelles pour tous les utilisateurs.</p>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Mise en pratique</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">L'art consiste à adopter ces tendances tout en gardant l'utilisabilité et les performances au centre des préoccupations. Une tendance n'a de valeur que si elle améliore l'expérience utilisateur.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Conclusion</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">2024 promet d'être une année excitante pour le web design. En intégrant judicieusement ces tendances, vous pouvez créer des expériences web qui marquent les esprits et engagent votre audience. Restons en contact pour échanger sur vos projets design !</p>
      `,
    },
    {
      id: 6,
      title: "Comment mesurer le ROI de votre site web",
      excerpt: "Apprenez à calculer le retour sur investissement de votre site et les KPIs essentiels à suivre.",
      image: "https://readdy.ai/api/search-image?query=website%20ROI%20analytics%20dashboard%20business%20metrics%20conversion%20tracking%20digital%20performance%20measurement%20success%20indicators&width=600&height=300&seq=blog6&orientation=landscape",
      category: "Analytics",
      date: "28 Février 2024",
      readTime: "6 min",
      author: "Équipe Clicraffter",
      content: `
        <div class="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">À propos de moi</h2>
          <p class="text-gray-700 leading-relaxed">Consultant en stratégie digitale depuis plus de 6 ans, j'aide les entreprises à optimiser leur retour sur investissement digital. Ma spécialité ? Transformer les données en insights actionnables pour maximiser la performance de vos sites web.</p>
        </div>
        
        <div class="mb-8 p-6 bg-green-50 rounded-lg">
          <h2 class="text-2xl font-bold text-green-900 mb-4">Mes objectifs</h2>
          <p class="text-gray-700 leading-relaxed">Mon objectif avec ce guide est de vous donner les clés pour mesurer efficacement le ROI de votre site web. Je veux vous aider à justifier vos investissements digitaux et à optimiser vos ressources pour maximiser vos résultats business.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6">L'importance de mesurer le ROI</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Votre site web est un investissement, et comme tout investissement, vous devez pouvoir mesurer son retour. Comprendre le ROI de votre site web vous aide à prendre des décisions éclairées sur les améliorations et optimisations futures.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Définir vos objectifs</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Avant de mesurer quoi que ce soit, vous devez clairement définir ce que le succès représente pour votre entreprise. Ventes en ligne ? Génération de leads ? Notoriété de marque ? Chaque objectif nécessite des métriques différentes.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Les métriques essentielles à suivre</h3>
        
        <h4 class="text-xl font-semibold text-gray-800 mb-3">1. Taux de conversion</h4>
        <p class="text-gray-700 mb-6 leading-relaxed">Le pourcentage de visiteurs qui accomplissent une action désirée. C'est souvent le KPI le plus important pour mesurer l'efficacité de votre site.</p>
        
        <h4 class="text-xl font-semibold text-gray-800 mb-3">2. Coût d'acquisition client (CAC)</h4>
        <p class="text-gray-700 mb-6 leading-relaxed">Combien vous coûte l'acquisition de chaque nouveau client via votre site web. Cela inclut les coûts de développement, marketing et maintenance.</p>
        
        <h4 class="text-xl font-semibold text-gray-800 mb-3">3. Valeur vie client (CLV)</h4>
        <p class="text-gray-700 mb-6 leading-relaxed">Le montant total qu'un client dépense avec votre entreprise sur toute la durée de votre relation. Cette métrique est cruciale pour évaluer la rentabilité à long terme.</p>
        
        <h4 class="text-xl font-semibold text-gray-800 mb-3">4. Temps passé sur le site</h4>
        <p class="text-gray-700 mb-6 leading-relaxed">Un indicateur de l'engagement des utilisateurs. Plus ils restent, plus ils sont susceptibles de convertir ou de revenir.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Calculer le ROI</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">La formule de base : ROI = (Gain - Coût de l'investissement) / Coût de l'investissement × 100</p>
        
        <p class="text-gray-700 mb-6 leading-relaxed">Pour un site web :<br>
        ROI = (Revenus générés par le site - Coût total du site) / Coût total du site × 100</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Les coûts à inclure</h3>
        <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Coût de développement initial</li>
          <li>Coûts de maintenance annuels</li>
          <li>Coûts d'hébergement et domaine</li>
          <li>Coûts marketing digital</li>
          <li>Temps interne consacré au projet</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Outils de mesure recommandés</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Google Analytics, Google Search Console, et des outils spécialisés selon votre secteur. Ces plateformes offrent des insights détaillés sur les performances de votre site.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Optimisation continue</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Le ROI n'est pas un chiffre figé. Utilisez ces données pour identifier les points d'amélioration et optimiser continuellement les performances de votre site.</p>
        
        <h3 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Conclusion</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">Mesurer le ROI de votre site web vous permet de justifier vos investissements digitaux et d'optimiser vos ressources pour maximiser votre retour. C'est un processus essentiel pour toute entreprise sérieuse sur le web. Contactez-nous pour un audit personnalisé de votre performance digitale !</p>
      `,
    },
  ];

  useEffect(() => {
    const foundArticle = articles.find(a => a.id === parseInt(articleId));
    setArticle(foundArticle || null);
    setLoading(false);
  }, [articleId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">Désolé, cet article n'existe pas ou a été supprimé.</p>
          <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
            Retour au blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-20">
        <div className="relative h-96 bg-gray-900">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-top opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                <div className="flex items-center text-sm">
                  <i className="ri-calendar-line mr-1"></i>
                  {article.date}
                </div>
                <div className="flex items-center text-sm">
                  <i className="ri-time-line mr-1"></i>
                  {article.readTime}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-gray-200">
                Par {article.author}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center justify-between">
              <div className="text-gray-600">
                <p>Publié le {article.date} par {article.author}</p>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 cursor-pointer">
                  <i className="ri-heart-line"></i>
                  <span>J'aime</span>
                </button>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 cursor-pointer">
                  <i className="ri-share-line"></i>
                  <span>Partager</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'aide pour votre projet web ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe d'experts est là pour vous accompagner dans la réalisation de vos projets digitaux.
            </p>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Démarrer mon projet
            </Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Articles similaires
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 3)
              .map((relatedArticle) => (
                <article key={relatedArticle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {relatedArticle.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <i className="ri-time-line mr-1"></i>
                        {relatedArticle.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {relatedArticle.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {relatedArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <i className="ri-calendar-line mr-1"></i>
                        {relatedArticle.date}
                      </div>
                      <Link 
                        href={`/blog/${relatedArticle.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm cursor-pointer"
                      >
                        Lire la suite →
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
