import { FC, memo } from "react";
import { Novel } from "../../store/novel/novelSlice";
import BookmarkIcon from "../icons/BookmarkIcon";

import { useLikeNovel } from "../../hooks/useLikeNovel";
import LoadingButton from "../ui/buttons/LoadingButton";
import StarIcon from "../icons/StarIcon";
import { useBookmarkNovel } from "../../hooks/useBookmarkNovel";
import ToggleButton from "../ui/buttons/ToggleButton";

interface MemoProps {
  value: boolean;
  loading: boolean;
  toggle: () => void;
}

const MemoStarButton = memo(function StarButton({
  value,
  loading,
  toggle,
}: MemoProps) {
  return (
    <>
      {loading ? (
        <LoadingButton />
      ) : (
        <ToggleButton isToggled={value} onClick={toggle}>
          <StarIcon className="w-5 h-5" />
        </ToggleButton>
      )}
    </>
  );
});

const MemoBookmarkButton = memo(function StarButton({
  value,
  loading,
  toggle,
}: MemoProps) {
  return (
    <>
      {loading ? (
        <LoadingButton />
      ) : (
        <ToggleButton isToggled={value} onClick={toggle}>
          <BookmarkIcon className="w-5 h-5" />
        </ToggleButton>
      )}
    </>
  );
});

interface Props {
  novel: Novel;
}

const NovelDetails: FC<Props> = ({ novel }) => {
  const [isLike, isLikeLoading, toggleLike] = useLikeNovel(novel.id);
  const [isBookmarked, isBookmarkLoading, toggleBookmark] = useBookmarkNovel(
    novel.id
  );

  return (
    <div className="bg-white h-16 ">
      <div className="w-11/12 mx-auto grid grid-cols-2 h-full">
        <div className="flex flex-col justify-center">
          <h1 className="text-black font-semibold truncate">
            {novel.novel_name}
          </h1>
          <h1 className="text-gray-500 italic text-xs">by {novel.author}</h1>
        </div>
        <div className="flex justify-end items-center gap-2 ">
          <MemoStarButton
            value={isLike}
            loading={isLikeLoading}
            toggle={toggleLike}
          />
          <MemoBookmarkButton
            value={isBookmarked}
            loading={isBookmarkLoading}
            toggle={toggleBookmark}
          />
        </div>
      </div>
    </div>
  );
};

export default NovelDetails;
