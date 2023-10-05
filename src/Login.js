import { useState } from "react";

export default function Login( {setUser} ) {
    //TODO: CSS text alignment to center on screen
    
    const [username, setUsername] = useState(""); //controlled input to track what is input by user

    function handleUsername (evt) { setUsername(evt.target.value) } //value is what's typed in box


    return (
        <form onSubmit={ (e) =>{ 
             e.preventDefault()
             setUser(username);
            }}>           
            <label htmlFor="login-username">Username: </label>
            <input 
             type="text" 
             name="login-username" 
             id="login-username" 
             value={username} 
             onChange={handleUsername} 
            /> <br />

            <label htmlFor="login-password">Password: </label>
            <input 
             type="password" 
             name="login-password" 
             id="login-password" 

             /> <br />

            <input 
             type="submit" 
             value="Login" 
             disabled={username.length === 0} //check state to set disabled/able
            />

        </form>
    )
}