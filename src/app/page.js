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
      <h1>This is question :</h1>
      <h3>Answer:</h3>
      <div>
        
      </div>
    </main>
  );
}
