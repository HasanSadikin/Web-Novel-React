import { Outlet, useParams } from "react-router-dom";
import DetailsHeader from "../components/novels/details/DetailsHeader";
import { useSingleNovel } from "../hooks/useSingleNovel";

const NovelLayout = () => {
  const params = useParams();
  const { novel } = useSingleNovel(params.slug);

  return (
    <>
      {novel && (
        <DetailsHeader
          id={novel.id}
          name={novel.novel_name}
          author={novel.author}
          slug={novel.slug}
        />
      )}
      <Outlet />
    </>
  );
};

export default NovelLayout;
