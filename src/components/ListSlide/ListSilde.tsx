import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import PreviewModel from "../Modal/PreviewModel";
import WhiteButton from "../Button/WhiteButton";

import type { Movie } from "../../types/movie";
import type { TvSeries } from "../../types/tvSeries";

interface ListSildeProps{
  data: (Movie | TvSeries)[],
  title: string

}
export default function ListSilde({ data, title }:ListSildeProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold mb-4 display:inline-block capitalize text-white">
          {title}
        </p>
        <div className="w-1/4 md:w-1/6 lg:w-[14%] xl:w-[10%]">
        <WhiteButton text={"View more"} />
        </div>
      </div>
        <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {data.map((film) => {
          const name = "title" in film ? film.title : film.name;
          return (
            <SwiperSlide key={film.id}>
              <PreviewModel img={film.poster_path} title={name} />
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );
}
