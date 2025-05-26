
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoGrid from "@/components/VideoGrid";
import { useState } from "react";

const FORMAT_LABELS = [
  { key: "all", label: "Tous les formats" },
  { key: "vertical", label: "Vertical (TikTok, Reels...)" },
  { key: "horizontal", label: "Horizontal (YouTube...)" },
];

const VIDEOS = [
  {
    id: 1,
    title: "Lancement d’une campagne TikTok",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    format: "vertical",
    platform: "TikTok",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=400&h=600",
  },
  {
    id: 2,
    title: "Présentation d’un produit",
    src: "https://www.w3schools.com/html/movie.mp4",
    format: "horizontal",
    platform: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=600&h=400",
  },
  {
    id: 3,
    title: "Inspiration Reels Instagram 2024",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    format: "vertical",
    platform: "Instagram",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=400&h=600"
  },
  // autres vidéos fictives pour la galerie...
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredVideos = filter === "all" ? VIDEOS : VIDEOS.filter((v) => v.format === filter);

  return (
    <div className="bg-beige min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-4">Portfolio vidéo</h1>
          <p className="text-lg mb-4">Découvrez quelques-unes de mes réalisations : vidéos verticales et horizontales pour toutes les plateformes !</p>
          <div className="flex flex-wrap gap-3 justify-center mt-4 mb-2">
            {FORMAT_LABELS.map(f => (
              <button
                key={f.key}
                className={`py-2 px-4 rounded-full font-semibold border transition-colors ${
                  filter === f.key ? "bg-accent text-white border-accent" : "bg-white text-anthracite border-accent"
                }`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </header>
        <VideoGrid videos={filteredVideos} />
      </main>
      <Footer />
    </div>
  );
}
