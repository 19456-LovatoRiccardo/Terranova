import React from 'react'
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import showIcon from './assets/show-img.png'
import hideIcon from './assets/hide-img.png'
import Navbar from './components/Navbar.jsx'
import CookiePrompt from './components/CookiePrompt.jsx'
import './Login.css'

function inviaRichiesta() {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      authenticate(this)
    }
  }
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  xhttp.open("POST", "http://localhost:9091/api/auth/authenticate", true)
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({"email": email.value, "password": password.value}));
}
function authenticate(xhttp) {
  window.location.href = "index.html"
}

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
      <div class="wrapper">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Mail" id="email" required/>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" id="password" required/>
          <img src={isPasswordHidden ? showIcon : hideIcon} id="occhioIconaPassword"/>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"/>Ricordami</label>
          <a href="resetPw.html">Password dimenticata ?</a>
        </div>
        
        <button type="submit" class="btn" onClick={() => inviaRichiesta()}>Login</button>
        <div class="register-link">
          <p>Non hai un contratto Tynamo? <a href="./register.html"> Registrati subito.</a></p>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <PageContent/>
    <CookiePrompt/>
  </React.StrictMode>,
)
