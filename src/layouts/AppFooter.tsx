import poster from "../assets/movies-poster.jpg";
import logo from "../assets/logo.png";
const AppFooter: React.FC = () => {
  const footerItems = [
    { href: "/", label: "Home" },
    { href: "/", label: "Live" },
    { href: "/", label: "You must watch" },
    { href: "/", label: "Contact us" },
    { href: "/", label: "FAQ" },
    { href: "/", label: "Recent release" },
    { href: "/", label: "Term of services" },
    { href: "/", label: "Premium" },
    { href: "/", label: "Top IMDB" },
    { href: "/", label: "About us" },
    { href: "/", label: "Privacy policy" },
  ];

  return (
    <footer
      className="z-0 relative bottom-0 flex flex-col w-full  bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: `url(${poster})` }}
    >
      <div className="z-1 absolute inset-0 bg-black/70"></div>

      <div className="z-2 w-full h-full p-6 text-white">
        <div className="mb-5 text-center font-semibold text-4xl flex w-full items-center justify-center gap-4">
          <img height={48} width={48} src={logo} />
          <h1 className="">theMovies</h1>
        </div>
        <div className="font-semibold md:text-2xl pl-8 w-5/6 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {footerItems.map((item) =>(
          <a href={item.href} className="hover:text-red-500">
            {item.label}
          </a>
        ))}
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
