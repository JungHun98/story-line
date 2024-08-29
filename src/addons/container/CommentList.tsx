import React from "react";
import CommentBox from "./CommentBox";
import { User } from "@supabase/auth-js/dist/module/lib/types";
import styled from "@emotion/styled";
import { Comment } from "../../@types/comment";
import supabase from "../utils/supabase";

interface Props {
  userInfo: User | null;
  commentList: Comment[];
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const Box = styled.div`
  flex: 1;
  padding: 10px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function CommentList({ commentList, userInfo, setCommentList }: Props) {
  const isSameUser = (commentEmail: string) => {
    if (userInfo === null) return false;

    return userInfo.email === commentEmail;
  };

  const deleteComment = async (id: number) => {
    const { error } = await supabase
      .from("Comment")
      .update({ del: true })
      .eq("id", id);

    if (error === null) {
      const newCommentList = commentList.filter((comment) => comment.id !== id);
      setCommentList(newCommentList);
    } else {
      alert(`삭제 실페 ${error.message}`);
    }
  };

  const confirmDelete = (id: number) => {
    let isDelete = confirm("삭제하시겠습니까?");

    if (isDelete) {
      deleteComment(id);
    }
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
            deleteComment={confirmDelete}
          />
        );
      })}
    </Box>
  );
}

export default CommentList;
