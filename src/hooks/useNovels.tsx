import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Novel, getNovels } from "../store/novel/novelSlice";
import { useSupabase } from "../utils/supabase";

export function useNovels(): [Novel[] | null, boolean] {
  const novels = useSelector((state: RootState) => state.novels.value);

  const dispatch = useDispatch<AppDispatch>();
  const [isLoadingNovels, setIsLoadingNovels] = useState(true);

  useEffect(() => {
    const dispatchGetNovels = async () => {
      dispatch(getNovels());
      setIsLoadingNovels(false);
    };

    dispatchGetNovels();
  }, []);

  return [novels, isLoadingNovels];
}

export function useNovel(slug: string | undefined): [Novel | null, boolean] {
  const [isLoadingNovel, setIsLoadingNovels] = useState(true);
  const [novel, setNovels] = useState<Novel | null>(null);
  const supabase = useSupabase();

  useEffect(() => {
    if (!slug) return;
    const dispatchGetNovel = async () => {
      const { data } = await supabase
        .rpc("get_novel_by_slug", {
          novelslug: slug,
        })
        .single();
      setNovels(data);
      setIsLoadingNovels(false);
    };

    dispatchGetNovel();
  }, []);

  return [novel, isLoadingNovel];
}
