import Head from "next/head";
import { Chat, Footer } from "../components";
import styled from "styled-components";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

export default function Home() {
  return (
    <main>
      <Head>
        <title>web dev help</title>
      </Head>

      <StyledContainer>
        <h1>web dev help</h1>
        <Chat />
      </StyledContainer>

      <Footer />
    </main>
  );
}
