import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Chapter, getChapters } from "../store/chapter/chapterSlice";

interface UseChapterReturns {
  chapters: Chapter[] | null;
  hasNext: (id: number) => boolean;
  hasPrev: (id: number) => boolean;
  getNext: (id: number) => Chapter | null;
  getPrev: (id: number) => Chapter | null;
}

export function useNovelChapters(novelId: number): UseChapterReturns {
  const chapters = useSelector((state: RootState) => state.chapters.chapters);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getChapters(novelId));
  }, [novelId]);

  const hasNext = (id: number) => {
    if (!chapters) return true;
    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      if (id === chapter.id) {
        return i + 1 >= chapters.length;
      }
    }

    return true;
  };

  const getNext = (id: number) => {
    if (!chapters) return null;
    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      if (id !== chapter.id) continue;
      if (i + 1 >= chapters.length) return null;

      return chapters[i + 1];
    }

    return null;
  };

  const hasPrev = (id: number) => {
    if (!chapters) return true;
    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      if (id === chapter.id) {
        return i - 1 < 0;
      }
    }

    return true;
  };

  const getPrev = (id: number) => {
    if (!chapters) return null;
    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      if (id !== chapter.id) continue;
      if (i - 1 < 0) return null;

      return chapters[i - 1];
    }

    return null;
  };

  return {
    chapters: chapters,
    hasNext: hasNext,
    hasPrev: hasPrev,
    getNext: getNext,
    getPrev: getPrev,
  };
}
