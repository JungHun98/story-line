import React from "react";
import styled from "@emotion/styled";

interface Props {
  text: string;
  isEdited: boolean;
}

const Box = styled.div``;
const Content = styled.div``;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 8px;
`;

function TextBox({ text, isEdited }: Props) {
  return (
    <div>
      <TextArea value={text}></TextArea>
    </div>
  );
}

export default TextBox;
