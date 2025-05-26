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
    title: "Création de contenu TikTok",
    src: "https://ywmilwnkqidziruqiedx.supabase.co/storage/v1/object/public/test//videos1.mp4",
    format: "vertical",
    platform: "TikTok",
  },
  {
    id: 2,
    title: "Présentation produit YouTube",
    src: "https://ywmilwnkqidziruqiedx.supabase.co/storage/v1/object/public/test//videos2.mp4",
    format: "vertical",
    platform: "YouTube",
  },
  {
    id: 3,
    title: "Reels Instagram créatif",
    src: "https://ywmilwnkqidziruqiedx.supabase.co/storage/v1/object/public/test//videos3.mp4",
    format: "vertical",
    platform: "Instagram",
  },
  {
    id: 4,
    title: "Contenu marketing dynamique",
    src: "https://ywmilwnkqidziruqiedx.supabase.co/storage/v1/object/public/test//videos4.mp4",
    format: "vertical",
    platform: "YouTube",
  },
  {
    id: 5,
    title: "Story Instagram engageante",
    src: "https://ywmilwnkqidziruqiedx.supabase.co/storage/v1/object/public/test//videos5.mp4",
    format: "vertical",
    platform: "Instagram",
  },
  {
    id: 6,
    title: "Vidéo promotionnelle courte",
    src: "https://ywmilwnkqidziruqiedx.supabase.co/storage/v1/object/public/test//videos6.mp4",
    format: "vertical",
    platform: "TikTok",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredVideos =
    filter === "all" ? VIDEOS : VIDEOS.filter((v) => v.format === filter);

  return (
    <div className="bg-beige min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-4">
            Portfolio vidéo
          </h1>
          <p className="text-lg mb-4">
            Découvrez quelques-unes de mes réalisations : vidéos verticales et
            horizontales pour toutes les plateformes !
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4 mb-2">
            {FORMAT_LABELS.map((f) => (
              <button
                key={f.key}
                className={`py-2 px-4 rounded-full font-semibold border transition-colors ${
                  filter === f.key
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-anthracite border-accent"
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
