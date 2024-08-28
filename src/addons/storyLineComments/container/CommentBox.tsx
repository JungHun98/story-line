import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Avata from "../components/Avata";

interface Props {
  imageSrc: string;
  content: string;
  isLogin: boolean;
}

const TextArea = styled.textarea``;

function CommentBox({}) {
  return (
    <div>
      <Avata imageSrc="" />
      <div>
        <TextArea />
      </div>
      <div></div>
    </div>
  );
}

export default CommentBox;
