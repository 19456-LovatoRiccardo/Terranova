import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar.jsx'
import LoginAPI from './api/Login.jsx'
import './Form.css'
import './Login.css'

export default function Login() {
  const navigate = useNavigate();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [APIRequest, setAPIRequest] = useState({
    email: "",
    password: ""
  });

  const submitRequest = async () => {
    const requestResult = await LoginAPI(APIRequest);
    if (requestResult) {
      navigate('/area-personale/informazioni-personali')
    }
  };

  const handleChange = (e, key) => {
    setAPIRequest({...APIRequest, [key]: e.target.value})
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
              <input type="text" placeholder="Email" value={APIRequest.email} onChange={(e) => handleChange(e, "email")} required/>
            </div>
          <div className="input-box">
            <input type={isPasswordHidden ? "password" : "text"} placeholder="Password" className="password"
              value={APIRequest.password} onChange={(e) => handleChange(e, "password")} required/>
            <i className={isPasswordHidden ? "bx bx-fw bxs-show" : "bx bx-fw bxs-hide"}
              onClick={() => setIsPasswordHidden(isPasswordHidden => !isPasswordHidden)}/>
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
