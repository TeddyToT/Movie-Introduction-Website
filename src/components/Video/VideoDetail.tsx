
interface VideoDetailProps{
    videoKey: string,
    name: string
}

const VideoDetail = ({videoKey, name}:VideoDetailProps) => {
  return (
    <div className="w-full h-screen block my-10">
        <h3 className="md:text-2xl font-semibold mb-4">{name}</h3>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}`}
        title={name}
        allowFullScreen
        width="100%"
        height="800px"
        className="mb-10"
      ></iframe>
    </div>
  );
};
export default VideoDetail;
