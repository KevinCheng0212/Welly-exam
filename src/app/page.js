"use client";
import React,{useState} from "react";
import { CodeBlock } from "react-code-blocks";

function filterNumbersGreaterThanFive(numbers) {
  return numbers.filter((e) => e > 5);
}
const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers));

export default function Home() {
  return (
    <main>
      <h1>This is question 2: JavaScript: 陣列過濾</h1>
      <h3>Answer:</h3>
      <div>
      <CodeBlock
          text={`function filterNumbersGreaterThanFive(numbers) {
        return numbers.filter((e) => e > 5);
      }
      const numbers = [2, 8, 4, 10, 1, 7];
      console.log(filterNumbersGreaterThanFive(numbers));`}
          language="javascript"
          showLineNumbers={true}
          wrapLines={true}
          codeBlock={true}
        />
      </div>
    </main>
  );
}
