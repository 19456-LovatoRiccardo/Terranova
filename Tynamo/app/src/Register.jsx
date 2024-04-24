import React from 'react'
import { useState } from "react";
import { createStore } from 'state-pool';
import ReactDOM from 'react-dom/client'
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

  return (
    <>
      <div class="wrapper" style={{ display: isPage1 ? "block" : "none" }}>
        <form>
          <h1>Registrazione</h1>

          <div class="input-box">
            <input type="text" placeholder="Nome"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Cognome"/>
          </div>
          <div class="input-box">
            <input type="mail" placeholder="Email"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Ragione Sociale"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Codice fiscale"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Indirizzo"/>
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
            <input type="text" placeholder="Numero Civico"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="CAP"/>
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
            <p>Hai gia' un account Tynamo? <a href="../login.html">Accedi qui.</a></p>
          </div>
        </form>
      </div>
    </>
  )
}

function RegisterAzienda() {
  const [isPage1, setIsPage1] = useState(true);

  return (
    <>
      <div class="wrapper" style={{ display: isPage1 ? "block" : "none" }}>
        <form id="FormPrivato1">
          <h1>Registrazione</h1>

          <div class="input-box">
            <input type="text" placeholder="Partita IVA"/>
          </div>
          <div class="input-box">
            <input type="mail" placeholder="Email"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Ragione Sociale"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Indirizzo"/>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Numero Civico"/>
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
            <input type="text" placeholder="CAP"/>
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
