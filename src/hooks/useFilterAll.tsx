import { useMemo } from "react";
import { Novel } from "../store/novel/novelSlice";
import { useNovelFilterParams } from "./useNovelFilterParams";

export function useFilterAll(
  novels: Novel[] | null
): [Novel[] | null, (author: string, genre: string, origin: string) => void] {
  const [authorParams, genreParams, originParams, handleSearch] =
    useNovelFilterParams();

  const searchResult = useMemo(() => {
    if (novels === null) return null;

    const _novels = [...novels]
      .filter(
        (novel) =>
          authorParams === "all" || String(novel.author_id) === authorParams
      )
      .filter(
        (novel) => originParams === "all" || novel.origin === originParams
      )
      .filter(
        (novel) =>
          genreParams === "all" || novel.genres.split(",").includes(genreParams)
      );

    return _novels;
  }, [novels, authorParams, genreParams, originParams]);

  return [searchResult, handleSearch];
}
