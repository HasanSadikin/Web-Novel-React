import { useEffect, useState } from "react";
import { useSupabase } from "../utils/supabase";

export function useBookmarkCount(novel_id: number) {
  const supabase = useSupabase();
  const [bookmarked, setBookmarked] = useState(0);

  useEffect(() => {
    const getBookmarked = async () => {
      const { data } = await supabase
        .from("Bookmarks")
        .select()
        .eq("novel_id", novel_id);

      if (data) {
        setBookmarked(data.length as number);
      }
    };
    getBookmarked();
  }, []);

  return bookmarked;
}

export function useLikeCount(novel_id: number) {
  const supabase = useSupabase();
  const [liked, setLiked] = useState(0);

  useEffect(() => {
    const getLiked = async () => {
      const { data } = await supabase
        .from("Likes")
        .select()
        .eq("novel_id", novel_id);

      if (data) {
        setLiked(data.length);
      }
    };
    getLiked();
  }, []);

  return liked;
}

export function useViewsCount(novel_id: number) {
  const supabase = useSupabase();
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    const getViewed = async () => {
      const { data } = await supabase.rpc("get_views_by_novel_id", {
        novelid: novel_id,
      });

      if (data && data.length > 0) setViewed(data[0].views as number);
    };
    getViewed();
  }, []);

  return viewed;
}
