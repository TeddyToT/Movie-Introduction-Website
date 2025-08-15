interface MainTrailerModelProps{
    showState: boolean
    handleCLoseClick: ()=>void
}
const MainTrailerModel = ({showState, handleCLoseClick}:MainTrailerModelProps) => {

  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black/50 py-20 md:py-40 lg:py-20 z-9999 ${showState?"":" hidden"}`}>
      <div className="relative max-w-screen-md bg-black-main h-full z-50 mx-auto p-8 bg-black">
        <iframe
          src="https://www.youtube.com/embed/NJ0fzQzKOfg"
          className="w-full h-full"
        ></iframe>
        <svg
          onClick={() => handleCLoseClick()}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="absolute top-2 right-2 text-xl text-white cursor-pointer hover:text-red-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
        </svg>
      </div>
    </div>
  );
};
export default MainTrailerModel;
