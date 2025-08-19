import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
const AppHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/movie", label: "Movies" },
    { href: "/tv", label: "TV Series" },
  ];

  return (
    <header
      className={`fixed w-full z-5000 transition-colors duration-300
    bottom-0 md:bottom-auto md:top-0
    ${
      isScrolled
        ? "md:bg-black bg-black"
        : "md:bg-transparent bg-black text-white py-5 duration-200"
    }
  `}
    >
      <div className="w-11/12 md:my-4 mx-auto text-white flex justify-between items-center px-4 py-3">
        <div className="hidden md:w-1/3 md:flex gap-2">
          <img height={48} width={48} src={logo} />
          <h1 className="text-4xl font-semibold">theMovies</h1>
        </div>
        <nav className=" flex gap-5 w-full md:w-1/2 lg:w-1/3 md:justify-end justify-between font-semibold md:text-2xl text-lg">
          {navItems.map((item) => (
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "pb-1.5 border-b-red-500 border-b-2"
                  : "pb-1.5 hover:text-red-500 relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-400 after:-translate-x-1/2 hover:after:w-full"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
