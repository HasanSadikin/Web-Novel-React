import { useMemo } from "react";
import { Novel } from "../store/novel/novelSlice";

export function useGetAllOriginFromNovel(novels: Novel[] | null) {
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
