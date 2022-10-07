import { keyframes, styled } from "@stitches/react";
import reactTextareaAutosize from "react-textarea-autosize";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

export const Gradient = styled("div", {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: "absolute",
  zIndex: 1,
  background:
    "radial-gradient(circle at 15% 50%, hsl(252 40.1% 22.5%), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, hsl(192 79.3% 12.8%), rgba(255, 255, 255, 0) 25%)",
});

export const Container = styled("div", {
  position: "relative",
  height: "100vh",
  padding: "1rem",
});

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100%",
  margin: "0 auto",
  width: "100%",
  position: "relative",
  zIndex: 2,
});

export const Header = styled("header", {
  padding: "1rem 0.5rem 0 0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  position: "relative",
  zIndex: 4,

  h1: {
    fontSize: "2.5rem",
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
      fontSize: "2.7rem",
    },
    "@media (min-width: 768px)": {
      fontSize: "3.5rem",
    },
  },
  p: {
    fontSize: "1.2rem",
    textAlign: "center",
    margin: "0",
    padding: "1.5rem 1rem",
    maxWidth: "50ch",
    "@media (min-width: 420px)": {
      fontSize: "1.3rem",
    },
    "@media (min-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
});

export const HighlighterBackground = styled("div", {
  paddingBottom: "4rem",
});

export const Highlighter = styled(SyntaxHighlighter, {
  width: "calc(100vw - 2rem)",
  maxWidth: "40rem",
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
});

export const TextArea = styled(reactTextareaAutosize, {
  width: "calc(100vw - 2rem)",
  maxWidth: "40rem",
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
  color: "#fff",
  background: "#282A36",

  "&:last-child": {
    marginTop: "2rem",
  },
});

const gradientAnimation = keyframes({
  "50%": {
    backgroundPosition: "140% 50%",
    transform: "skew(-2deg)",
  },
});

export const ButtonWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  maxWidth: "39.5rem",
  justifyContent: "space-between",
  marginTop: "1.5rem",

  "@media (max-width: 420px)": {
    flexDirection: "column",
  },
});

export const CopyButtonContainer = styled("div", {
  fontSize: "1.7rem",
  margin: "0",
  padding: "2rem 0 0.6rem 0",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 420px)": {
    padding: "0.5rem 0",
  },
});

export const CopyButton = styled("button", {
  position: "relative",
  padding: "1rem 0 0 0",
  border: "none",
  borderRadius: "0.3rem",
  fontSize: "1rem",
  fontWeight: 700,
  background: "transparent",
  cursor: "pointer",
  width: "10rem",
  height: "2.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  "@media (max-width: 420px)": {
    "&[data-type='Download']": {
      marginTop: "0",
    },
  },
});

export const CopyButtonGradient = styled("div", {
  position: "absolute",
  top: "1px",
  right: "1px",
  bottom: "1px",
  left: "1px",
  borderRadius: "2rem",

  background: "linear-gradient(-90deg, #007cf0, #00dfd8, #ff0080, #007cf0)",
  backgroundSize: "400% 100%",
  border: "none",
  padding: "0",
  margin: "0",
  WebkitAnimation: `${gradientAnimation} 8s ease-in-out infinite`,
  animation: `${gradientAnimation} 8s ease-in-out infinite`,
});

export const CopyButtonContent = styled("div", {
  position: "absolute",
  top: "4px",
  right: "4px",

  bottom: "4px",
  left: "4px",
  background: "black",
  color: "#fff",
  borderRadius: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "background 0.3s ease-in-out",

  "&:hover": {
    background: "hsl(200deg 7% 9%)",
  },
});
