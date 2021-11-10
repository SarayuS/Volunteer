import React, {useState} from 'react';

function Login() {
    const [usrName, setUsrName] = useState(null);
    const [password, setPassword] = useState(null);

    return(
        <div> 
            <p> Please login to your profile </p> 
            <div> Username: <input type="text" placeholder="User name" 
                onChange={(e)=> setUsrName(e.target.value)}></input>
            </div>
            <div> Password: <input type="password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div> <button type="submit"> Submit </button> </div>
        </div>
    )

}

export default Login;