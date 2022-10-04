import React from "react";

import { Header as HeaderContainer } from "../../styles/styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="ss02">
        <h1>Welcome to PrettySQL!</h1>
        <p>
          How to use PrettySQL? Enter your SQL query in the input field and
          <strong> click on the formatted SQL to copy</strong>
        </p>
      </div>
    </HeaderContainer>
  );
};

export { Header } ;
