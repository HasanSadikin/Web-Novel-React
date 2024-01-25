import { Novel } from "../../store/novel/novelSlice";
import Image from "../ui/Image";
import NovelItemDetails from "./NovelItemDetails";

interface Props {
  novel: Novel;
}

function NovelItem({ novel }: Props) {
  return (
    <li className="grid grid-cols-12 min-h-20 overflow-hidden rounded-lg shadow-md">
      <div className="col-span-3">
        <Image
          imagePath={novel.image}
          alt={novel.novel_name}
          className="object-cover h-full w-full"
        />
      </div>
      <NovelItemDetails
        className="col-span-9 px-4 py-2"
        slug={novel.slug}
        name={novel.novel_name}
        author={novel.author}
        origin={novel.origin}
        description={novel.description}
        genres={novel.genres}
        author_id={novel.author_id}
      />
    </li>
  );
}

export default NovelItem;
