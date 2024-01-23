import { Novel } from "../../store/novel/novelSlice";
import NovelItem from "./NovelItem";
import SkeletonList from "./SkeletonList";

interface Props {
  novels: Novel[] | null;
}

const NovelList = ({ novels }: Props) => {
  if (!novels || novels.length === 0) {
    return <SkeletonList amount={4} />;
  }

  return (
    <ul className="grid grid-cols-1 gap-5 w-11/12 mx-auto ">
      {novels.map((novel) => (
        <NovelItem novel={novel} key={novel.id} />
      ))}
    </ul>
  );
};

export default NovelList;
