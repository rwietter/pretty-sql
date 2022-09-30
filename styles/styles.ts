import { css, styled } from "@stitches/react";
import reactTextareaAutosize from "react-textarea-autosize";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

export const Center = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "2rem 0 3rem 0",
  height: "100%",
  fontWeight: 300,
  WebkitFontSmoothing: "auto",

  background:
    "radial-gradient(circle at 15% 50%, hsl(252 40.1% 22.5%), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, hsl(192 79.3% 12.8%), rgba(255, 255, 255, 0) 25%)",
});

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  margin: "0 auto",
  width: "100%",
  backgroundColor: "inherit",
});

export const paragraphStyles = css({
  fontFeatureSettings: '"ss02" 1',
  letterSpacing: "-.05em",
});

export const Header = styled("header", {
  padding: "1rem 0.5rem 0 0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  h1: {
    fontSize: "2rem",
    margin: "0",
    padding: "0",
    letterSpacing: "-.05em",
    fontWeight: 800,
    textAlign: "center",
    backgroundColor: "#fa0",
    backgroundImage: "linear-gradient(135deg,#fa0 12%,#f0a 83%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundClip: "text",
    "@media (min-width: 420px)": {
      fontSize: "2rem",
    },
    "@media (min-width: 768px)": {
      fontSize: "3.5rem",
    },
  },
  p: {
    fontSize: "0.8rem",
    textAlign: "center",
    margin: "0",
    padding: "1.5rem 1rem",
    maxWidth: "50ch",
    "@media (min-width: 420px)": {
      fontSize: "1rem",
    },
    "@media (min-width: 768px)": {
      fontSize: "1.3rem",
    },
  },
});

export const PrettyHighlight = styled("h2", {
  fontSize: "1.3rem",
  margin: "0",
  padding: "2rem 0 0.6rem 0",
  backgroundColor: "#0fa",
  backgroundImage: "linear-gradient(135deg,#0af 15%,#0fa 93%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

export const Highlighter = styled(SyntaxHighlighter, {
  width: "100%",
  minWidth: "15rem",
  maxWidth: "60rem",
  display: "block",
  overflow: "hidden",
  resize: "both",
  minHeight: "40px",
  lineHeight: "20px",
  border: "none",
  outline: "none",
  cursor: "copy",
  padding: "0",
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  color: "inherit",
  background: "transparent",

  "@media (min-width: 420px)": {
    minWidth: "20rem",
  },
  "@media (min-width: 720px)": {
    minWidth: "30rem",
  },
});

export const TextArea = styled(reactTextareaAutosize, {
  width: "100%",
  minWidth: "15rem",
  maxWidth: "60rem",
  display: "block",
  overflow: "hidden",
  resize: "both",
  minHeight: "40px",
  lineHeight: "20px",
  border: "none",
  outline: "none",
  padding: "1rem",
  borderRadius: "0.3rem",
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  color: "inherit",
  background: "#282A36",

  "&:last-child": {
    marginTop: "2rem",
  },
  "@media (min-width: 420px)": {
    minWidth: "20rem",
  },
  "@media (min-width: 720px)": {
    minWidth: "30rem",
  },
});
