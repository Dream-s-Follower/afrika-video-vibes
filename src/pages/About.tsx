
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
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=400&h=500"
            alt="Portrait"
            className="rounded-2xl mb-6 max-w-xs shadow-lg"
            loading="lazy"
          />
          <div>
            <h2 className="text-xl font-bold mb-4">Je m’appelle [Prénom NOM]</h2>
            <p className="mb-4">
              Community manager vidéo basée en Afrique, j’accompagne les entrepreneurs, créateur·ices et entreprises désireux·ses de se démarquer sur les réseaux sociaux avec des contenus créatifs, adaptés et qui engagent.
            </p>
            <ul className="mb-4 list-disc list-inside">
              <li>Expertise en animation de communautés et storytelling vidéo</li>
              <li>Création de vidéos pour Instagram, TikTok, YouTube et LinkedIn</li>
              <li>Expérience auprès de marques locales et internationales</li>
            </ul>
            <p>
              Mon parcours : [Décris ici une expérience phare, formation ou succès-clé].
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
