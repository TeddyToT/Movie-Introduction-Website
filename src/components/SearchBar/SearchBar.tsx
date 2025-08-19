import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import ShadowButton from "../../components/Button/ShadowButton";

interface SearchBarProps {
  keyword?: string;
  basePath: string; // "/movie" | "/tv"
}

export default function SearchBar({ keyword, basePath }: SearchBarProps) {
  const navigate = useNavigate();
  const [value, setValue] = useState(keyword ?? "");

  useEffect(() => {
    setValue(keyword ?? "");
  }, [keyword]);

  const handleSearch = () => {
    navigate(
      value
        ? `${basePath}?keyword=${encodeURIComponent(value)}`
        : `${basePath}?keyword=`
    );
  };

  return (
    <div className="border border-red-900 mb-12 flex text-white w-full md:w-1/2 xl:w-2/5 2xl:w-1/3 rounded-4xl">
      <input
        type="text"
        value={value}
        placeholder="Enter keyword"
        className="px-3 py-2 rounded-4xl w-4/5 focus:outline-none"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      />
      <div
        className="w-1/5"
        onClick={() => {
          handleSearch();
        }}
      >
        <ShadowButton text="Search" />
      </div>
    </div>
  );
}
