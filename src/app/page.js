"use client";
import React, { useState } from "react";
import { CodeBlock } from "react-code-blocks";
import ConditionalRendering from "./components/ConditionalRendering";

export default function Home() {
  const [isLogged, setLogged] = useState(false);
  const changeLogState = () => {
    setLogged(!isLogged);
  };
  return (
    <main>
      <h1>This is question 4: React: 條件渲染</h1>
      <h3>Answer:</h3>
      <CodeBlock
        text={`<div>
        <ConditionalRendering isLoggedIn={isLogged}></ConditionalRendering>
      </div>
      <button onClick={changeLogState}>btn</button>`}
        language="javascript"
        showLineNumbers={true}
        wrapLines={true}
        codeBlock={true}
      />
      <div>
        <ConditionalRendering isLoggedIn={isLogged}></ConditionalRendering>
      </div>
      <button onClick={changeLogState}>btn</button>
    </main>
  );
}
