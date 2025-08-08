import { SiYoutube } from "react-icons/si";
const yt =
  "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg";
const PreviewModel = () => {
  return (
    <div className="cursor-pointer hover:text-red-500">
      <div className="group relative flex">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
          className=" group-hover:brightness-[25%] w-full h-full"
        />
        <div className="w-5/6 h-1/2 place-self-center absolute inset-0 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img
            src={yt}
            alt="YouTube icon"
            className="w-1/6 hover:brightness-105 hover:drop-shadow-[0_0_10px_red] drop-shadow-[0_0_5px_red] group-hover:scale-200 duration-300 rounded-4xl"
          />


        </div>
      </div>
      <div className="mt-2 text-center">
        <p className="font-sans text-lg">The Dark Knight</p>
      </div>
    </div>
  );
};
export default PreviewModel;
