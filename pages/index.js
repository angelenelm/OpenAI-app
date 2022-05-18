import Head from "next/head";
import { Chat } from "../components";
import styled from "styled-components";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>web dev help</title>
      </Head>

      <StyledContainer>
        <h1>web dev help</h1>
        <Chat />
      </StyledContainer>
    </div>
  );
}
