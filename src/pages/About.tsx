
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-beige min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 py-12">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-8">À propos</h1>
        <div className="md:flex gap-8">
          <img
            src="/media/Diana_Fea_Profile.jpg"
            alt="Portrait"
            className="rounded-2xl mb-6 max-w-xs shadow-lg"
            loading="lazy"
          />
          <div>
            <h2 className="text-xl font-bold mb-4">Je m’appelle Diana Fea</h2>
            <p className="mb-4">
              Je suis créatrice de contenu vidéo et community manager indépendante, basée en Côte d’Ivoire.
              J’aide les entreprises à se rendre visibles sur les réseaux sociaux grâce à des vidéos créatives, des idées de publications, et des stratégies simples et efficaces adaptées à chaque plateforme.
            </p>
            <p className="mb-4">
              Je réalise des contenus courts, engageants et adaptés aux tendances (TikTok, Reels, Shorts…), et je propose aussi des idées de planning ou de rubriques pour mieux structurer la communication digitale.
            </p>
            <ul className="mb-4 list-disc list-inside">
              <li>Expertise en animation de communautés et storytelling vidéo</li>
              <li>Création de vidéos pour Instagram, TikTok, YouTube et LinkedIn</li>
              <li>Expérience auprès de marques locales et internationales</li>
            </ul>
            <p>
              Mon parcours :
              <ul className="mb-4 list-disc list-inside">
                <li>Diplômée en marketing digital, je comprends les besoins des entreprises en visibilité et en communication sur les réseaux sociaux.</li>
                <li>Projets vidéo réalisés pour des commerçants et PME locales, avec des contenus simples, créatifs et percutants.</li>
                <li>Compétences en création vidéo et en stratégie de contenu pour aider les entreprises à mieux communiquer et à renforcer leur présence en ligne.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
