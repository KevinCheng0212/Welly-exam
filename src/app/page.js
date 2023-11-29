"use client";
import React,{useState} from "react";
import { CodeBlock } from "react-code-blocks";

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

export default function Home() {
  return (
    <main>
      <h1>This is question 1: JavaScript: 字串反轉</h1>
      <h3>Answer:</h3>
      <div>
      <CodeBlock
          text={`function reverseString(str) {
        return str.split("").reverse().join("");
      }
      console.log(reverseString("Hello"));`}
          language="javascript"
          showLineNumbers={true}
          wrapLines={true}
          codeBlock={true}
        />
      </div>
    </main>
  );
}
