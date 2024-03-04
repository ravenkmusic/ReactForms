import React from "react";

export default function Authenticate({ token }){
    async function handleClick(){
        console.log("Clicked!");
    }
    return <>
        <h2>Authenticate!</h2>
        <button onClick={handleClick}>
            Authenticate Token
        </button>
    </>
}