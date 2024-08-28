import React from "react";
import TextArea from "../components/TextArea";
import EditButton from "../components/EditButton";
import styled from "@emotion/styled";

const Box = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const ButtonBox = styled.div``;

function StoryComment() {
  // 로그인
  // open close toggle
  // post 요청 예외상황 처리

  return (
    <Box>
      <TextArea />
      <ButtonBox>
        <EditButton innerText="등록" onClick={() => {}}></EditButton>
      </ButtonBox>
    </Box>
  );
}

export default StoryComment;
