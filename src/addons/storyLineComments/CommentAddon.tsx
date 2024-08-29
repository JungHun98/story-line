import React, { useState, useEffect, memo } from "react";

import CommentList from "./container/CommentList";
import StoryComment from "./container/StoryComment";

import supabase from "../../utils/supabase";
import { User } from "@supabase/supabase-js";

import styled from "@emotion/styled";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  height: 100%;
`;

const CommentAddon = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      let { data } = await supabase.auth.getUser();

      setUserInfo(data.user);
    };

    getUserInfo();
  }, []);

  return (
    <Box>
      <CommentList />
      <StoryComment isLogin={userInfo !== null} />
    </Box>
  );
};

export default CommentAddon;
