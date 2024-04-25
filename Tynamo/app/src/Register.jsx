import React from 'react'
import { useState, useEffect } from "react";
import { createStore } from 'state-pool';
import ReactDOM from 'react-dom/client'
import showIcon from './assets/show-img.png'
import hideIcon from './assets/hide-img.png'
import Navbar from './components/Navbar.jsx'
import './Register.css'

const store = createStore();
store.setState("currentPage", "Options"); 

function RegisterOptions() {
  const [currentPage, setCurrentPage] = store.useState("currentPage");

  return (
    <>
      <div class="wrapper">
        <form>
          <h1>Registrazione</h1>
          <br></br>
            <div class="radio-group">
                <h2>Scegli il tipo di account:</h2>
                <br></br>
                <button type="button" class="btn" onClick={() => setCurrentPage(currentPage => "Privato")}>Privato</button>
                <br></br>
                <button type="button" class="btn" onClick={() => setCurrentPage(currentPage => "Azienda")}>Azienda</button>
                <br></br>
            </div>

          <div class="register-link">
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
      <div class="wrapper" style={{ display: isPage1 ? "block" : "none" }}>
        <form onSubmit={e => {e.preventDefault(); setIsPage1(isPage1 => false);}}>
          <h1>Registrazione Privato</h1>

          <div class="input-box">
            <input type="mail" placeholder="Email" id="privatoEmail" required/>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" id="privatoPassword" required/>
            <img src={isPasswordHidden ? showIcon : hideIcon} class="iconButton" id="privatoPasswordIcona"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Nome" id="privatoNome" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Cognome" id="privatoCognome" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Ragione Sociale" id="privatoRagSociale" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Codice fiscale" id="privatoCodiceFiscale" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Indirizzo" id="privatoIndirizzo" required/>
          </div>

          <button type="submit" class="btn" id="Avanti1">Avanti</button>
          <div class="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html"> Accedi qui.</a></p>
          </div>
        </form>
      </div>

      <div class="wrapper" style={{ display: isPage1 ? "none" : "block" }}>
        <form onSubmit={e => {e.preventDefault(); inviaRichiestaPrivato();}}>
          <h1>Registrazione Privato</h1>

          <div class="input-box">
            <input inputmode="numeric" type="number" placeholder="Numero Civico" id="privatoNumCivico" required/>
          </div>
          <div class="input-box">
            <input inputmode="numeric" type="number" placeholder="CAP" id="privatoCap" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Localita" id="privatoLocalita" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Provincia" id="privatoProvincia" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Nazione" id="privatoNazione" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Numero Telefonico" id="privatoNumTelefonico" required/>
          </div>

          <button type="submit" class="btn">Registrati</button>
          <br></br>
          <button type="button" class="btn" id="Indietro1" onClick={() => setIsPage1(isPage1 => true)}>Indietro</button>
          <div class="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html">Accedi qui.</a></p>
          </div>
        </form>
      </div>
    </>
  )
}

function inviaRichiestaPrivato() {
  let email = document.getElementById("privatoEmail").value
  let password = document.getElementById("privatoPassword").value
  let cognome = document.getElementById("privatoCognome").value
  let nome = document.getElementById("privatoNome").value
  let ragSociale = document.getElementById("privatoRagSociale").value
  let codiceFiscale = document.getElementById("privatoCodiceFiscale").value
  let indirizzo = document.getElementById("privatoIndirizzo").value
  let numCivico = document.getElementById("privatoNumCivico").value
  let cap = document.getElementById("privatoCap").value
  let localita = document.getElementById("privatoLocalita").value
  let provincia = document.getElementById("privatoProvincia").value
  let nazione = document.getElementById("privatoNazione").value
  let numTelefonico = document.getElementById("privatoNumTelefonico").value
  let body = {"email": email, "password": password, "cognome": cognome, "nome": nome,
              "ragSociale": ragSociale, "codiceFiscale": codiceFiscale, "indirizzo": indirizzo,
              "numCivico": numCivico, "cap": cap, "localita": localita, "provincia": provincia,
              "nazione": nazione, "numTelefonico": numTelefonico}

  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      redirect(this)
    }
  }
  xhttp.open("POST", "http://localhost:9091/api/auth/register/privato", true)
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  xhttp.send(JSON.stringify(body))
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
      <div class="wrapper" style={{ display: isPage1 ? "block" : "none" }}>
        <form onSubmit={e => {e.preventDefault(); setIsPage1(isPage1 => false);}}>
          <h1>Registrazione Azienda</h1>

          <div class="input-box">
            <input type="mail" placeholder="Email" id="aziendaEmail" required/>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" id="aziendaPassword" required/>
            <img src={isPasswordHidden ? showIcon : hideIcon} class="iconButton" id="aziendaPasswordIcona"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Partita IVA" id="aziendaPartitaIVA" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Ragione Sociale" id="aziendaRagSociale" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Codice fiscale" id="aziendaCodiceFiscale" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Indirizzo" id="aziendaIndirizzo" required/>
          </div>

          <button type="submit" class="btn" id="Avanti1">Avanti</button>
          <div class="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html"> Accedi qui.</a></p>
          </div>
        </form>
      </div>

      <div class="wrapper" style={{ display: isPage1 ? "none" : "block" }}>
        <form onSubmit={e => {e.preventDefault(); inviaRichiestaAzienda();}}>
          <h1>Registrazione Azienda</h1>
          
          <div class="input-box">
            <input inputmode="numeric" type="number" placeholder="Numero Civico" id="aziendaNumCivico" required/>
          </div>
          <div class="input-box">
            <input inputmode="numeric" type="number" placeholder="CAP" id="aziendaCap" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Localita" id="aziendaLocalita" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Provincia" id="aziendaProvincia" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Nazione" id="aziendaNazione" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Numero Telefonico" id="aziendaNumTelefonico" required/>
          </div>

          <button type="submit" class="btn">Avanti</button>
          <br></br>
          <button type="button" class="btn" id="Indietro1" onClick={() => setIsPage1(isPage1 => true)}>Indietro</button>
          <div class="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html"> Accedi qui.</a></p>
          </div>
        </form>
      </div>
    </>
  )
}

function inviaRichiestaAzienda() {
  let email = document.getElementById("aziendaEmail").value
  let password = document.getElementById("aziendaPassword").value
  let partitaIVA = document.getElementById("aziendaPartitaIVA").value
  let ragSociale = document.getElementById("aziendaRagSociale").value
  let codiceFiscale = document.getElementById("aziendaCodiceFiscale").value
  let indirizzo = document.getElementById("aziendaIndirizzo").value
  let numCivico = document.getElementById("aziendaNumCivico").value
  let cap = document.getElementById("aziendaCap").value
  let localita = document.getElementById("aziendaLocalita").value
  let provincia = document.getElementById("aziendaProvincia").value
  let nazione = document.getElementById("aziendaNazione").value
  let numTelefonico = document.getElementById("aziendaNumTelefonico").value
  let body = {"email": email, "password": password, "partitaIVA": partitaIVA,
              "ragSociale": ragSociale, "codiceFiscale": codiceFiscale, "indirizzo": indirizzo,
              "numCivico": numCivico, "cap": cap, "localita": localita, "provincia": provincia,
              "nazione": nazione, "numTelefonico": numTelefonico}

  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      redirect(this)
    }
  }
  xhttp.open("POST", "http://localhost:9091/api/auth/register/azienda", true)
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  xhttp.send(JSON.stringify(body))
}

function redirect(xhttp) {
  window.location.href = "index.html"
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
