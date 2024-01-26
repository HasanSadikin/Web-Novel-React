import { Comment } from "../../../hooks/useNovelComments";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "../../../hooks/useUser";
import { ElementRef } from "react";

type Props = {
  comments: Comment[];
  onDeleteComment: (id: number) => void;
};

export default function NovelComments({ comments, onDeleteComment }: Props) {
  const [user] = useUser();

  return (
    <>
      {comments.length == 0 && <p className="text-center py-10">No Comments</p>}
      {comments.length > 0 && (
        <AnimatePresence>
          {comments.map((x) => (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              key={x.id}
              className="my-2 grid grid-cols-12 p-5 gap-3 rounded-lg border-primary"
            >
              <div className="col-span-2 aspect-square bg-primary rounded-full"></div>
              <div className="col-span-9 flex flex-col">
                <h1 className="font-semibold">Anon</h1>
                <p className="text-sm">{x.comment}</p>
              </div>
              <div className="col-span-1">
                {user?.id === x.user_id && (
                  <TrashIcon onClick={() => onDeleteComment(x.id)} />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </>
  );
}

interface TrashIconProps extends React.HtmlHTMLAttributes<ElementRef<"svg">> {}

function TrashIcon({ ...props }: TrashIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}
