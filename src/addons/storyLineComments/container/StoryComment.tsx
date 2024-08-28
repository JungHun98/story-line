import React from "react";
import TextArea from "../components/TextArea";
import EditButton from "../components/EditButton";
import styled from "@emotion/styled";
import LoginButton from "../components/LoginButton";

interface Props {
  isLogin: boolean;
}

const Box = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const ButtonBox = styled.div``;

function StoryComment({ isLogin }: Props) {
  // 로그인
  // open close toggle
  // post 요청 예외상황 처리

  return (
    <Box>
      <TextArea isLogin />
      <ButtonBox>
        {isLogin ? (
          <EditButton innerText="등록" onClick={() => {}} />
        ) : (
          <LoginButton />
        )}
      </ButtonBox>
    </Box>
  );
}

export default StoryComment;
