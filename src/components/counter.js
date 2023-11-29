"use client";
import React,{useState} from "react";


export default function Counter (){

    const [count, setCount]= useState(0)
    const minusbtn = ()=>{
        setCount(count-1)
    }
    const plusbtn = ()=>{
        setCount(count+1)
    }

    return (
    <div>
        <h4>count: <span>{count}</span></h4>
        <button onClick={minusbtn}>-</button>
        <button onClick={plusbtn}>+</button>
    </div>
    )
}