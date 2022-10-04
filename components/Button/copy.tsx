import React from "react";

import {
  CopyButton,
  CopyButtonContainer,
  CopyButtonContent,
  CopyButtonGradient,
} from "../../styles/styles";

type Props = {
  handleCopy: () => void;
};

const Button: React.FC<Props> = ({ handleCopy }) => {
  return (
    <CopyButtonContainer>
      <CopyButton onClick={handleCopy}>
        <CopyButtonGradient className="gradient-animation"></CopyButtonGradient>
        <CopyButtonContent className="content">Copy</CopyButtonContent>
      </CopyButton>
    </CopyButtonContainer>
  );
};

export { Button };
