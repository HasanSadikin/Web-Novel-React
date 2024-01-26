import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { useNovelChapters } from "../../../hooks/useNovelChapters";
import { Chapter } from "../../../store/chapter/chapterSlice";
import ButtonModal from "../details/ButtonModal";

type Props = {
  slug: string;
  chapter_id: number;
  selector_text: string;
  novel_id: number;
  novel_name: string;
};

const NavigationButtons = ({
  novel_id,
  slug,
  chapter_id,
  selector_text,
  novel_name,
}: Props) => {
  const navigate = useNavigate();

  const [selectedChapter, setselectedChapter] = useState<string>(
    String(chapter_id)
  );

  const { chapters, hasNext, hasPrev, getNext, getPrev } =
    useNovelChapters(novel_id);

  function handleReadChapter() {
    if (chapters == null) return;
    navigate(`/novel/${slug}/${selectedChapter}`);
  }

  function handleChapterChanged(event: ChangeEvent<HTMLSelectElement>): void {
    setselectedChapter(event.target.value);
  }

  function navigateTo(to: Chapter | null) {
    if (!to) return;
    navigate(`/novel/${slug}/${to.id}`);
  }

  return (
    <div className="grid grid-cols-5 gap-3">
      <button
        className="btn btn-primary col-span-1"
        disabled={hasPrev(chapter_id)}
        onClick={() => navigateTo(getPrev(chapter_id))}
      >
        Prev
      </button>
      {chapters && (
        <ButtonModal
          className="w-full col-span-3"
          buttonText={selector_text}
          disabled={chapters.length === 0}
        >
          <h3 className="font-bold text-lg mb-3">{novel_name} Chapters</h3>
          <form method="dialog">
            <select
              onChange={handleChapterChanged}
              className="select select-bordered w-full max-w-xs"
            >
              {chapters.map((_chapter) => (
                <option
                  key={_chapter.id}
                  value={_chapter.id}
                  selected={_chapter.id === chapter_id}
                >
                  {_chapter.title}
                </option>
              ))}
            </select>
            <div className="flex justify-end mt-3 gap-2">
              <button className="btn">Close</button>
              <button onClick={handleReadChapter} className="btn btn-primary">
                Read
              </button>
            </div>
          </form>
        </ButtonModal>
      )}
      <button
        className="btn btn-primary col-span-1"
        onClick={() => navigateTo(getNext(chapter_id))}
        disabled={hasNext(chapter_id)}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
