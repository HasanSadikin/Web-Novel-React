import { useState, useEffect } from "react";
import { Novel } from "../store/novel/novelSlice";
import { useSupabase } from "../utils/supabase";

type Returns = { novel: Novel | null; isNovelLoading: boolean };

export function useSingleNovel(slug: string | undefined): Returns {
  const [isLoadingNovel, setIsLoadingNovels] = useState(false);
  const [novel, setNovel] = useState<Novel | null>(null);
  const supabase = useSupabase();

  useEffect(() => {
    if (!slug) return;
    const getNovel = async () => {
      setIsLoadingNovels(true);
      const { data } = await supabase
        .rpc("get_novel_by_slug", {
          novelslug: slug,
        })
        .single();

      if (data) setNovel(data);
      setIsLoadingNovels(false);
    };

    getNovel();
  }, [slug]);

  return { novel: novel, isNovelLoading: isLoadingNovel };
}
