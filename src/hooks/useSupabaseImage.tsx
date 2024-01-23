import { useEffect, useState } from "react";
import { useSupabase } from "../utils/supabase";

export function useSupabaseImage(imagePath: string): [string, boolean] {
  const supabase = useSupabase();
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImage = async () => {
      const { data } = await supabase.storage
        .from("bagong_translation")
        .getPublicUrl(imagePath);
      setImage(data.publicUrl);
      setIsLoading(false);
    };

    getImage();
  }, [imagePath]);

  return [image, isLoading];
}
