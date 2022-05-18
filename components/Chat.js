import React, { useState } from "react";
import { ChatStyles } from "../styles";

const Chat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();
  const [results, setResults] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    const response = await fetch("/api/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });

    const data = await response.json();

    setResult(data.result);

    const item = {};
    item[prompt] = data.result;

    setResults([...results, item]);
    setPrompt("");

    setIsLoading(false);
  }

  return (
    <ChatStyles>
      <div className="chat">
        <ul>
          <li className="result">
            Hi! I'm a web development tips chatbot. Ask me anything (realistic) about web
            development: Javascript tips, what React Hooks are, generate an HTML layout, etc. and
            I'll try to answer it!
          </li>

          {results.map((item, index) => (
            <>
              <li key={`prompt-${index}`} className="prompt">
                {Object.keys(item)}
              </li>
              <li key={`result-${index}`} className="result">
                {Object.values(item)}
              </li>
            </>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="prompt-input">
        <label htmlFor="prompt">Enter prompt:</label>
        <input
          type="text"
          id="prompt"
          name="prompt"
          placeholder="Enter prompt"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <button type="submit" disabled={!prompt || isLoading}>
          <span>{isLoading ? "Loading..." : "Submit"}</span>
        </button>
      </form>
    </ChatStyles>
  );
};

export default Chat;
