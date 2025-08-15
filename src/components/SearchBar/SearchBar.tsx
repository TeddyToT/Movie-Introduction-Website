import { useRef } from "react";
import { useNavigate } from "react-router";
import ShadowButton from "../../components/Button/ShadowButton";

interface SearchBarProps {
  keyword?: string;
  basePath: string; // "/movie" | "/tv"
}

export default function SearchBar({ keyword, basePath }: SearchBarProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (value: string) => {
    navigate(
      value ? `${basePath}?keyword=${encodeURIComponent(value)}` : `${basePath}?keyword=`
    );
  };

  return (
    <div className="border border-red-900 mb-12 flex text-white w-full md:w-1/2 xl:w-2/5 2xl:w-1/3 rounded-4xl">
      <input
        ref={inputRef}
        type="text"
        defaultValue={keyword}
        placeholder="Enter keyword"
        className="px-3 py-2 rounded-4xl w-4/5 focus:outline-none"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (inputRef.current) handleSearch(inputRef.current.value);
          }
        }}
      />
      <div
        className="w-1/5"
        onClick={() => {
          if (inputRef.current) handleSearch(inputRef.current.value);
        }}
      >
        <ShadowButton text="Search" />
      </div>
    </div>
  );
}
