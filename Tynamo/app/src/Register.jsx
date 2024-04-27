import React from 'react'
import { useState, useEffect } from "react";
import { createStore } from 'state-pool';
import ReactDOM from 'react-dom/client'
import showIcon from './assets/show-img.png'
import hideIcon from './assets/hide-img.png'
import Navbar from './components/Navbar.jsx'
import RegisterPrivatoAPI from './api/RegisterPrivato.jsx'
import RegisterAziendaAPI from './api/RegisterAzienda.jsx'
import './Register.css'

const store = createStore();
store.setState("currentPage", "Options"); 

function RegisterOptions() {
  const [currentPage, setCurrentPage] = store.useState("currentPage");

  return (
    <>
      <div className="wrapper">
        <form>
          <h1>Registrazione</h1>
          <br></br>
            <div className="radio-group">
                <h2>Scegli il tipo di account:</h2>
                <button type="button" className="btn" onClick={() => setCurrentPage(currentPage => "Privato")}>Privato</button>
                <button type="button" className="btn" onClick={() => setCurrentPage(currentPage => "Azienda")}>Azienda</button>
            </div>

          <div className="register-link">
            <p>Hai gia' un account Tynamo? <a href="#"> Accedi qui.</a></p>
          </div>
        </form>
      </div>
    </>
  )
}

function RegisterPrivato() {
  const [isPage1, setIsPage1] = useState(true);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  useEffect(() => {
    let icona = document.getElementById("privatoPasswordIcona");
    let password = document.getElementById("privatoPassword");
    icona.onclick = function() {
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
      <div className="wrapper" style={{ display: isPage1 ? "block" : "none" }}>
        <form onSubmit={e => {e.preventDefault(); setIsPage1(isPage1 => false);}}>
          <h1>Registrazione Privato</h1>

          <div className="input-box">
            <input type="mail" placeholder="Email" id="privatoEmail" required/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" id="privatoPassword" required/>
            <img src={isPasswordHidden ? showIcon : hideIcon} className="iconButton" id="privatoPasswordIcona"/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Nome" id="privatoNome" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Cognome" id="privatoCognome" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Ragione Sociale" id="privatoRagSociale" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Codice fiscale" id="privatoCodiceFiscale" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Indirizzo" id="privatoIndirizzo" required/>
          </div>

          <button type="submit" className="btn" id="Avanti1">Avanti</button>
          <div className="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html"> Accedi qui.</a></p>
          </div>
        </form>
      </div>

      <div className="wrapper" style={{ display: isPage1 ? "none" : "block" }}>
        <form onSubmit={e => {e.preventDefault(); RegisterPrivatoAPI();}}>
          <h1>Registrazione Privato</h1>

          <div className="input-box">
            <input inputMode="numeric" type="number" placeholder="Numero Civico" id="privatoNumCivico" required/>
          </div>
          <div className="input-box">
            <input inputMode="numeric" type="number" placeholder="CAP" id="privatoCap" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Localita" id="privatoLocalita" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Provincia" id="privatoProvincia" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Nazione" id="privatoNazione" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Numero Telefonico" id="privatoNumTelefonico" required/>
          </div>

          <button type="submit" className="btn">Registrati come Privato</button>
          <br></br>
          <button type="button" className="btn" id="Indietro1" onClick={() => setIsPage1(isPage1 => true)}>Indietro</button>
          <div className="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html">Accedi qui.</a></p>
          </div>
        </form>
      </div>
    </>
  )
}

function RegisterAzienda() {
  const [isPage1, setIsPage1] = useState(true);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  useEffect(() => {
    let icona = document.getElementById("aziendaPasswordIcona");
    let password = document.getElementById("aziendaPassword");
    icona.onclick = function() {
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
      <div className="wrapper" style={{ display: isPage1 ? "block" : "none" }}>
        <form onSubmit={e => {e.preventDefault(); setIsPage1(isPage1 => false);}}>
          <h1>Registrazione Azienda</h1>

          <div className="input-box">
            <input type="mail" placeholder="Email" id="aziendaEmail" required/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" id="aziendaPassword" required/>
            <img src={isPasswordHidden ? showIcon : hideIcon} className="iconButton" id="aziendaPasswordIcona"/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Partita IVA" id="aziendaPartitaIVA" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Ragione Sociale" id="aziendaRagSociale" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Codice fiscale" id="aziendaCodiceFiscale" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Indirizzo" id="aziendaIndirizzo" required/>
          </div>

          <button type="submit" className="btn" id="Avanti1">Avanti</button>
          <div className="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html"> Accedi qui.</a></p>
          </div>
        </form>
      </div>

      <div className="wrapper" style={{ display: isPage1 ? "none" : "block" }}>
        <form onSubmit={e => {e.preventDefault(); RegisterAziendaAPI();}}>
          <h1>Registrazione Azienda</h1>
          
          <div className="input-box">
            <input inputMode="numeric" type="number" placeholder="Numero Civico" id="aziendaNumCivico" required/>
          </div>
          <div className="input-box">
            <input inputMode="numeric" type="number" placeholder="CAP" id="aziendaCap" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Localita" id="aziendaLocalita" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Provincia" id="aziendaProvincia" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Nazione" id="aziendaNazione" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Numero Telefonico" id="aziendaNumTelefonico" required/>
          </div>

          <button type="submit" className="btn">Registrati come Azienda</button>
          <br></br>
          <button type="button" className="btn" id="Indietro1" onClick={() => setIsPage1(isPage1 => true)}>Indietro</button>
          <div className="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html"> Accedi qui.</a></p>
          </div>
        </form>
      </div>
    </>
  )
}

function PageContent() {
  const [currentPage, setCurrentPage] = store.useState("currentPage");

  return (
    <>
      {(currentPage == "Options") ? <RegisterOptions/> : null}
      {(currentPage == "Privato") ? <RegisterPrivato/> : null}
      {(currentPage == "Azienda") ? <RegisterAzienda/> : null}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <PageContent/>
  </React.StrictMode>
)
