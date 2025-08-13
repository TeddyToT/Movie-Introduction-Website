import poster from "../assets/movies-poster.jpg";

const AppFooter: React.FC = () => {
  return (
    <footer
      className="z-0 relative bottom-0 flex flex-col w-full  bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: `url(${poster})` }}
    >
        <div className="z-1 absolute inset-0 bg-black/70"></div>

      <div className="z-2 w-full h-full p-6 text-white">
        <h2 className="text-center font-bold text-8xl mb-5">Logo</h2>
        <div className="font-semibold md:text-2xl pl-8 w-5/6 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          <a>Home</a>
          <a>Live</a>
          <a>You must watch</a>
          <a>Contact us</a>
          <a>FAQ</a>
          <a>Recent release</a>
          <a>Term of services</a>
          <a>Premium</a>
          <a>Top IMDB</a>
          <a>About us</a>
          <a>Privacy policy</a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
