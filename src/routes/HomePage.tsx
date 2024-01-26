import { useNovels } from "../hooks/useNovels";
import NovelList from "../components/novels/NovelList";
import SkeletonList from "../components/novels/SkeletonList";
import { useScrollToTop } from "../hooks/useScrollToTop";

function HomePage() {
  const [novels, isLoading] = useNovels();

  console.log("---");

  useScrollToTop();

  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl py-10 font-bold">Home</h1>
      {isLoading ? <SkeletonList amount={3} /> : <NovelList novels={novels} />}
    </div>
  );
}

export default HomePage;
