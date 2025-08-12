import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import PreviewModel from "../Modal/PreviewModel";
import Movies from "./movies";
import WhiteButton from "../Button/WhiteButton";
export default function ListSilde({ title }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="font-semibold mb-4 display:inline-block capitalize text-white">
          {title}
        </p>
        <div className="w-1/4 md:w-1/6 lg:w-[14%] xl:w-[10%]">
        <WhiteButton text={"View more"} />
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000, // 3 giây auto
          disableOnInteraction: false, // vẫn chạy khi user tương tác
        }}
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {Movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <PreviewModel img={movie.img} title={movie.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
            <Swiper
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000, // 3 giây auto
          disableOnInteraction: false, // vẫn chạy khi user tương tác
        }}
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {Movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <PreviewModel img={movie.img} title={movie.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );
}
