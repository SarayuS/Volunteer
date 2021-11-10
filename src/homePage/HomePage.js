import React, {useState} from 'react';
import Login from '../login/Login';

function HomePage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [heading, setHeading] = useState("Welcome to home");

    return(
        <div> 
            <h1> {heading} </h1>
            <p> Thank you for creating a wonderful impact on the lives of people and showing humanity and 
            kindness .</p>
            <Login></Login>
        </div>
    );
}

export default HomePage;