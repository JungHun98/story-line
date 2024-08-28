import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Avata from "../components/Avata";
import Comment from "./Comment";

interface Props {
  id: number;
  imageSrc: string;
  content: string;
  isSameUser: boolean;
}

const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

function CommentBox({ id, content, imageSrc, isSameUser }: Props) {
  return (
    <Box>
      <Avata imageSrc={imageSrc} />
      <Comment id={id} content={content} isSameUser={isSameUser} />
    </Box>
  );
}

export default CommentBox;
