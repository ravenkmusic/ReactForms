import React from "react";
import { useState } from "react";

export default function SignUpForm(){
    const [ username, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null);

    async function handleSubmit(event){
        event.preventDefault();
        console.log("Submitted!");
    }

    return <div>
        <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input 
                    value={username} 
                    onChange={(event) => 
                    setUserName(event.target.value)} />
                </label> 
                <label>
                    Password: <input 
                    value ={password}
                    onChange={(event) =>
                    setPassword(event.target.value)} />
                </label>
                <button>Submit</button>
            </form>
    </div>
}