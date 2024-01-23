import { useMemo } from "react";
import { Novel } from "../store/novel/novelSlice";

export function useGetAllAuthorFromNovel(novels: Novel[] | null) {
  return useMemo(() => {
    if (novels === null) return [];

    return [...novels].map((novel) => ({
      id: novel.author_id,
      name: novel.author,
    }));
  }, [novels]);
}
