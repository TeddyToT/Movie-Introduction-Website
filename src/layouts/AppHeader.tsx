import { useEffect, useState } from "react";
const AppHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed w-full z-9000 transition-colors duration-300
    bottom-0 md:bottom-auto md:top-0
    ${
      isScrolled
        ? "md:bg-black bg-black"
        : "md:bg-transparent bg-black text-white py-5 duration-200"
    }
  `}
    >
      <div className="w-11/12 md:my-4 mx-auto text-white flex justify-between items-center px-4 py-3">
        <p className="hidden md:block md:w-1/3">LOGO</p>
        <ul className=" flex gap-5 w-full md:w-1/2 lg:w-1/3 md:justify-end justify-between font-semibold md:text-2xl text-lg">
          <li className="pb-1.5 hover:text-red-500 relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-400 after:-translate-x-1/2 hover:after:w-full">
            Home
          </li>

          <li className="hover:text-red-500 relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-400 after:-translate-x-1/2 hover:after:w-full">
            Movies</li>
          <li className="hover:text-red-500 relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-400 after:-translate-x-1/2 hover:after:w-full">
            TV Series</li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
