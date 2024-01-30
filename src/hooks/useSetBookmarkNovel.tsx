import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useSupabase } from "./useSupabase";
import { NOVELS_ACCOUNT } from "../routes";

export function useSetBookmarkNovel(
  id: number
): [boolean, boolean, () => void] {
  const supabase = useSupabase();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBookmarkLoading, setIsBookmarkLoading] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const getLike = async () => {
      if (!user.isAuthenticated || !user.user) return;
      setIsBookmarkLoading(true);
      const { data } = await supabase
        .from("Bookmarks")
        .select()
        .eq("novel_id", id)
        .eq("user_id", user.user.id);

      if (data && data.length > 0) {
        setIsBookmarked(true);
      }

      setIsBookmarkLoading(false);
    };
    getLike();
  }, []);

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
      navigate(NOVELS_ACCOUNT);
      return;
    }

    if (!isBookmarked) bookomarkNovel();
    else unBookmarkNovel();
  };

  return [isBookmarked, isBookmarkLoading, toggleBookmark];
}
