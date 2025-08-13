import { useState } from "react";

interface PreviewModelProps {
  img: string | null;
  title: string;
}

const PreviewModel = ({ img, title }: PreviewModelProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative w-full h-[40vh] ">
        <img
          src={`http://image.tmdb.org/t/p/original/${img}`}
          className="group-hover:brightness-[25%] rounded-3xl w-full h-full object-cover transition-all duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-red-500 flex py-4 justify-center w-1/3 sm:w-[25%] md:w-[40%] hover:drop-shadow-[0_0_12px_red] drop-shadow-[0_0_7px_red] group-hover:cursor-pointer duration-300 rounded-3xl">
            <svg
              className="text-white md:scale-125"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-2 text-left">
        <p
          className={`font-semibold text-sm hover:text-red-500 md:text-lg lg:text-base break-words transition-colors duration-300 ${
            isHovered ? "text-red-500" : "text-white"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
export default PreviewModel;
