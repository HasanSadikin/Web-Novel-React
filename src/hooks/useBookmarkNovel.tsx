import { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useSupabase } from "../utils/supabase";

export function useBookmarkNovel(id: number): [boolean, boolean, () => void] {
  const supabase = useSupabase();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBookmarkLoading, setIsBookmarkLoading] = useState(true);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useMemo(() => {
    const getLike = async () => {
      const { data } = await supabase
        .from("Bookmarks")
        .select()
        .eq("novel_id", id);

      if (data && data.length > 0) {
        setIsBookmarked(true);
      }

      setIsBookmarkLoading(false);
    };
    getLike();
  }, [id]);

  const bookomarkNovel = useCallback(
    async function () {
      setIsBookmarkLoading(true);
      await supabase.from("Bookmarks").insert({
        user_id: user.user?.id,
        novel_id: id,
      });

      setIsBookmarked(true);
      setIsBookmarkLoading(false);
    },
    [user, id]
  );

  const unBookmarkNovel = useCallback(
    async function () {
      setIsBookmarkLoading(true);
      await supabase.from("Bookmarks").delete().eq("novel_id", id);
      setIsBookmarked(false);
      setIsBookmarkLoading(false);
    },
    [id]
  );

  const toggleBookmark = () => {
    if (!user.isAuthenticated) {
      navigate("/account");
      return;
    }

    if (!isBookmarked) bookomarkNovel();
    else unBookmarkNovel();
  };

  return [isBookmarked, isBookmarkLoading, toggleBookmark];
}
