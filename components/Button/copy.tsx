import React from "react";

import {
  CopyButton,
  CopyButtonContainer,
  CopyButtonContent,
  CopyButtonGradient,
} from "../../styles/styles";

type Props = {
  handle: () => void;
  title: string;
};

const Button: React.FC<Props> = ({ handle, title = "" }) => {
  return (
    <CopyButtonContainer>
      <CopyButton onClick={handle} data-type={title}>
        <CopyButtonGradient className="gradient-animation"></CopyButtonGradient>
        <CopyButtonContent className="content">{ title }</CopyButtonContent>
      </CopyButton>
    </CopyButtonContainer>
  );
};

export { Button };
