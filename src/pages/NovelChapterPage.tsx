import { useParams } from "react-router-dom";
import NavigationButtons from "../components/novels/chapter/NavigationButtons";
import { useSingleNovelChapter } from "../hooks/useSingleNovelChapter";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useSingleNovel } from "../hooks/useSingleNovel";
import { useChapterViews } from "../hooks/useChapterViews";

const NovelChapterPage = () => {
  const params = useParams();
  const chapter_id = Number(params.chapter_id);
  const slug = params.slug as string;
  const { chapter } = useSingleNovelChapter(chapter_id);
  const { novel, isNovelLoading } = useSingleNovel(slug);

  useChapterViews(chapter_id);

  useScrollToTop();

  if (!chapter) {
    return <p>Invalid Chapter</p>;
  }

  return (
    <div className="w-11/12 mx-auto py-5 mt-16">
      {!isNovelLoading && novel && (
        <NavigationButtons
          novel_id={novel.id}
          novel_name={novel.novel_name}
          slug={slug}
          chapter_id={chapter_id}
          selector_text={chapter.title.split("-")[0]}
        />
      )}
      <h1 className="font-bold text-xl py-5">{chapter?.title}</h1>
      <p>{chapter?.body}</p>
    </div>
  );
};

export default NovelChapterPage;
