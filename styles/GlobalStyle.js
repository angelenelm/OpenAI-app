import { createGlobalStyle } from "styled-components";
import "the-new-css-reset/css/reset.css";
import theme from "./theme";
const { colors } = theme;

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit
}

body {
  margin: 0;
  padding: 0;
  font-family: ${theme.fonts};
  background-color: ${colors.lighterGray}
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 600;
  }

h1 {
  font-size: 2.5rem;
}

p {
  line-height: 1.5;
}
`;

export default GlobalStyle;
