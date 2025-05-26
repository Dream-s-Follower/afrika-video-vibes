import { useRef, useState } from "react";

type Video = {
  id: number;
  title: string;
  src: string;
  format: string;
  platform: string;
  thumbnail?: string;
};

export default function VideoCard({ video }: { video: Video }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  // Arrête la vidéo quand on quitte le composant
  const handleBlur = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  const ratioClass = video.format === "vertical" ? "aspect-[9/16]" : "aspect-[16/9]";

  return (
    <div className="bg-white rounded-2xl p-3 shadow-md flex flex-col transition hover:shadow-lg border-l-8 border-accent">
      <div
        className={`overflow-hidden rounded-xl ${ratioClass} bg-gray-200 flex items-center justify-center relative group`}
        tabIndex={0}
        onBlur={handleBlur}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          src={video.src}
          poster={video.thumbnail}
          preload="metadata"
          controls={false}
          tabIndex={-1}
          onClick={handlePlayPause}
          playsInline
        />
        {!playing && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition rounded-xl"
            aria-label={`Lire la vidéo ${video.title}`}
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 48 48" width={56} height={56}>
              <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.35)" />
              <polygon points="18,15 36,24 18,33" fill="white" />
            </svg>
          </button>
        )}
        {playing && (
          <button
            onClick={handlePlayPause}
            className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2"
            aria-label="Mettre la vidéo sur pause"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="white">
              <rect x="5" y="4" width="4" height="16"></rect>
              <rect x="15" y="4" width="4" height="16"></rect>
            </svg>
          </button>
        )}
      </div>
      <div className="pt-3 pb-1 flex items-center justify-center">
        <span className="text-base font-bold text-anthracite text-center">{video.title}</span>
      </div>
    </div>
  );
}
