import { useState } from "react";

export default function Register( {setUser} ) {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    
    function handleUsername (evt) {setUsername(evt.target.value)};
    function handlePassword (evt) {setPassword(evt.target.value)};
    function handlePasswordRepeat (evt) {setPasswordRepeat(evt.target.value)};

    return (
        <form onSubmit={ (e) => {
             e.preventDefault();
             setUser(username);
            }}>

            <label htmlFor="register-username">Username: </label>
            <input 
             type="text" 
             name="register-username" 
             id="register-username" 
             value={username}
             onChange={handleUsername}
            /> <br />

            <label htmlFor="register-password">Password: </label>
            <input 
             type="password" 
             name="register-password" 
             id="register-password" 
             value={password}
             onChange={handlePassword}
            /> <br />

            <label htmlFor="register-password-repeat">Repeat password: </label>
            <input 
             type="password" 
             name="register-password-repeat" 
             id="register-password-repeat" 
             value={passwordRepeat}
             onChange={handlePasswordRepeat}
            /> <br />

            <input 
             type="submit" 
             value="Register" 
             disabled= {
                username.legnth === 0 ||
                password.length === 0 ||
                password !== passwordRepeat 
             }
            />
        </form>
    )
}
