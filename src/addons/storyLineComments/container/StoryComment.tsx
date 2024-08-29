import React from "react";
import TextArea from "../components/TextArea";
import EditButton from "../components/EditButton";
import styled from "@emotion/styled";
import LoginButton from "../components/LoginButton";
import supabase from "../../../utils/supabase";

interface Props {
  isLogin: boolean;
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const ButtonBox = styled.div``;

function StoryComment({ isLogin }: Props) {
  // 로그인

  const googleSignIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  // open close toggle
  // post 요청 예외상황 처리

  return (
    <Box>
      <TextArea isLogin={isLogin} />
      <ButtonBox>
        {isLogin ? (
          <EditButton innerText="등록" onClick={() => {}} />
        ) : (
          <LoginButton onClick={googleSignIn} />
        )}
      </ButtonBox>
    </Box>
  );
}

export default StoryComment;
