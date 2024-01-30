import { useNovels } from "../hooks/useNovels";
import NovelList from "../components/novels/NovelList";
import SkeletonList from "../components/novels/SkeletonList";
import { useScrollToTop } from "../hooks/useScrollToTop";

function NovelHomePage() {
  const [novels, isLoading] = useNovels();

  useScrollToTop();

  return (
    <div className="mx-auto mb-20 md:w-10/12">
      <h1 className="py-10 text-2xl font-bold text-center">Home</h1>
      {isLoading ? <SkeletonList amount={3} /> : <NovelList novels={novels} />}
    </div>
  );
}

export default NovelHomePage;
