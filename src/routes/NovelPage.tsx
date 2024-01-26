import { useParams } from "react-router-dom";
import NovelDetails from "../components/novels/details/NovelDetails";
import { useSingleNovel } from "../hooks/useSingleNovel";

const NovelPage = () => {
  const params = useParams();
  const { novel, isNovelLoading } = useSingleNovel(params.slug);

  if (isNovelLoading) {
    return <p>Loading...</p>;
  }

  if (novel === null) {
    return <p>Novel Not Found</p>;
  }

  return <NovelDetails novel={novel} />;
};

export default NovelPage;
