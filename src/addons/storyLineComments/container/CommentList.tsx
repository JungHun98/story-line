import React from "react";
import CommentBox from "./CommentBox";
import { User } from "@supabase/auth-js/dist/module/lib/types";
import styled from "@emotion/styled";
import { Comment } from "../../../../@types/comment";

interface Props {
  userInfo: User | null;
  commentList: Comment[];
}

const Box = styled.div`
  flex: 1;
  padding: 10px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function CommentList({ commentList, userInfo }: Props) {
  const isSameUser = (commentEmail: string) => {
    if (userInfo === null) return false;

    return userInfo.email === commentEmail;
  };

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
