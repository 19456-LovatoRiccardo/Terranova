import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar';
import "./PageNotFound.css"

export default function PageNotFound() {
  return (
    <div className="page-NotFound">
      <Helmet>
        <title>Tynamo - 404</title>
        <body className="body-Default"/>
      </Helmet>

        <div className = { window.innerWidth > 865 ? "root-Desktop" : "root-Mobile" }>
            <Navbar/>
            <div className="riquadro">
              <h1>404</h1>
              <p>Pagina Non Trovata</p>
            </div>
        </div>
    </div>
  );
}
