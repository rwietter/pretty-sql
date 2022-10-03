import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { format } from "sql-formatter";
import {
  Container,
  CopyButton,
  CopyButtonContainer,
  CopyButtonContent,
  CopyButtonGradient,
  Gradient,
  Header,
  Highlighter,
  HighlighterBackground,
  Main,
  TextArea,
} from "../styles/styles";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ToastContainer, toast } from "react-toastify";
import { data } from "./api/data";

const Home: NextPage = () => {
  const [sql, setSql] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSql(
      format(e.target.value, {
        keywordCase: "upper",
      })
    );
  };

  const handleCopy = async () => {
    if (!sql) return toast.warn("Nothing to copy! Please enter some SQL first.");

    await navigator.clipboard.writeText(sql);
    return toast.success("Query copied to clipboard!");
  };

  return (
    <Container>
      <Gradient />
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div className="ss02">
          <h1>Welcome to PrettySQL!</h1>
          <p>
            How to use PrettySQL? Enter your SQL query in the input field and
            <strong> click on the formatted SQL to copy</strong>
          </p>
        </div>
      </Header>
      <Main>
        <form>
          <TextArea
            id="sql"
            role="textarea"
            placeholder="Enter your SQL query here"
            onChange={handleChange}
            contentEditable
            cacheMeasurements
            minRows={5}
          ></TextArea>
        </form>

        <CopyButtonContainer>
          <CopyButton onClick={handleCopy}>
            <CopyButtonGradient className="gradient-animation"></CopyButtonGradient>
            <CopyButtonContent className="content">Copy</CopyButtonContent>
          </CopyButton>
        </CopyButtonContainer>

        <HighlighterBackground>
          <Highlighter
            language="sql"
            style={dracula}
            onClick={handleCopy}
            id="highlighter"
          >
            {sql}
          </Highlighter>

        </HighlighterBackground>
      </Main>
      <ToastContainer />
    </Container>
  );
};

export default Home;
