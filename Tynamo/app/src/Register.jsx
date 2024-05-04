import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar.jsx'
import RegisterAPI from './api/Register.jsx'
import './Form.css'
import './Register.css'

export default function Register() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Options");
  const [accountType, setAccountType] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [APIRequest, setAPIRequest] = useState({
    email: "",
    password: "",
    ragSociale: "",
    codiceFiscale: "",
    numTelefonico: "",
    indirizzo: "",
    numCivico: "",
    cap: "",
    localita: "",
    provincia: "",
    nazione: "",
    cognome: "",
    nome: "",
    partitaIVA: ""
  });
  
  const submitRequest = async () => {
    const requestResult = await RegisterAPI(APIRequest, accountType);
    if (requestResult) {
      navigate('/area-personale/informazioni-personali')
    }
  };

  const handleChange = (e, key) => {
    setAPIRequest({...APIRequest, [key]: e.target.value})
  };

  const Options = () => {
    return (
      <>
        <div className="wrapper">
          <form>
            <h1>Registrazione</h1>
            <br></br>
              <div>
                  <h2>Scegli il tipo di account:</h2>
                  <button type="button" onClick={() => {setAccountType("Privato"); setCurrentPage("Account")}}>Privato</button>
                  <button type="button" onClick={() => {setAccountType("Azienda"); setCurrentPage("Account")}}>Azienda</button>
              </div>
            <div className="login-link">
              <p>Hai gia' un account Tynamo? <Link to="/login">Accedi qui.</Link></p>
            </div>
          </form>
        </div>
      </>
    )
  };

  const Privato = () => {
    return (
      <>
        <div className="wrapper">
          <form onSubmit={e => {e.preventDefault(); setCurrentPage("Indirizzo")}}>
            <h1>Registrazione Privato</h1>
  
            <div className="input-box">
              <input type="text" placeholder="Email" value={APIRequest.email} onChange={(e) => handleChange(e, "email")} required/>
            </div>
            <div className="input-box">
              <input type={isPasswordHidden ? "password" : "text"} placeholder="Password" className="password"
                value={APIRequest.password} onChange={(e) => handleChange(e, "password")} required/>
              <i className={isPasswordHidden ? "bx bx-fw bxs-show" : "bx bx-fw bxs-hide"}
                onClick={() => setIsPasswordHidden(isPasswordHidden => !isPasswordHidden)}/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Nome" value={APIRequest.nome} onChange={(e) => handleChange(e, "nome")}required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Cognome" value={APIRequest.cognome} onChange={(e) => handleChange(e, "cognome")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Ragione Sociale" value={APIRequest.ragSociale} onChange={(e) => handleChange(e, "ragSociale")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Codice fiscale" value={APIRequest.codiceFiscale} onChange={(e) => handleChange(e, "codiceFiscale")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Numero Telefonico" value={APIRequest.numTelefonico} onChange={(e) => handleChange(e, "numTelefonico")} required/>
            </div>
  
            <button type="submit">Avanti</button>
            <div className="login-link">
              <p>Hai gia' un account Tynamo? <Link to="/login">Accedi qui.</Link></p>
            </div>
          </form>
        </div>
      </>
    )
  };

  const Azienda = () => {
    return (
      <>
        <div className="wrapper">
          <form onSubmit={e => {e.preventDefault(); setCurrentPage("Indirizzo");}}>
            <h1>Registrazione Azienda</h1>

            <div className="input-box">
              <input type="text" placeholder="Email" value={APIRequest.email} onChange={(e) => handleChange(e, "email")} required/>
            </div>
            <div className="input-box">
              <input type={isPasswordHidden ? "password" : "text"} placeholder="Password" className="password"
                value={APIRequest.password} onChange={(e) => handleChange(e, "password")} required/>
              <i className={isPasswordHidden ? "bx bx-fw bxs-show" : "bx bx-fw bxs-hide"}
                onClick={() => setIsPasswordHidden(isPasswordHidden => !isPasswordHidden)}/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Partita IVA" value={APIRequest.partitaIVA} onChange={(e) => handleChange(e, "partitaIVA")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Ragione Sociale" value={APIRequest.ragSociale} onChange={(e) => handleChange(e, "ragSociale")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Codice fiscale" value={APIRequest.codiceFiscale} onChange={(e) => handleChange(e, "codiceFiscale")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Numero Telefonico" value={APIRequest.numTelefonico} onChange={(e) => handleChange(e, "numTelefonico")} required/>
            </div>

            <button type="submit">Avanti</button>
            <div className="login-link">
              <p>Hai gia' un account Tynamo? <Link to="/login">Accedi qui.</Link></p>
            </div>
          </form>
        </div>
      </>
    )
  };

  const Indirizzo = () => {
    return (
      <>
        <div className="wrapper">
          <form onSubmit={e => {e.preventDefault(); submitRequest();}}>
            <h1>Registrazione Indirizzo</h1>
            
            <div className="input-box">
              <input type="text" placeholder="Indirizzo" value={APIRequest.indirizzo} onChange={(e) => handleChange(e, "indirizzo")} required/>
            </div>
            <div className="input-box">
              <input inputMode="numeric" type="number" placeholder="Numero Civico" value={APIRequest.numCivico} onChange={(e) => handleChange(e, "numCivico")} required/>
            </div>
            <div className="input-box">
              <input inputMode="numeric" type="number" placeholder="CAP" value={APIRequest.cap} onChange={(e) => handleChange(e, "cap")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Localita" value={APIRequest.localita} onChange={(e) => handleChange(e, "localita")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Provincia" value={APIRequest.provincia} onChange={(e) => handleChange(e, "provincia")} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Nazione" value={APIRequest.nazione} onChange={(e) => handleChange(e, "nazione")} required/>
            </div>

            <button type="submit">Registrati come {accountType}</button>
            <br></br>
            <button type="button" onClick={() => setCurrentPage("Account")}>Indietro</button>
            <div className="login-link">
              <p>Hai gia' un account Tynamo? <Link to="/login">Accedi qui.</Link></p>
            </div>
          </form>
        </div>
      </>
    )
  };

  return (
    <div className="page-Register">
      <Helmet>
        <title>Tynamo - Register</title>
        <body className="page-Register"/>
      </Helmet>
      <Navbar/>
      {(currentPage == "Options")   ? Options() : null}
      {(currentPage == "Account")   ?
        (accountType == "Privato")  ? Privato() : Azienda()
        : null}
      {(currentPage == "Indirizzo") ? Indirizzo() : null}
    </div>
  )
}
