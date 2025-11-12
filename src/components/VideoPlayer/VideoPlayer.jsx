export default function VideoPlayer({ videoUrl, title }) {
  return (
    <div className="overflow-hidden">
      <div className="aspect-video">
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
