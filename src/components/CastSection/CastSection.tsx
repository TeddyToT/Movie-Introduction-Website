import Cast from "../Box/Cast";
import type { Credits } from "../../types/credit";

interface CastSectionProps {
  filmCredits: Credits | undefined;
}

const CastSection = ({ filmCredits }: CastSectionProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <h3 className="text-xl font-medium">Casts</h3>
      <div className="flex flex-wrap gap-1 lg:gap-5">
        {filmCredits?.cast.slice(0, 5).map((cast) => (
          <Cast avatar={cast.profile_path} castName={cast.name} />
        ))}
      </div>
    </div>
  );
};
export default CastSection;
