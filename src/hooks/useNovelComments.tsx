import { useEffect, useState } from "react";
import { useSupabase } from "../utils/supabase";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";
import { NOVELS_ACCOUNT } from "../utils/routes";

export type Comment = {
  id: number;
  user_id: string;
  novel_id: string;
  comment: string;
};

type UseComment = {
  comments: Comment[];
  isLoading: boolean;
  addComment: (c: string) => void;
  deleteComment: (id: number) => void;
};

export function useNovelComments(id: number): UseComment {
  const supabase = useSupabase();
  const [user, isAuthenticated] = useUser();
  const navigate = useNavigate();
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleRender, setToggleRender] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from("Comments")
        .select()
        .limit(4)
        .eq("novel_id", id)
        .order("created_at", { ascending: false })
        .returns<Comment[]>();

      if (data) setComments(data);
      setIsLoading(false);
    };

    getComments();
  }, [id, toggleRender]);

  async function addComment(comment: string) {
    if (!isAuthenticated) {
      navigate(NOVELS_ACCOUNT);
      return;
    }

    await supabase.from("Comments").insert({
      user_id: user?.id,
      novel_id: id,
      comment: comment,
    });

    setToggleRender((prev) => !prev);
  }

  async function deleteComment(id: number) {
    await supabase.from("Comments").delete().eq("id", id);

    setToggleRender((prev) => !prev);
  }

  return {
    comments: comments,
    isLoading: isLoading,
    addComment: addComment,
    deleteComment: deleteComment,
  };
}
