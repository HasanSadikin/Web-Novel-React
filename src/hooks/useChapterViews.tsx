import { useEffect, useState } from "react";
import { useSupabase } from "../utils/supabase";

interface Views {
  chapter_id: number;
  views: number;
}

interface Returns {
  views: Views | null;
  isLoading: boolean;
}

export function useChapterViews(chapter_id: number): Returns {
  const supabase = useSupabase();
  const [views, setViews] = useState<Views | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getViews = async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from("Views")
        .select()
        .eq("chapter_id", chapter_id)
        .single();

      setViews(data as Views | null);
      setIsLoading(false);
    };

    getViews();
  }, []);

  useEffect(() => {
    const updateViews = async () => {
      if (!views) return;
      await supabase
        .from("Views")
        .update({
          views: views?.views + 1,
        })
        .eq("chapter_id", chapter_id);
    };

    updateViews();
  }, [views, chapter_id]);

  return {
    views: views,
    isLoading: isLoading,
  };
}
