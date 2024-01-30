import NovelList from "../components/novels/NovelList";
import { SearchModal } from "../components/search/SearchModal";
import { useNovels } from "../hooks/useNovels";
import { useScrollToTop } from "../hooks/useScrollToTop";
import SkeletonList from "../components/novels/SkeletonList";
import { useFilterAll } from "../hooks/useFilterAll";
import {
  getAllAuthorFromNovel,
  getAllOriginFromNovel,
  getAllGenreFromNovel,
} from "../utils/novels";

const SearchPage = () => {
  const [novels, isLoading] = useNovels();

  const authors = getAllAuthorFromNovel(novels);
  const origins = getAllOriginFromNovel(novels);
  const genres = getAllGenreFromNovel(novels);

  useScrollToTop();

  const [searchResult, handleSearch] = useFilterAll(novels);

  return (
    <div className="relative w-10/12 mx-auto mb-20">
      <h1 className="py-10 text-2xl font-bold text-center">Search</h1>
      <SearchModal
        authors={authors}
        origins={origins}
        genres={genres}
        onSearch={handleSearch}
      />
      {isLoading ? (
        <SkeletonList amount={3} />
      ) : (
        <NovelList novels={searchResult} />
      )}
    </div>
  );
};

export default SearchPage;
