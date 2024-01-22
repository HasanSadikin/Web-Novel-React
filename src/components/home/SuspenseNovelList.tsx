import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SkeletonList from "./SkeletonList";
import NovelList from "./NovelList";
import { RootState } from "../../store/store";

interface Props {
  action: Promise<any>;
}

export const SuspenseNovelList = ({ action }: Props) => {
  const novels = useSelector((state: RootState) => state.novels.value);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dispatchGetNovels = async () => {
      await action;
      setIsLoading(false);
    };

    dispatchGetNovels();
  }, []);

  return (
    <>
      {isLoading ? <SkeletonList amount={3} /> : <NovelList novels={novels} />}
    </>
  );
};
