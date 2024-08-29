import React, { ChangeEventHandler } from "react";
import styled from "@emotion/styled";

interface Props {
  isLogin: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const Box = styled.div`
  width: 80%;
  height: auto;
  flex-flow: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  box-sizing: border-box;
  display: flex;
  min-height: 0px;
`;

const Input = styled.textarea`
  padding: 5px 10px;
  box-sizing: border-box;
  flex-basis: 0px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  min-width: 0px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  height: 80px;
  resize: none;
`;

function TextArea({ isLogin, value, onChange }: Props) {
  return (
    <Box>
      <Input disabled={!isLogin} onChange={onChange} value={value} />
    </Box>
  );
}

export default TextArea;
