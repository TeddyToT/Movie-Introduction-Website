const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="text-white w-3/4 h-full relative">
        <div className="absolute w-full flex justify-center items-center h-full  z-10">
          <p className="text-center font-extrabold text-9xl scale-200 sm:scale-[270%] md:scale-[340%] lg:scale-[400%] xl:scale-[450%] text-gray-600  z-10">
            404
          </p>
        </div>
        <div className="w-11/12 h-full mx-auto z-9999 text-xl lg:text-2xl xl:text-4xl flex flex-col gap-10 items-center justify-center">
          <h1 className="md:text-6xl text-4xl w-full text-center font-semibold z-9999">
            Page not found
          </h1>
          <p className="z-9999">
            Looks like you’ve followed a broken link or entered a URL that
            doesn’t exist on this site.
          </p>
          <p className="z-9999">
            Consider go back to{" "}
            <span>
              <a className="text-blue-500 hover:underline" href="/">
                Home page
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
