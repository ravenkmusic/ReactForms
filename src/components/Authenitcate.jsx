import React from "react";
import { useState } from "react";

export default function Authenticate({ token }){
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick(){
        try {
            
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