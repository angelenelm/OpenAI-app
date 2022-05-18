import styled from "styled-components";
import theme from "./theme";
const { colors } = theme;

const ChatStyles = styled.div`
  width: 800px !important;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${colors.white};
  border-radius: 0.25rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  .chat {
    display: flex;
    flex-direction: column-reverse;
    overflow: scroll;
    width: 800px;
    height: 500px;
    padding: 1rem 2rem;

    .prompt {
      float: right;
      clear: left;
      max-width: 450px;
      background: ${colors.green};
      color: ${colors.white};
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      margin-bottom: 0.5rem;
    }

    .result {
      float: left;
      clear: right;
      max-width: 450px;
      background: ${colors.lightGray};
      color: ${colors.gray};
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      margin-bottom: 0.5rem;
    }
  }

  .prompt-input {
    width: 800px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem 0;

    label {
      display: none;
    }

    input[type="text"] {
      flex: 1 1 auto;
      padding: 0.75rem 1rem;
      border: 1px solid ${colors.lightGray};
      border-radius: 0.15rem;
    }
    input[type="text"]::placeholder {
      color: ${colors.lightGray};
    }
    input[type="text"]:focus {
      border: 1px solid ${colors.green};

      outline: 2px solid ${colors.green};
    }

    button[type="submit"] {
      flex: 0 1 auto;
      padding: 0.75rem 1.5rem;
      background: ${colors.green};
      color: ${colors.white};
      border-radius: 0.25rem;
      cursor: pointer;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      transition: ${theme.transition};
    }

    button[type="submit"]:hover {
      background: ${colors.darkGreen};
    }

    button[type="submit"]:active {
      background: ${colors.darkerGreen};
    }

    button[type="submit"]:focus {
      border-color: ${colors.blue};
    }

    button[type="submit"]:disabled {
      color: ${colors.lightGray};
      background: ${colors.disabledGray};
      cursor: default;
      box-shadow: none;
    }
  }
`;

export default ChatStyles;
