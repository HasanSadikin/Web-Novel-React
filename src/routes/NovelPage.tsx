import { useParams } from "react-router-dom";
import { useNovel } from "../hooks/useNovels";
import NovelDetails from "../components/novels/details/NovelDetails";

const NovelPage = () => {
  const params = useParams();
  const [novel, isLoading] = useNovel(params.slug);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (novel === null) {
    return <p>Novel Not Found</p>;
  }

  return <NovelDetails novel={novel} />;
};

export default NovelPage;
