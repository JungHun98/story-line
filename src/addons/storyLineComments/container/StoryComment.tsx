import React, { ChangeEventHandler, useState } from "react";
import TextArea from "../components/TextArea";
import EditButton from "../components/EditButton";
import styled from "@emotion/styled";
import LoginButton from "../components/LoginButton";
import supabase from "../../../utils/supabase";
import { User } from "@supabase/supabase-js";
import { useStorybookState } from "@storybook/api";
import { Comment } from "../../../../@types/comment";

interface Props {
  userInfo: User | null;
  commentList: Comment[];
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const ButtonBox = styled.div``;

function StoryComment({ userInfo, commentList, setCommentList }: Props) {
  const [value, setValue] = useState<string>("");
  const state = useStorybookState();

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

  const createComment = async () => {
    const { data, error } = await supabase
      .from("Comment")
      .insert([
        {
          story_id: state.storyId,
          description: value,
          user_email: userInfo?.email,
          profile_url: userInfo?.user_metadata.avatar_url,
        },
      ])
      .select();

    if (error === null) {
      const newCommentList = commentList.concat(data);

      setCommentList(newCommentList);
      setValue("");
    } else {
      alert(`등록 실패 ${error.message}`);
    }
  };

  const updateValue: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setValue(target.value);
  };

  return (
    <Box>
      <TextArea isLogin={isLogin} value={value} onChange={updateValue} />
      <ButtonBox>
        {isLogin ? (
          <EditButton innerText="등록" onClick={createComment} />
        ) : (
          <LoginButton onClick={googleSignIn} />
        )}
      </ButtonBox>
    </Box>
  );
}

export default StoryComment;
