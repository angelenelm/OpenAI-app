import styled from "styled-components";
import { theme } from "../styles";
const { colors } = theme;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  color: ${colors.gray};

  span {
    margin: 0 0.5rem;
  }

  a {
    color: ${colors.blue};
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <span>
        Built with{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        {", "}
        <a
          href="https://beta.openai.com/docs/introduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenAI API
        </a>
        {", & "}
        <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">
          Styled Components
        </a>
        {" by "}
        <a href="https://github.com/angelenelm" target="_blank" rel="noopener noreferrer">
          angelenelm
        </a>
      </span>
    </div>
  </StyledFooter>
);

export default Footer;
