interface HalfThumbnailProps {
  img: string | null | undefined;
}

const HalfThumbnail = ({ img }: HalfThumbnailProps) => {
  return (
    <div className="absolute w-screen h-3/5 lg:h-1/2 flex z-0 overflow-hidden">
      <img
        src={`http://image.tmdb.org/t/p/original/${img}`}
        alt="thumb-pic"
        className="brightness-75 object-cover w-full h-[72vh] md:h-[100vh] overflow-hidden"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};
export default HalfThumbnail;
