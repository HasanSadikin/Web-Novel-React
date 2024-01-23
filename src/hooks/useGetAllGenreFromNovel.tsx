import { useMemo } from "react";
import { Novel } from "../store/novel/novelSlice";

export function useGetAllGenreFromNovel(novels: Novel[] | null) {
  return useMemo(() => {
    if (novels === null) return [];

    const _genres: string[] = [];
    [...novels].forEach((novel) => {
      novel.genres.split(",").forEach((n) => {
        if (!_genres.includes(n)) {
          _genres.push(n);
        }
      });
    });
    return _genres;
  }, [novels]);
}
