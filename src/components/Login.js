import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Login() {

  const [path,setPath] = useState("/Manager");

  // let PathLoad="/";

  const Login = ()=>{

    const username = document.getElementById('username').value;
  const password = document.getElementById('pwd').value;
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    // let PathLoad="";
  if (storedUserData && username === storedUserData.username && password === storedUserData.password) {
    alert('Login successful! Redirecting...');
     // Change this to your desired destination
     setPath("/Manager")
  // PathLoad=isLogin === "true"?"/Manager":"/";
  } else {
    alert('Invalid username or password.');
    setPath("/")
  // PathLoad=isLogin === "true"?"/Manager":"/";
  }
};
  
  return (
    <div className='form-login'>
      <form><center>
        <h2>Login</h2>
        <label htmlFor="username">UserName: </label>
        <input type="text" id='username' className="task-input input" placeholder='enter your username'/><br /><br />
        <label htmlFor="pwd">Password: </label>
        <input type="password" id='pwd' className="task-input input" placeholder='enter your password'/><br /><br />

        <button type="submit" onClick={Login} className='btn-login'><Link to={path}>Login</Link></button><br /><br />

        <h3>Dont have account <Link to="/Signup">Click Here</Link></h3>
        </center></form>
    </div>
  )
}
