import React, { useEffect, useState } from "react";
import supabase from "../../../utils/supabase";
import { useStorybookState } from "@storybook/api";
import { Comment } from "../../../../@types/comment";
import CommentBox from "./CommentBox";
import { User } from "@supabase/auth-js/dist/module/lib/types";
import styled from "@emotion/styled";

interface Props {
  userInfo: User | null;
}

const Box = styled.div`
  flex: 1;
  padding: 10px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function CommentList({ userInfo }: Props) {
  const [commentList, setCommentList] = useState<Comment[]>([]);

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
    };

    init();
  }, [state.storyId]);

  return (
    <Box>
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
    </Box>
  );
}

export default CommentList;
