import React from "react";
import { useState } from "react";

export default function SignUpForm({ setToken }){
    const [ username, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null);
    const API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`;

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}`, {
                method: "POST",
                body: JSON.stringify({ username }, { password }),
            });
            const result = await response.json();
            console.log(result);
            setToken(result.token);
        } catch (error) {
            console.error(setError(error.message));
        }
    }

    return (
        <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: {" "}
                    <input
                        value={username}
                        autoComplete="username"
                        onChange={(event) => 
                        setUserName(event.target.value)} />
                </label> 
                <label>
                    Password: {" "}
                    <input 
                        type="password"
                        value ={password}
                        autoComplete="password"
                        onChange={(event) =>
                        setPassword(event.target.value)} />
                </label>
                <button>
                    Submit
                </button>
            </form>
        </>
        );
}