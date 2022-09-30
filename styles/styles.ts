import { styled } from "@stitches/react";
import reactTextareaAutosize from "react-textarea-autosize";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100vw",
  backgroundColor: "$gray100",
});

export const Header = styled("main", {
  padding: "3rem 1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  h1: {
    fontSize: "4rem",
    margin: "0",
    padding: "0",
  },
  p: {
    fontSize: "1.5rem",
    margin: "0",
    padding: "1rem 0 0 0",
    maxWidth: "50ch",
  },
});

// export const Main = styled("main", {});

export const Highlighter = styled(SyntaxHighlighter, {
  width: "100%",
  minWidth: "30rem",
  maxWidth: "60rem",
  display: "block",
  overflow: "hidden",
  resize: "both",
  minHeight: "40px",
  lineHeight: "20px",
  border: "none",
  outline: "none",
  padding: "0",
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  color: "inherit",
  background: "transparent",
});

export const TextArea = styled(reactTextareaAutosize, {
  width: "100%",
  minWidth: "30rem",
  maxWidth: "60rem",
  display: "block",
  overflow: "hidden",
  resize: "both",
  minHeight: "40px",
  lineHeight: "20px",
  border: "none",
  outline: "none",
  padding: "0",
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  color: "inherit",
  background: "transparent",

  "&:last-child": {
    marginTop: "2rem",
  },
});
