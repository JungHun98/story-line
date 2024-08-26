import React from "react";
import { styled } from "@storybook/theming";
import supabase from "../../utils/supabase";

const LoginTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  max-width: 300px;
  margin: 0 auto;
`;

const Login = () => {
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

  return (
    <LoginTag>
      <button onClick={() => googleSignIn()}>登陆</button>
    </LoginTag>
  );
};

export default Login;
