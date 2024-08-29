import React, { useState, useEffect, memo } from "react";

import CommentList from "./container/CommentList";
import StoryComment from "./container/StoryComment";

import supabase from "./utils/supabase";
import { User } from "@supabase/supabase-js";
import { Comment } from "../@types/comment";

import styled from "@emotion/styled";
import { useStorybookState } from "@storybook/api";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  height: 100%;
`;

const CommentAddon = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const state = useStorybookState();

  useEffect(() => {
    const init = async () => {
      let { data, error } = await supabase
        .from("Comment")
        .select("*")
        .eq("story_id", state.storyId)
        .is("del", false);
      const comments: Comment[] = data!;
      setCommentList(comments);
    };

    init();
  }, [state.storyId]);

  useEffect(() => {
    const getUserInfo = async () => {
      let { data } = await supabase.auth.getUser();

      setUserInfo(data.user);
    };

    getUserInfo();
  }, []);

  return (
    <Box>
      <CommentList
        commentList={commentList}
        userInfo={userInfo}
        setCommentList={setCommentList}
      />
      <StoryComment
        userInfo={userInfo}
        commentList={commentList}
        setCommentList={setCommentList}
      />
    </Box>
  );
};

export default CommentAddon;
