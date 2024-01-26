import { ChangeEvent, memo, useState } from "react";
import { useNovelChapters } from "../../../hooks/useNovelChapters";
import ButtonModal from "./ButtonModal";
import { useNavigate } from "react-router-dom";
import { NOVELS_NOVEL } from "../../../utils/routes";

type Props = {
  novel_id: number;
  novel_name: string;
  novel_slug: string;
};

const ChapterSelector = ({ novel_slug, novel_id, novel_name }: Props) => {
  const { chapters } = useNovelChapters(novel_id);
  const [chapter, setChapter] = useState<string>("");
  const navigate = useNavigate();

  function handleReadChapter() {
    if (chapters == null) return;
    navigate(
      `${NOVELS_NOVEL}/${novel_slug}/${
        chapter === "" ? chapters[0].id : chapter
      }`
    );
  }

  function handleChapterChanged(event: ChangeEvent<HTMLSelectElement>): void {
    setChapter(event.target.value);
  }

  if (chapters == null) {
    return <p>No Chapter</p>;
  }

  return (
    <>
      <div className="my-10 flex flex-col gap-2 w-full">
        <button
          onClick={handleReadChapter}
          className={`btn btn-primary w-full btn-lg ${
            chapters.length === 0 && "btn-disabled"
          }`}
        >
          Read First Chapter
        </button>
        <ButtonModal
          className="w-full btn-lg"
          buttonText="Select Chapter"
          disabled={chapters.length === 0}
        >
          <h3 className="font-bold text-lg mb-3">{novel_name} Chapters</h3>
          <form method="dialog">
            <select
              onChange={handleChapterChanged}
              className="select select-bordered w-full max-w-xs"
            >
              {chapters.map((chapter) => (
                <option key={chapter.id} value={chapter.id}>
                  {chapter.title}
                </option>
              ))}
            </select>
            <div className="flex justify-end mt-3 gap-2">
              <button className="btn">Close</button>
              <button
                onClick={handleReadChapter}
                type="button"
                className="btn btn-primary"
              >
                Read
              </button>
            </div>
          </form>
        </ButtonModal>
      </div>
    </>
  );
};

export default memo(ChapterSelector);
