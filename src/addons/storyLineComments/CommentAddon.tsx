import React, { useState, useEffect, memo } from "react";

import CommentList from "./CommentList";
import StoryComment from "./StoryComment";

import supabase from "../../utils/supabase";
import { User } from "@supabase/supabase-js";

const CommentAddon = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  // const state = useStorybookState();

  useEffect(() => {
    const getUserInfo = async () => {
      let { data } = await supabase.auth.getUser();

      setUserInfo(data.user);
    };

    getUserInfo();
  });

  // const handleAddComment = async () => {
  //   if (newComment) {
  //     const { data, error } = await supabase
  //       .from("Comment")
  //       .insert([{ description: newComment, story_id: state.storyId }])
  //       .select();

  //     setNewComment("");
  //   }
  // };

  return (
    <div>
      <CommentList />
      <StoryComment />
    </div>
  );
};

export default memo(CommentAddon);
