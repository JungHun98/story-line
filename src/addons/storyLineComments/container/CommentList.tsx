import React, { useEffect, useState } from "react";
import supabase from "../../../utils/supabase";
import { useStorybookApi } from "@storybook/api";
import { Comment } from "../../../../@types/comment";

function CommentList() {
  const [commentList, setCommentList] = useState<string[]>([]);
  const state = useStorybookApi();

  useEffect(() => {
    const getComments = async () => {
      let { data, error } = await supabase
        .from("Comment")
        .select("*")
        .eq("story_id", state.storyId);

      const comments: Comment[] = data!;
      setCommentList(comments.map((elem) => elem.description));
    };

    getComments();
  }, [state.storyId]);

  return <div></div>;
}

export default CommentList;
