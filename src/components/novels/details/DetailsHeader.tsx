import BookmarkIcon from "../../icons/BookmarkIcon";
import StarIcon from "../../icons/StarIcon";
import LoadingButton from "../../ui/buttons/LoadingButton";
import ToggleButton from "../../ui/buttons/ToggleButton";

import { useSetLikeNovel } from "../../../hooks/useSetLikeNovel";
import { useSetBookmarkNovel } from "../../../hooks/useSetBookmarkNovel";
import { useNavigate } from "react-router-dom";

function StarButton({ id }: { id: number }) {
  const [isLike, isLikeLoading, toggleLike] = useSetLikeNovel(id);
  return (
    <>
      {isLikeLoading ? (
        <LoadingButton />
      ) : (
        <ToggleButton isToggled={isLike} onClick={toggleLike}>
          <StarIcon className="w-5 h-5" />
        </ToggleButton>
      )}
    </>
  );
}

function BookmarkButton({ id }: { id: number }) {
  const [isBookmarked, isBookmarkLoading, toggleBookmark] =
    useSetBookmarkNovel(id);
  return (
    <>
      {isBookmarkLoading ? (
        <LoadingButton />
      ) : (
        <ToggleButton isToggled={isBookmarked} onClick={toggleBookmark}>
          <BookmarkIcon className="w-5 h-5" />
        </ToggleButton>
      )}
    </>
  );
}

interface Props {
  id: number;
  name: string;
  author: string;
  slug: string;
}

const DetailsHeader = ({ slug, id, name, author }: Props) => {
  const navigate = useNavigate();

  function handleNavigateToDetails(): void {
    navigate(`/novel/${slug}`);
  }

  return (
    <div className="w-full bg-white h-16 fixed top-0 left-0 z-[10]">
      <div className="w-11/12 mx-auto grid grid-cols-2 h-full">
        <div
          className="flex flex-col justify-center"
          onClick={handleNavigateToDetails}
        >
          <h1 className="text-black font-semibold truncate">{name}</h1>
          <h1 className="text-gray-500 italic text-xs">by {author}</h1>
        </div>
        <div className="flex justify-end items-center gap-2 ">
          <StarButton id={id} />
          <BookmarkButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
