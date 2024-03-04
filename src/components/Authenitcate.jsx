import React from "react";
import { useState } from "react";

export default function Authenticate({ token }){
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const authenticationAPIURL = `https://fsa-jwt-practice.herokuapp.com/authenticate`;

    async function handleClick(){
        try {
            const response = await fetch(`${authenticationAPIURL}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const result = response.json();
            console.log(result);
        } catch (error) {
            setError(error.message);
        }
        console.log("Clicked!");
    }
    return( 
        <div>
            <h2>Authenticate!</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>
                Authenticate Token!
            </button>
        </div>
    );
}