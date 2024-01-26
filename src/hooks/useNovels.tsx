import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Novel, getNovels } from "../store/novel/novelSlice";

export function useNovels(): [Novel[] | null, boolean] {
  const novels = useSelector((state: RootState) => state.novels.novels);

  const dispatch = useDispatch<AppDispatch>();
  const [isLoadingNovels, setIsLoadingNovels] = useState(true);

  useEffect(() => {
    const dispatchGetNovels = async () => {
      setIsLoadingNovels(true);
      await dispatch(getNovels());
      setIsLoadingNovels(false);
    };

    dispatchGetNovels();
  }, []);

  return [novels, isLoadingNovels];
}
