import React from "react";
import styled from "@emotion/styled";

interface Props {
  imageSrc: string;
}

const Box = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Avata({ imageSrc }: Props) {
  return (
    <Box>
      <Image src={imageSrc} />
    </Box>
  );
}

export default Avata;
