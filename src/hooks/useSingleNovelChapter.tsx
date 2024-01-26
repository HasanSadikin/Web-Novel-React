import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Chapter, getSingleChapter } from "../store/chapter/chapterSlice";

type Returns = {
  chapter: Chapter | null;
};

export function useSingleNovelChapter(id: number): Returns {
  const chapter = useSelector(
    (state: RootState) => state.chapters.current_chapter
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getSingleChapter(id));
  }, [id]);

  return {
    chapter: chapter,
  };
}
