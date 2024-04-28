import React from 'react'
import { useEffect } from "react";
import { createStore } from 'state-pool';
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Authorize from './api/Authorize.jsx'
import RegisterContrattoAPI from './api/RegisterContratto.jsx';
import './DettagliOfferta.css'

const store = createStore();
store.setState("currentPage", "Tipo Pagamento"); 
store.setState("utility", null); 

function RegisterOptions() {
  const [currentPage, setCurrentPage] = store.useState("currentPage");
  const [utility, setUtility] = store.useState("utility");

  return (
    <>
      <div className="wrapper">
        <form>
          <h1>Scelta Offerta</h1>
          <br></br>
            <div className="radio-group">
                <h2>Scegli il tipo di offerta:</h2>
                <button type="button" className="btn" onClick={() => {setUtility("EE"); setCurrentPage("Contratto")}}>Energia Elettrica</button>
                <button type="button" className="btn" onClick={() => {setUtility("GAS"); setCurrentPage("Contratto")}}>GAS</button>
                <button type="button" className="btn" onClick={() => {setUtility("EEandGAS"); setCurrentPage("Contratto")}}>EE e GAS</button>
            </div>
        </form>
      </div>
    </>
  )
}

function RegisterContratto() {
  const searchParams = new URLSearchParams(document.location.search)
  const [currentPage, setCurrentPage] = store.useState("currentPage");
  const [utility, setUtility] = store.useState("utility");

  return (
    <>
      <div className="wrapper" style={{ display: (currentPage == "Contratto") ? "block" : "none" }}>
        <form onSubmit={e => {e.preventDefault(); setCurrentPage("Sede")}}>
          <h1>Registrazione Contratto</h1>
          
          <div className="input-box">
            <input type="date" placeholder="Data Inizio" id="dataInizio" required/>
          </div>
          <div className="input-box">
            <input type="date" placeholder="Data Fine" id="dataFine" required/>
          </div>
          {(utility == "GAS") ? null : <>
            <div className="input-box" style={{ display: (utility != "GAS") ? "block" : "none" }}>
              <input inputMode="numeric" type="number" placeholder="Potenza Imp" id="potenzaImp" required/>
            </div>
            <div className="input-box" style={{ display: (utility != "GAS") ? "block" : "none" }}>
              <input inputMode="numeric" type="number" placeholder="Potenza Disp" id="potenzaDisp" required/>
            </div>
            <div className="input-box" style={{ display: (utility != "GAS") ? "block" : "none" }}>
              <input inputMode="numeric" type="number" placeholder="Energia Anno" id="energiaAnno" required/>
            </div>
          </>}
          {(utility == "EE") ? null : <>
            <div className="input-box">
              <input inputMode="numeric" type="number" placeholder="Gas Anno" id="gasAnno" required/>
            </div>
            <div className="checkBox">
              <label><input type="checkbox" id="usoCotturaCibi"/>Uso Cottura Cibi</label>
              <br/>
              <label><input type="checkbox" id="produzioneAcquaCalda"/>Produzione Acqua Calda</label>
              <br/>
              <label><input type="checkbox" id="riscaldamentoIndividuale"/>Riscaldamento Individuale</label>
              <br/>
              <label><input type="checkbox" id="usoCommerciale"/>Uso Commerciale</label>
            </div>
          </>}
          <button type="submit" className="btn">Registra Contratto</button>
          <br></br>
        </form>
      </div>
        
      <div className="wrapper" style={{ display: (currentPage == "Sede") ? "block" : "none" }}>
        <form onSubmit={e => {e.preventDefault(); setCurrentPage("Tipo Pagamento")}}>
          <h1>Registrazione Sede</h1>

          <div className="input-box">
            <input type="text" placeholder="Indirizzo" id="indirizzo" required/>
          </div>
          <div className="input-box">
            <input inputMode="numeric" type="number" placeholder="Numero Civico" id="numCivico" required/>
          </div>
          <div className="input-box">
            <input inputMode="numeric" type="number" placeholder="CAP" id="cap" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Localita" id="localita" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Provincia" id="provincia" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Nazione" id="nazione" required/>
          </div>

          <button type="submit" className="btn">Registra Sede</button>
          <br></br>
          <button type="button" className="btn" onClick={() => setCurrentPage("Contratto")}>Indietro</button>
        </form>
      </div>

      <div className="wrapper" style={{ display: (currentPage == "Tipo Pagamento") ? "block" : "none" }}>
        <form onSubmit={e => {e.preventDefault(); RegisterContrattoAPI(utility, searchParams.get('descrizione'));}}>
          <h1>Metodo di Pagamento</h1>

            <label className="labelPagamento">Scegli il tipo di Pagamento: </label>
            <br/>
            <select id="tipoPagamento" className ="tipoPagamento">
              <option style={{ display: "none" }} disabled selected value> Seleziona </option>
              <option className="opzionePagamento" value="Carta di credito">Carta di Credito</option>
              <option className="opzionePagamento" value="Bonifico">Bonifico</option>
              <option className="opzionePagamento" value="IBAN">IBAN</option>
              <option className="opzionePagamento" value="Bollettino">Bollettino</option>
            </select>

          <button type="submit" className="btn">Conferma metodo di Pagamento</button>
          <br></br>
          <button type="button" className="btn" onClick={() => setCurrentPage("Sede")}>Indietro</button>
        </form>
      </div>
    </>
  )
}

function PageContent() {
  const searchParams = new URLSearchParams(document.location.search)
  const [currentPage, setCurrentPage] = store.useState("currentPage")

  useEffect(() => {
    switch (searchParams.get('descrizione')) {
      case "Easy Energy":
        break;
      case "Family":
        break;
      case "Full Power":
        break;
      case "Super Power":
        break;
      default:
        window.location.href = "/offerte.html"
        break;
    }

    async function asyncFunction() {
      const authorizationResult = await Authorize()
      if (authorizationResult == null) {
        //window.location.href = "/login.html"
      }
    }
    asyncFunction()
  }, []);

  return (
    <>
      {(currentPage == "Options") ? <RegisterOptions/> : null}
      {(currentPage != "Options") ? <RegisterContratto/> : null}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <PageContent/>
  </React.StrictMode>
)
