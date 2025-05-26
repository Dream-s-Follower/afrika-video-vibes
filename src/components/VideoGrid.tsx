
import VideoCard from "./VideoCard";

type Video = {
  id: number;
  title: string;
  src: string;
  format: string;
  platform: string;
  thumbnail: string;
};

export default function VideoGrid({ videos }: { videos: Video[] }) {
  if (videos.length === 0)
    return <p className="text-center text-lg text-gray-500 py-10">Aucune vidéo dans ce format pour le moment.</p>;

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
