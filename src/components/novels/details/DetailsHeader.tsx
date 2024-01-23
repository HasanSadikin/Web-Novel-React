import { memo } from "react";
import BookmarkIcon from "../../icons/BookmarkIcon";
import StarIcon from "../../icons/StarIcon";
import LoadingButton from "../../ui/buttons/LoadingButton";
import ToggleButton from "../../ui/buttons/ToggleButton";
import { useSetLikeNovel } from "../../../hooks/useSetLikeNovel";
import { useSetBookmarkNovel } from "../../../hooks/useSetBookmarkNovel";

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
  id: number;
  name: string;
  author: string;
}

const DetailsHeader = ({ id, name, author }: Props) => {
  const [isLike, isLikeLoading, toggleLike] = useSetLikeNovel(id);
  const [isBookmarked, isBookmarkLoading, toggleBookmark] =
    useSetBookmarkNovel(id);

  return (
    <div className="w-full bg-white h-16 fixed top-0 left-0 z-[10]">
      <div className="w-11/12 mx-auto grid grid-cols-2 h-full">
        <div className="flex flex-col justify-center">
          <h1 className="text-black font-semibold truncate">{name}</h1>
          <h1 className="text-gray-500 italic text-xs">by {author}</h1>
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

export default DetailsHeader;
