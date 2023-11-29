"use client";
import React,{useState} from "react";
import Counter from "@/components/counter";
import { CodeBlock } from "react-code-blocks";

export default function Home() {
  return (
    <main>
      <h1>This is question 5: React: 組件</h1>
      <h3>Answer:</h3>
      <div>
      <Counter></Counter>
      </div>
    </main>
  );
}
