import { Swiper, SwiperSlide } from "swiper/react";
import { usePopularMovies } from "../../hooks/useMovies";
import { useState, useEffect } from "react";
import MainTrailerModel from "../Modal/MainTrailerModel";

import "../../styles/swiper.css"
import { Navigation, Pagination } from "swiper/modules";
import Banner from "./Banner";
// import BannerIntersection from "./BannerIntersection";

const BannerSilder = () => {
  const [isShow, setIsShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleTrailerClick = () =>{
    setIsShow(true)
  }
  const handleCloseTrailer = () => {
    setIsShow(false)
  }
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { data, isLoading, error } = usePopularMovies(1);
  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error loading movies</p>;
  const bannerMovies = data?.results.slice(1, 5)



  return (
    <div >
      <MainTrailerModel
      movieId={bannerMovies?.[activeIndex].id}
      showTrailer={isShow}
      closeTrailer={handleCloseTrailer}
      />
      <Swiper
        key={data?.results?.length}
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        speed={200}
        modules={[Navigation, Pagination]}
        className="relative mb-10 cursor-grab active:cursor-grabbing"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {bannerMovies?.map((value, idx) => (
          <SwiperSlide key={value.id}>
            <Banner
              // key={`${value.id}-${activeIndex === idx ? "active" : "inactive"}`}
              isActive={mounted && activeIndex === idx}
              data={value}
              openTrailer={handleTrailerClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSilder;
