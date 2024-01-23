import NovelList from "../components/novels/NovelList";
import { SearchModal } from "../components/search/SearchModal";
import { useNovels } from "../hooks/useNovels";
import { useGetAllAuthorFromNovel } from "../hooks/useGetAllAuthorFromNovel";
import { useGetAllOriginFromNovel } from "../hooks/useGetAllOriginFromNovel";
import { useGetAllGenreFromNovel } from "../hooks/useGetAllGenreFromNovel";
import { useScrollToTop } from "../hooks/useScrollToTop";
import SkeletonList from "../components/novels/SkeletonList";
import { useFilterAll } from "../hooks/useFilterAll";

const Search = () => {
  const [novels, isLoading] = useNovels();

  const authors = useGetAllAuthorFromNovel(novels);
  const origins = useGetAllOriginFromNovel(novels);
  const genres = useGetAllGenreFromNovel(novels);

  useScrollToTop();

  const [searchResult, handleSearch] = useFilterAll(novels);

  return (
    <div className="relative mb-20">
      <h1 className="text-center text-2xl py-10 font-bold">Search</h1>
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

export default Search;
