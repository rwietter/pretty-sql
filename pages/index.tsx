import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { format } from "sql-formatter";
import { ButtonWrapper, Container, Gradient, Main } from "../styles/styles";
import { ToastContainer, toast } from "react-toastify";
import { data } from "../data/data";
import { Header } from "../components/Header";
import { TextArea } from "../components/TextArea";
import { Button } from "../components/Button";
import { Highlighter } from "../components/Highlighter";
import { saveAsPng } from "save-html-as-image";

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
    if (!sql)
      return toast.warn("Nothing to copy! Please enter some SQL first.");

    await navigator.clipboard.writeText(sql);

    return toast.success("Query copied to clipboard!");
  };

  const handleDownload = async () => {
    const node = document.querySelector("#highlighter");

    if (node) {
      await saveAsPng(node, { filename: `${new Date().toLocaleString()}-sql`, printDate: false }, {
        backgroundColor: "#282A36",
        style: {
          padding: "1rem",
          margin: 0,
        },
      });
    }
    return true;
  };

  return (
    <Container>
      <Gradient />
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <TextArea handleChange={handleChange} />
        <ButtonWrapper>
          {sql && <Button handle={handleCopy} title="Copy" />}
          {sql && <Button handle={handleDownload} title="Download" />}
        </ButtonWrapper>
        <Highlighter handleCopy={handleCopy} sql={sql} />
      </Main>
      <ToastContainer />
    </Container>
  );
};

export default Home;
