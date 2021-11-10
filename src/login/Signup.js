import React, {useState} from 'react';

function Signup() {
    const [usrName, setUsrName] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);

    return(
        <div> 
        <h1> Register/ Sign up </h1>
        <p> Username: <input type="text" placeholder="User name" onChange={(e)=> setUsrName(e.target.value)} /></p>
        <p> Email: <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} /></p> 
        <p> Password:  <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} /></p>
        <div> <button type="submit"> Register </button> </div>
        </div>
    )

}

export default Signup;