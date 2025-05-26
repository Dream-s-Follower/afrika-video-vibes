
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="bg-beige min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 py-12">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-6">Mes services</h1>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="bg-white rounded-xl py-8 px-6 shadow border-t-4 border-accent">
            <h3 className="font-bold text-xl mb-2">Création de contenu vidéo</h3>
            <p>Je réalise des vidéos courtes, dynamiques et sur-mesure pour valoriser vos produits, vos services ou vos événements.
Je m’occupe de la prise de vues (iPhone 16 Pro), du montage (CapCut), des transitions, du storytelling, et de l’adaptation aux formats tendances (Reels, TikTok, Shorts).
Chaque vidéo est pensée pour créer de l’impact sur les réseaux sociaux.</p>
          </div>
          <div className="bg-white rounded-xl py-8 px-6 shadow border-t-4 border-accent">
            <h3 className="font-bold text-xl mb-2">Gestion de communautés</h3>
            <p>Je vous aide à interagir avec votre audience, créer un lien, et améliorer l’engagement sur vos pages. et la gestion basique des publications pour renforcer votre présence en ligne.</p>
          </div>
          <div className="bg-white rounded-xl py-8 px-6 shadow border-t-4 border-accent">
            <h3 className="font-bold text-xl mb-2">Stratégie de contenu</h3>
            <p>
              Je vous accompagne dans la définition d’un plan de contenu clair, en fonction de vos objectifs (notoriété, vente, fidélisation).
              Je vous aide à choisir les bons formats, les bonnes fréquences de publication, et à organiser votre contenu selon les plateformes (Instagram, Facebook, TikTok, YouTube Shorts).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
