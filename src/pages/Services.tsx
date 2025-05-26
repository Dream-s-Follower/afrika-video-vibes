
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
            <p>Vidéos percutantes, formats innovants, fidélisation de vos audiences sur les plateformes majeures.</p>
          </div>
          <div className="bg-white rounded-xl py-8 px-6 shadow border-t-4 border-accent">
            <h3 className="font-bold text-xl mb-2">Gestion de communautés</h3>
            <p>Modération, animation et optimisation de votre présence en ligne pour grandir sur le long terme.</p>
          </div>
          <div className="bg-white rounded-xl py-8 px-6 shadow border-t-4 border-accent">
            <h3 className="font-bold text-xl mb-2">Stratégie de contenu</h3>
            <p>Planification éditoriale, analyse des tendances, reporting et recommandations personnalisées.</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a href="#contact" className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-7 rounded-lg shadow-lg transition-colors text-lg">
            Demander un devis
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
