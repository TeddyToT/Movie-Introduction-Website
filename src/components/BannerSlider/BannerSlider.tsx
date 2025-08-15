import { Swiper, SwiperSlide } from "swiper/react";
import { usePopularMovies } from "../../hooks/useMovies";
interface BannerSilderProps{
    handleShowTrailerClick: ()=>void
}
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Banner from "./Banner";

const BannerSilder = ({handleShowTrailerClick}:BannerSilderProps) => {
  const { data, isLoading, error } = usePopularMovies(1);
  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error loading movies</p>;

  return (
    <div className="cursor-grab active:cursor-grabbing">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        speed={200}
        modules={[Navigation, Pagination]}
        className="relative mb-10"
      >
        {data?.results.slice(1, 5).map((value) => (
          <SwiperSlide key={value.id}>
            <Banner data={value} handleShowTrailerClick={handleShowTrailerClick}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSilder;
