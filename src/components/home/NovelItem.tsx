import { useEffect, useState } from "react";
import { Novel } from "../../store/novel/novelSlice";
import { useSupabase } from "../../utils/supabase";

interface Props {
  novel: Novel;
}

function NovelItem({ novel }: Props) {
  const supabase = useSupabase();
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const { data } = await supabase.storage
        .from("bagong_translation")
        .getPublicUrl(novel.image);
      setImage(data.publicUrl);
    };

    getImage();
  }, [novel.image]);

  return (
    <li className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="aspect-square sm:aspect-[4/2] w-full sm:w-1/3">
        <img src={image} alt={novel.novel_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{novel.novel_name}</h2>
        <p className="italic text-gray-500">
          {novel.author} - {novel.origin}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read Now</button>
        </div>
      </div>
    </li>
  );
}

export default NovelItem;
