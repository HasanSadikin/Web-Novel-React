import { useEffect, useState } from "react";
import { Novel } from "../../store/novel/novelSlice";
import { useSupabase } from "../../utils/supabase";
import { NovelGenreList } from "./NovelGenreList";
import NovelAnalytics from "./NovelAnalytics";
import { useSupabaseImage } from "../../hooks/useSupabaseImage";

interface Props {
  novel: Novel;
}

function NovelItem({ novel }: Props) {
  const [image, isLoading] = useSupabaseImage(novel.image);

  return (
    <li className="grid grid-cols-12 min-h-20 overflow-hidden rounded-lg shadow-md">
      <div className="col-span-3">
        {!isLoading && (
          <img
            src={image}
            alt={novel.novel_name}
            className="object-cover h-full w-full"
          />
        )}
        {isLoading && <div className="skeleton w-full h-full"></div>}
      </div>
      <div className="col-span-9 px-4 py-2">
        <h2 className="text-sm font-bold truncate">{novel.novel_name}</h2>
        <p className="italic text-gray-500 text-xs">
          by {novel.author} - {novel.origin}
        </p>
        <NovelAnalytics className="flex gap-3 text-gray-500 py-1" />
        <p className="line-clamp-3 text-xs text-gray-200 row-span-1 leading-4">
          {novel.description}
        </p>
        <NovelGenreList genres={novel.genres.split(",")} amount={2} />
      </div>
    </li>
    // <li className="card lg:card-side bg-base-100 shadow-xl">
    //   <figure className="aspect-square sm:aspect-[4/2] w-full sm:w-1/3">
    //     <img src={image} alt={novel.novel_name} />
    //   </figure>

    //   <div className="card-body">
    //     <h2 className="card-title">{novel.novel_name}</h2>
    //     <p className="italic text-gray-500">
    //       {novel.author} - {novel.origin}
    //     </p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Read Now</button>
    //     </div>
    //   </div>
    // </li>
  );
}

export default NovelItem;
