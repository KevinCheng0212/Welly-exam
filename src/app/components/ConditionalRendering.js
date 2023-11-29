import React from "react";

export default function ConditionalRendering({isLoggedIn}){
    return (
        isLoggedIn?  <p>已登入</p> : <p>請登入</p>
    )
}