import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar.jsx'
import LoginAPI from './api/Login.jsx'
import './Form.css'
import './Login.css'

export default function Login() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const navigate = useNavigate();

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

  const submitRequest = async () => {
    const requestResult = await LoginAPI();
    if (requestResult) {
      navigate('/area-personale/informazioni-personali')
    }
  };

  return (
    <div className="page-Login">
      <Helmet>
        <title>Tynamo - Login</title>
        <body className="body-Form"/>
      </Helmet>
      <Navbar/>

      <div className="wrapper">
        <form onSubmit={e => {e.preventDefault(); submitRequest();}}>
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
            <p>Non hai un contratto Tynamo? <Link to="/register">Registrati subito.</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
