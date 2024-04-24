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

function redirect(xhttp) {
  window.location.href = "index.html"
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
  xhttp.open("POST", "http://localhost:9091/api/auth/register", true)
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  xhttp.send(JSON.stringify(body))
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
        <form>
          <h1>Registrazione</h1>

          <div class="input-box">
            <input type="mail" placeholder="Email" id="privatoEmail"/>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" id="privatoPassword"/>
            <img src={isPasswordHidden ? showIcon : hideIcon} class="iconButton" id="privatoPasswordIcona"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Nome" id="privatoNome"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Cognome" id="privatoCognome"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Ragione Sociale" id="privatoRagSociale"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Codice fiscale" id="privatoCodiceFiscale"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Indirizzo" id="privatoIndirizzo"/>
          </div>

          <button type="button" class="btn" id="Avanti1" onClick={() => setIsPage1(isPage1 => false)}>Avanti</button>
          <div class="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html"> Accedi qui.</a></p>
          </div>
        </form>
      </div>

      <div class="wrapper" style={{ display: isPage1 ? "none" : "block" }}>
        <form id="FormPrivato2" >
          <h1>Registrazione</h1>

          <div class="input-box">
            <input type="number" placeholder="Numero Civico" id="privatoNumCivico"/>
          </div>
          <div class="input-box">
            <input type="number" placeholder="CAP" id="privatoCap" required/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Localita" id="privatoLocalita"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Provincia" id="privatoProvincia"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Nazione" id="privatoNazione"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Numero Telefonico" id="privatoNumTelefonico"/>
          </div>

          <button type="button" class="btn" onClick={() => inviaRichiestaPrivato()}>Registrati</button>
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
        <form id="FormPrivato1">
          <h1>Registrazione</h1>

          <div class="input-box">
            <input type="mail" placeholder="Email"/>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" id="aziendaPassword"/>
            <img src={isPasswordHidden ? showIcon : hideIcon} class="iconButton" id="aziendaPasswordIcona"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Partita IVA"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Ragione Sociale"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Indirizzo"/>
          </div>
          <div class="input-box">
            <input type="number" placeholder="Numero Civico"/>
          </div>

          <button type="button" class="btn" id="Avanti1" onClick={() => setIsPage1(isPage1 => false)}>Avanti</button>
          <div class="register-link">
            <p>Hai gia' un account Tynamo? <a href="../login.html"> Accedi qui.</a></p>
          </div>
        </form>
      </div>

      <div class="wrapper" style={{ display: isPage1 ? "none" : "block" }}>
        <form id="FormPrivato2">
          <h1>Registrazione</h1>
          
          <div class="input-box">
            <input type="number" placeholder="CAP"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Localita"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Provincia"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Nazione"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Numero Telefonico"/>
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
