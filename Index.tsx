
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="bg-beige min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="container py-20 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight animate-fade-in">
              Bonjour, <span className="text-accent">je suis une community manager</span> <br />
              <span className="text-accent">spécialisée vidéo</span> passionnée & indépendante
            </h1>
            <p className="text-lg mb-8">
              J’aide les entrepreneurs et marques africaines à rayonner sur les réseaux sociaux grâce à des contenus vidéo captivants, adaptés à chaque plateforme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-7 rounded-lg shadow-lg transition-colors">
                Découvrir mon travail
              </Link>
              <button
                onClick={() => navigate("/contact")}
                className="bg-anthracite hover:bg-accent text-beige hover:text-anthracite font-bold py-3 px-7 rounded-lg shadow-lg transition-colors border border-accent flex items-center gap-2"
              >
                Collaborer ensemble
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=600&h=600&facepad=2.5" alt="Community manager africaine" className="rounded-3xl shadow-xl max-w-xs md:max-w-sm object-cover border-4 border-accent" />
          </div>
        </section>

        {/* Services Slider */}
        <section className="container pt-12 pb-8">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-8 text-center text-accent">Mes services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl py-8 px-6 shadow transition-transform hover:scale-105 border-t-4 border-accent">
              <h3 className="font-bold text-xl mb-2">Création de contenu vidéo</h3>
              <p>Production de vidéos impactantes, adaptées aux tendances et formats (Reels, TikTok, Shorts, etc).</p>
            </div>
            <div className="bg-white rounded-xl py-8 px-6 shadow transition-transform hover:scale-105 border-t-4 border-accent">
              <h3 className="font-bold text-xl mb-2">Gestion de communautés</h3>
              <p>Animation, modération et développement de votre communauté sur les réseaux sociaux.</p>
            </div>
            <div className="bg-white rounded-xl py-8 px-6 shadow transition-transform hover:scale-105 border-t-4 border-accent">
              <h3 className="font-bold text-xl mb-2">Stratégie de contenu</h3>
              <p>Définition d’une stratégie audiovisuelle personnalisée pour chaque plateforme.</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/services" className="font-bold text-accent hover:underline hover:text-accent-light text-lg transition-colors">
              En savoir plus sur mes services →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
