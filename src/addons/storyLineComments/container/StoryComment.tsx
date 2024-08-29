import React from "react";
import TextArea from "../components/TextArea";
import EditButton from "../components/EditButton";
import styled from "@emotion/styled";
import LoginButton from "../components/LoginButton";
import supabase from "../../../utils/supabase";
import { User } from "@supabase/supabase-js";

interface Props {
  userInfo: User | null;
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const ButtonBox = styled.div``;

function StoryComment({ userInfo }: Props) {
  const isLogin = userInfo !== null;

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

  const createComment = () => {};

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
