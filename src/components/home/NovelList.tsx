import { Novel } from "../../store/novel/novelSlice";
import NovelItem from "./NovelItem";

interface Props {
  novels: Novel[] | null;
}

const NovelList = ({ novels }: Props) => {
  if (!novels || novels.length === 0) {
    return <p className="text-center">No Novels</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-2 w-10/12 mx-auto ">
      {novels.map((novel) => (
        <NovelItem novel={novel} key={novel.id} />
      ))}
    </ul>
  );
};

export default NovelList;
