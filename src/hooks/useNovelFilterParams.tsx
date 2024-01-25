import { useSearchParams } from "react-router-dom";

export function useNovelFilterParams(): [
  string,
  string,
  string,
  (a: string, o: string, g: string) => void
] {
  const [searchParams, setSearchParams] = useSearchParams();

  const authorParams = searchParams.has("author")
    ? searchParams.get("author")
    : "all";

  const genreParams = searchParams.has("genre")
    ? searchParams.get("genre")
    : "all";

  const originParams = searchParams.has("origin")
    ? searchParams.get("origin")
    : "all";

  function handleSearch(author: string, origin: string, genre: string): void {
    setSearchParams({
      author: author,
      genre: genre,
      origin: origin,
    });
  }

  return [
    authorParams as string,
    genreParams as string,
    originParams as string,
    handleSearch,
  ];
}
