import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getNovels } from "../store/novel/novelSlice";

import NovelList from "../components/home/NovelList";
import { SearchModal } from "../components/search/SearchModal";

const Search = () => {
  const novels = useSelector((state: RootState) => state.novels.value);
  const dispatch = useDispatch<AppDispatch>();

  const authors = useMemo(() => {
    if (novels === null) return [];

    return [...novels].map((novel) => ({
      id: novel.author_id,
      name: novel.author,
    }));
  }, [novels]);

  const origins = useMemo(() => {
    if (novels === null) return [];

    const _origins: string[] = [];
    [...novels].forEach((novel) => {
      if (!_origins.includes(novel.origin)) {
        _origins.push(novel.origin);
      }
    });
    return _origins;
  }, [novels]);

  const genres = useMemo(() => {
    if (novels === null) return [];

    const _genres: string[] = [];
    [...novels].forEach((novel) => {
      novel.genres.split(",").forEach((n) => {
        if (!_genres.includes(n)) {
          _genres.push(n);
        }
      });
    });
    return _genres;
  }, [novels]);

  useEffect(() => {
    dispatch(getNovels());
    window.scrollTo(0, 0);
  }, []);

  const [author, setAuthor] = useState("all");
  const [genre, setGenre] = useState("all");
  const [origin, setOrigin] = useState("all");

  function handleSearch(author: string, origin: string, genre: string): void {
    setAuthor(author);
    setGenre(genre);
    setOrigin(origin);
  }

  const searchNovel = useMemo(() => {
    if (novels === null) return [];

    const _novels = [...novels]
      .filter((novel) => author === "all" || String(novel.author_id) === author)
      .filter((novel) => origin === "all" || novel.origin === origin)
      .filter(
        (novel) => genre === "all" || novel.genres.split(",").includes(genre)
      );

    return _novels;
  }, [novels, author, genre, origin]);

  return (
    <div className="relative mb-16">
      <h1 className="text-center text-2xl py-10 font-bold">Search</h1>
      <NovelList novels={searchNovel} />
      <SearchModal
        authors={authors}
        origins={origins}
        genres={genres}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Search;
