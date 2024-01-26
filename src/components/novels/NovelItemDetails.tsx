import { Link, useNavigate, useSearchParams } from "react-router-dom";
import NovelAnalytics from "./NovelAnalytics";
import { NovelGenreList } from "./NovelGenreList";
import { NOVELS_NOVEL, NOVELS_SEARCH } from "../../utils/routes";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  author: string;
  author_id: number;
  origin: string;
  description: string;
  genres: string;
  slug: string;
  novel_id: number;
}

const NovelItemDetails = ({
  name,
  author,
  author_id,
  origin,
  description,
  genres,
  slug,
  novel_id,
  ...props
}: Props) => {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSearch(key: string, value: string): void {
    navigate(NOVELS_SEARCH);
    setSearchParams({ [key]: value });
  }

  return (
    <div {...props}>
      <Link to={`${NOVELS_NOVEL}/${slug}`}>
        <h2 className="text-sm font-bold truncate">{name}</h2>
      </Link>
      <p className="italic text-gray-500 text-xs">
        by
        <span onClick={() => handleSearch("author", String(author_id))}>
          {author}
        </span>{" "}
        -<span onClick={() => handleSearch("origin", origin)}>{origin}</span>
      </p>
      <NovelAnalytics
        novel_id={novel_id}
        className="flex gap-3 text-gray-500 py-1"
      />
      <p className="line-clamp-3 text-xs text-gray-200 row-span-1 leading-4">
        {description}
      </p>
      <NovelGenreList genres={genres.split(",")} amount={2} />
    </div>
  );
};

export default NovelItemDetails;
