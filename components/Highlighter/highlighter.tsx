import React from "react";
import {
  HighlighterBackground,
  Highlighter as HighlighterCSS,
} from "../../styles/styles";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  sql: string;
  handleCopy: () => void;
};

const Highlighter: React.FC<Props> = ({ handleCopy, sql }) => {
  return (
    <HighlighterBackground>
      <HighlighterCSS
        language="sql"
        style={dracula}
        onClick={handleCopy}
        id="highlighter"
      >
        {sql}
      </HighlighterCSS>
    </HighlighterBackground>
  );
};

export { Highlighter };
