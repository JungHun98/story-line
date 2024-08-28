import styled from "@emotion/styled";
import React from "react";

interface Props {
  onClick: () => void;
}

const Box = styled.div`
  cursor: pointer;
`;
function LoginButton() {
  return (
    <Box>
      <img src="../src/addons/storyLineComments/assets/image.png" />
    </Box>
  );
}

export default LoginButton;
