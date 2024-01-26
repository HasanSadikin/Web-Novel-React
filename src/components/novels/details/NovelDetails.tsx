import { FC } from "react";
import { Novel } from "../../../store/novel/novelSlice";
import ChapterSelector from "./ChapterSelector";
import CommentSection from "./CommentSection";
import DescriptionSection from "./DescriptionSection";
import ImageSection from "./ImageSection";
import NovelInfoSection from "./NovelInfoSection";

interface Props {
  novel: Novel;
}

const NovelDetails: FC<Props> = ({ novel }) => {
  return (
    <div className="mb-20 mt-16">
      <ImageSection novel_image={novel.image} />
      <div className="w-11/12 mx-auto ">
        <NovelInfoSection
          novel_id={novel.id}
          novel_author={novel.author}
          novel_name={novel.novel_name}
          novel_origin={novel.origin}
        />
        <DescriptionSection novel_description={novel.description} />
        <ChapterSelector
          novel_slug={novel.slug}
          novel_id={novel.id}
          novel_name={novel.novel_name}
        />
        <CommentSection novel_id={novel.id} />
      </div>
    </div>
  );
};

export default NovelDetails;
