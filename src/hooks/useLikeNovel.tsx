import { useCallback, useMemo, useState } from "react";
import { useSupabase } from "../utils/supabase";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export function useLikeNovel(id: number): [boolean, boolean, () => void] {
  const supabase = useSupabase();
  const [isLiked, setIsLiked] = useState(false);
  const [isLikeLoading, setIsLikeLoading] = useState(true);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useMemo(() => {
    const getLike = async () => {
      const { data } = await supabase.from("Likes").select().eq("novel_id", id);

      if (data && data.length > 0) {
        setIsLiked(true);
      }

      setIsLikeLoading(false);
    };
    getLike();
  }, [id]);

  const likeNovel = useCallback(
    async function () {
      setIsLikeLoading(true);
      await supabase.from("Likes").insert({
        user_id: user.user?.id,
        novel_id: id,
      });

      setIsLiked(true);
      setIsLikeLoading(false);
    },
    [user, id]
  );

  const dislikeNovel = useCallback(
    async function () {
      setIsLikeLoading(true);
      await supabase.from("Likes").delete().eq("novel_id", id);
      setIsLiked(false);
      setIsLikeLoading(false);
    },
    [id]
  );

  const toggleNovel = useCallback(() => {
    if (!user.isAuthenticated) {
      navigate("/account");
      return;
    }

    if (!isLiked) likeNovel();
    else dislikeNovel();
  }, [user, isLiked]);

  return [isLiked, isLikeLoading, toggleNovel];
}
