import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Avata from "../components/Avata";
import Comment from "./Comment";

interface Props {
  id: number;
  imageSrc: string;
  content: string;
  isSameUser: boolean;
  deleteComment: (id: number) => void;
}

const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

function CommentBox({
  id,
  content,
  imageSrc,
  isSameUser,
  deleteComment,
}: Props) {
  return (
    <Box>
      <Avata imageSrc={imageSrc} />
      <Comment
        id={id}
        content={content}
        isSameUser={isSameUser}
        deleteComment={deleteComment}
      />
    </Box>
  );
}

export default CommentBox;
