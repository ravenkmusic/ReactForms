import React from "react";
import { useState } from "react";

export default function SignUpForm(){
    const [ username, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null);

    return <div>
        <h2>Sign Up!</h2>
            <form>
                <label>
                    Username: <input />
                </label>
                <label>
                    Password: <input />Password
                </label>
                <button>Submit</button>
            </form>
    </div>
}