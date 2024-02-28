import { useState } from 'react';
import './App.css';
 
// import logo from "./assests"

function App() {
  const [login,setlogin]=useState(true)

  const loginSwitch = () => {
    setlogin(!login)
  }
  return (
   <div id='Container'>
        <div id="user">
              <img src="data:image/png;base64,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" alt="" />
              <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />
              <input hidden={login} type="text" name="" placeholder='Full Name' id="" />
              <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
              <input type="text" name="" id="" placeholder='Password' />
              <button>{login?"Sign in":"Sign up"}</button>
          <div id='footer'>
            {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
          </div>
          </div>  
   </div>
  );
}

export default App;
