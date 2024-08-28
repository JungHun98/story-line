import React, { useEffect, useState } from "react";
import supabase from "../../../utils/supabase";
import { useStorybookState } from "@storybook/api";
import { Comment } from "../../../../@types/comment";
import CommentBox from "./CommentBox";
import { User } from "@supabase/auth-js/dist/module/lib/types";

function CommentList() {
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const state = useStorybookState();

  const isSameUser = (commentEmail: string) => {
    if (userInfo === null) return false;

    return userInfo.email === commentEmail;
  };

  useEffect(() => {
    const init = async () => {
      let { data, error } = await supabase
        .from("Comment")
        .select("*")
        .eq("story_id", state.storyId);

      const comments: Comment[] = data!;
      setCommentList(comments);

      const userInfo = await supabase.auth.getUser();
      setUserInfo(userInfo.data.user);
    };

    init();
  }, [state.storyId]);

  return (
    <div>
      {commentList.map((comment) => {
        return (
          <CommentBox
            key={comment.id}
            id={comment.id}
            content={comment.description}
            imageSrc={comment.profile_url}
            isSameUser={isSameUser(comment.user_email)}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
