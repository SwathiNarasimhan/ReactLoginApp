import React, { useState } from "react";

export const LoginComp = () => {

    const [email, updateEmail] = useState("");
    const [password, updatepassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "test@gmail.com" && password === "x"){
            alert("Login successful");
        } else {
            alert("Login Failed");
        }
    } 

    const onEmailChange = (e) => {
        updateEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        updatepassword(e.target.value);
    }

    return(
        <div className="loginContainer">
            <h3>Login</h3>
            <div className="loginwrap">
                <form onSubmit={handleSubmit}>
                <input onChange={onEmailChange} name="email" type="email" placeholder="Enter the Email Address"/><br/>
                <input onChange={onPasswordChange} name="password" type="password" placeholder="Password" /><br/>
                <input type="submit" value={"login"} />
                </form>
            </div>
        </div>
    );
}