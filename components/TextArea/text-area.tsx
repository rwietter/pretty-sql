import React from "react";

import { TextArea as TextAreaContainer } from "../../styles/styles";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<Props> = ({ handleChange }) => {
  return (
    <form>
      <TextAreaContainer
        id="sql"
        role="textarea"
        placeholder="Enter your SQL query here"
        onChange={handleChange}
        contentEditable
        cacheMeasurements
        minRows={5}
      ></TextAreaContainer>
    </form>
  );
};

export { TextArea };
