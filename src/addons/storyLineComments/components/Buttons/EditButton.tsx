import React from "react";
import styled from "@emotion/styled";

interface Props {
  innerText: string;
  onClick: () => void;
}

const Button = styled.button`
  display: inline-block;
  font-weight: 700;
  font-size: 12px;
  border: 0;
  border-radius: 3em;
  line-height: 1;
  cursor: pointer;
  padding: 10px 16px;
`;

function EditButton({ innerText, onClick }: Props) {
  return <Button onClick={onClick}>{innerText}</Button>;
}

export default EditButton;
