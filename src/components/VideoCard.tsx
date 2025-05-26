
import { useRef, useState } from "react";
import { Youtube, ArrowUp } from "lucide-react";

type Video = {
  id: number;
  title: string;
  src: string;
  format: string;
  platform: string;
  thumbnail: string;
};

export default function VideoCard({ video }: { video: Video }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // lazy loading via poster/thumbnails & "auto play" preview uniquement sur hover desktop
  const playPreview = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  };
  const pausePreview = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Responsive ratio & design
  const ratioClass =
    video.format === "vertical" ? "aspect-[9/16]" : "aspect-[16/9]";

  return (
    <div
      className={`bg-white rounded-2xl p-3 shadow relative hover:shadow-xl transition-all group border-l-8 ${video.format === "vertical" ? "border-accent" : "border-anthracite"}`}
    >
      <div
        className={`block overflow-hidden rounded-xl ${ratioClass} bg-gray-200 cursor-pointer`}
        tabIndex={0}
        role="button"
        aria-label={`Lister la vidéo ${video.title}`}
        onMouseEnter={() => { playPreview(); setHovered(true); }}
        onMouseLeave={() => { pausePreview(); setHovered(false); }}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <video
          ref={videoRef}
          className={`w-full h-full object-cover rounded-xl transition-all duration-300 ${hovered ? "scale-105" : "scale-100"}`}
          src={video.src}
          poster={video.thumbnail}
          preload="none"
          tabIndex={-1}
          playsInline
        />
        {!hovered && (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            style={{ pointerEvents: "none" }}
            draggable={false}
          />
        )}
      </div>
      <div className="pt-3 pb-1 flex items-center gap-3">
        <span className={`text-xs px-2 py-1 rounded-full ${video.format === "vertical" ? "bg-accent-light" : "bg-anthracite text-beige"}`}>
          {video.platform}
        </span>
        <span className="text-base font-bold flex-1">{video.title}</span>
      </div>
      {/* Partage boutons */}
      <div className="flex gap-2 pl-1">
        <button className="bg-accent hover:bg-accent-light transition-colors text-white px-2 py-1 rounded-full text-xs flex items-center gap-1" title="Partager">
          <ArrowUp size={16} className="rotate-45" />
          Partager
        </button>
        <a className="ml-auto" href={video.src} target="_blank" rel="noopener noreferrer">
          <Youtube size={20} className="text-accent" />
        </a>
      </div>
    </div>
  );
}
