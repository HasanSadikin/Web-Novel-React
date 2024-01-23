import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect, useState } from "react";
import { Novel, getBookmarkedNovels } from "../store/novel/novelSlice";
import NovelList from "../components/novels/NovelList";
import SkeletonList from "../components/novels/SkeletonList";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Bookmark = () => {
  const novels = useSelector((state: RootState) => state.novels.value);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBookmarks = async () => {
      if (user.user === null || !user.isAuthenticated) {
        return;
      }
      await dispatch(getBookmarkedNovels(user.user.id));
      setIsLoading(false);
    };

    getBookmarks();
  }, [user.user]);

  useScrollToTop();

  return (
    <>
      <h1 className="text-center text-2xl py-10 font-bold">Bookmark</h1>
      {user.isAuthenticated && isLoading && <SkeletonList amount={3} />}
      {user.isAuthenticated && !isLoading ? (
        <BookmarkNovels novels={novels} />
      ) : (
        <p className="text-center w-10/12 mx-auto">
          You must be logged in to see your bookmarked novels
        </p>
      )}
    </>
  );
};

export default Bookmark;

interface Props {
  novels: Novel[] | null;
}

function BookmarkNovels({ novels }: Props) {
  if (novels === null) {
    return <p>Somethings Wrong</p>;
  }
  return (
    <>
      {novels.length > 0 ? (
        <NovelList novels={novels} />
      ) : (
        <p className="text-center w-10/12 mx-auto">No Bookmarked Novels</p>
      )}
    </>
  );
}
