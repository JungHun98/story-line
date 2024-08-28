import React, { useRef, useState } from "react";
import EditButton from "../components/EditButton";
import styled from "@emotion/styled";

interface Props {
  id: number;
  content: string;
  isSameUser: boolean;
}

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const ContentBox = styled.div`
  max-width: 70%;
  height: auto;
  padding: 0px 12px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  overflow-wrap: break-word;
  font-size: 15px;
`;

const ButtonBox = styled.div`
  display: flex;
  height: 30px;
  gap: 10px;
  margin-left: 10px;
`;

function Comment({ id, content, isSameUser }: Props) {
  const deleteComment = () => {};

  return (
    <Container>
      <ContentBox>
        <p>{content}</p>
      </ContentBox>
      {isSameUser ? (
        <ButtonBox>
          <EditButton innerText="삭제" onClick={() => {}} />
        </ButtonBox>
      ) : null}
    </Container>
  );
}

export default Comment;
