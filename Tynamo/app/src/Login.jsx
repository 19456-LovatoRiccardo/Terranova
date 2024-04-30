import React from 'react'
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Login from './api/Login.jsx'
import './Form.css'
import './Login.css'

function PageContent() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  useEffect(() => {
    let occhioIconaPassword = document.getElementById("occhioIconaPassword");
    let password = document.getElementById("password");
    occhioIconaPassword.onclick = function() {
      if (password.type == "password") {
          password.type = "text";
          setIsPasswordHidden(false);
      } else {
          password.type = "password";
          setIsPasswordHidden(true);
      }
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <form onSubmit={e => {e.preventDefault(); Login();}}>
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Email" id="email" required/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" id="password" required/>
            <i className={isPasswordHidden ? "bx bx-fw bxs-show" : "bx bx-fw bxs-hide"} id="occhioIconaPassword"/>
          </div>
          { /*
            <div className="remember-forgot">
              <label><input type="checkbox"/>Ricordami</label>
              <a href="resetPw.html">Password dimenticata ?</a>
            </div>
          */}
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Non hai un contratto Tynamo? <a href="./register.html"> Registrati subito.</a></p>
          </div>
        </form>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <PageContent/>
  </React.StrictMode>,
)
