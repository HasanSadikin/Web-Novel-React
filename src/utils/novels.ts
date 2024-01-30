import { useMemo } from "react";
import { Novel } from "../store/novel/novelSlice";

export function getAllAuthorFromNovel(novels: Novel[] | null) {
  return useMemo(() => {
    if (novels === null) return [];

    return [...novels].map((novel) => ({
      id: novel.author_id,
      name: novel.author,
    }));
  }, [novels]);
}

export function getAllGenreFromNovel(novels: Novel[] | null) {
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

export function getAllOriginFromNovel(novels: Novel[] | null) {
  return useMemo(() => {
    if (novels === null) return [];

    const _origins: string[] = [];
    [...novels].forEach((novel) => {
      if (!_origins.includes(novel.origin)) {
        _origins.push(novel.origin);
      }
    });
    return _origins;
  }, [novels]);
}
