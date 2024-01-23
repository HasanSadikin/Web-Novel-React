import { useMemo, useState } from "react";
import { Novel } from "../store/novel/novelSlice";

export function useFilterAll(
  novels: Novel[] | null
): [Novel[] | null, (author: string, genre: string, origin: string) => void] {
  const [author, setAuthor] = useState("all");
  const [genre, setGenre] = useState("all");
  const [origin, setOrigin] = useState("all");

  function handleSearch(author: string, origin: string, genre: string): void {
    setAuthor(author);
    setGenre(genre);
    setOrigin(origin);
  }

  const searchResult = useMemo(() => {
    if (novels === null) return null;

    const _novels = [...novels]
      .filter((novel) => author === "all" || String(novel.author_id) === author)
      .filter((novel) => origin === "all" || novel.origin === origin)
      .filter(
        (novel) => genre === "all" || novel.genres.split(",").includes(genre)
      );

    return _novels;
  }, [novels, author, genre, origin]);

  return [searchResult, handleSearch];
}
