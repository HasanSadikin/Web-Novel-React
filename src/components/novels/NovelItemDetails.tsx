import { Link } from "react-router-dom";
import NovelAnalytics from "./NovelAnalytics";
import { NovelGenreList } from "./NovelGenreList";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  author: string;
  origin: string;
  description: string;
  genres: string;
  slug: string;
}

const NovelItemDetails = ({
  name,
  author,
  origin,
  description,
  genres,
  slug,
  ...props
}: Props) => {
  return (
    <div {...props}>
      <Link to={`/novel/${slug}`}>
        <h2 className="text-sm font-bold truncate">{name}</h2>
      </Link>
      <p className="italic text-gray-500 text-xs">
        by {author} - {origin}
      </p>
      <NovelAnalytics className="flex gap-3 text-gray-500 py-1" />
      <p className="line-clamp-3 text-xs text-gray-200 row-span-1 leading-4">
        {description}
      </p>
      <NovelGenreList genres={genres.split(",")} amount={2} />
    </div>
  );
};

export default NovelItemDetails;