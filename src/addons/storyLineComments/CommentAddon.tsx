import React, { useState, useEffect, memo } from "react";

import CommentList from "./CommentList";
import StoryComment from "./StoryComment";

import supabase from "../../utils/supabase";
import { User } from "@supabase/supabase-js";

import styled from "@emotion/styled";

const Box = styled.div`
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
      <StoryComment />
    </Box>
  );
};

export default memo(CommentAddon);
