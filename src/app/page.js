"use client";
import React, { useState } from "react";
import { CodeBlock } from "react-code-blocks";

function ormatName(firstName, lastName) {
  if (!lastName) {
    return firstName;
  }
  const englishNameRegex = /^[A-Za-z\s]*$/;
  if (englishNameRegex.test(firstName + lastName)) {
    return firstName + " " + lastName;
  } else {
    return lastName + firstName;
  }
}
console.log(ormatName("Kevin", "Cheng"));
console.log(ormatName("凱文", "鄭"));
console.log(ormatName("凱文", ""));

export default function home() {
  return (
    <main>
      <h1>This is question 3: JavaScript: 重構</h1>
      <h3>Answer:</h3>
      <CodeBlock
        text={`function formatName(firstName, lastName) {
        //如果沒有lastName則直接返回firstName
        if (!lastName) {
          return firstName;
        }

        // 使用regular expression驗證名字是否為全英文
        // 若為是則返回'firstName + 空格 + lastName'
        // 否則返回'lastName + firstName'
        const englishNameRegex = /^[A-Za-z\s]*$/;
        if (englishNameRegex.test(firstName + lastName)) {
            return firstName + " " + lastName;
        } else {
            return lastName + firstName;
        }
      }
        console.log(ormatName("Kevin", "Cheng")); // Kevin Cheng
        console.log(ormatName("凱文", "鄭")); // 鄭凱文
        console.log(ormatName("凱文","")); // 凱文`}
        language="javascript"
        showLineNumbers={true}
        wrapLines={true}
        codeBlock={true}
      />
    </main>
  );
}
