import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

let [path,setPath] = useState("/Signup");



const signup = ()=>{
    const password = document.getElementById('pwd1').value;
    const confirmPassword = document.getElementById('c-pwd').value;
    const username = document.getElementById('username').value;

    if (password === confirmPassword && username!== '') {
        // Save to local storage
        setPath("/")
        const userData = { username, password };
        localStorage.setItem('userData', JSON.stringify(userData));
        
      } else {
        setPath("/Signup");
      }
}

  return (
    <div className='form-login'>
      <form><center>
        <h2>SignUp</h2>
        <label htmlFor="username">UserName: </label>
        <input type="text" id='username' className="task-input input" placeholder='enter your username'/><br /><br />
        <label htmlFor="pwd">Password: </label>
        <input type="password" id='pwd1' className="task-input input" placeholder='enter your password'/><br /><br />
        <label htmlFor="c-pwd">Conform Password: </label>
        <input type="password" id='c-pwd' className="task-input input" placeholder='enter your password'/><br /><br />
        
        <button type="submit" onClick={signup}  className='btn-login'><Link to={path}>SignUp</Link></button><br /><br />
        </center></form>
    </div>
  )
}
