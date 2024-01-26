import { FieldValues, useForm } from "react-hook-form";
import { useNovelComments } from "../../../hooks/useNovelComments";
import NovelComments from "./NovelComments";

type Props = {
  novel_id: number;
};

const CommentSection = ({ novel_id }: Props) => {
  const { comments, addComment, deleteComment } = useNovelComments(novel_id);
  const { register, handleSubmit, reset } = useForm();

  function submitComment(data: FieldValues) {
    addComment(data.comment);
    reset();
  }
  return (
    <>
      <div className="mt-3">
        <h1 className="text-lg font-semibold text-center mb-5">Comments</h1>
        <form onSubmit={handleSubmit(submitComment)}>
          <textarea
            required
            {...register("comment")}
            className="textarea textarea-primary w-full leading-5 p-3 h-24"
            placeholder="Write Your Comment..."
          ></textarea>
          <button className="btn btn-primary btn-sm w-full">Post</button>
        </form>
      </div>
      <div className="mt-5">
        <NovelComments comments={comments} onDeleteComment={deleteComment} />
      </div>
    </>
  );
};

export default CommentSection;
