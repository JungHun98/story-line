import React, { useRef, useState } from "react";
import EditButton from "../components/EditButton";
import styled from "@emotion/styled";

interface Props {
  id: number;
  content: string;
  isSameUser: boolean;
  deleteComment: (id: number) => void;
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

function Comment({ id, content, isSameUser, deleteComment }: Props) {
  return (
    <Container>
      <ContentBox>
        <p>{content}</p>
      </ContentBox>
      {isSameUser ? (
        <ButtonBox>
          <EditButton
            innerText="삭제"
            onClick={() => {
              deleteComment(id);
            }}
          />
        </ButtonBox>
      ) : null}
    </Container>
  );
}

export default Comment;
