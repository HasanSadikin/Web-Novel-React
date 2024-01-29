import { Novel } from "../../store/novel/novelSlice";
import NovelItem from "./NovelItem";

interface Props {
  novels: Novel[] | null;
}

const NovelList = ({ novels }: Props) => {
  if (!novels || novels.length === 0) {
    return <p className="text-center">No Novel Found</p>;
  }

  return (
    <ul className="grid w-11/12 grid-cols-1 gap-5 mx-auto lg:grid-cols-2 ">
      {novels.map((novel) => (
        <NovelItem novel={novel} key={novel.id} />
      ))}
    </ul>
  );
};

export default NovelList;
