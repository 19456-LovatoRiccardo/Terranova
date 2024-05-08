import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Authorize from './api/Authorize.jsx'
import RegisterContrattoAPI from './api/CreateContract.jsx';
import './Form.css'
import './CreazioneOfferta.css'

export default function CreazioneOfferta() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(document.location.search)
  const [currentPage, setCurrentPage] = useState("Options")
  const [utility, setUtility] = useState("");
  const [APIRequest, setAPIRequest] = useState({
    descrizioneOfferta: searchParams.get('descrizione'),
    dataInizioValidita: "",
    dataFineValidita: "",
    // EE
      potenzaImp: "",
      potenzaDisp: "",
      energiaAnno: "",
    // GAS
      gasAnno: "",
      usoCotturaCibi: false,
      produzioneAcquaCalda: false,
      riscaldamentoIndividuale: false,
      usoCommerciale: false,
    indirizzo: "",
    numCivico: "",
    cap: "",
    localita: "",
    provincia: "",
    nazione: "",
    tipoPagamento: ""
  });

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
        navigate('/offerte')
        break;
    }
    async function asyncFunction() {
      const authorizationResult = await Authorize()
      if (authorizationResult == null) {
        navigate('/login')
      }
    }
    asyncFunction()
  }, []);

  const submitRequest = async () => {
    const requestResult = await RegisterContrattoAPI(APIRequest, utility);
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
  
  const Contratto = () => {
    return (
      <>
        <div className="wrapper" style={{ display: (currentPage == "Contratto") ? "block" : "none" }}>
          <form onSubmit={e => {e.preventDefault(); setCurrentPage("Sede")}}>
            <h1>Registrazione Contratto</h1>
            
            <div className="input-box">
              <label>Data Inizio: </label>
              <input type="date" className="btnData" value={APIRequest.dataInizioValidita} onChange={(e) => handleChange(e, "dataInizioValidita")} required/>
            </div>
            <div className="input-box">
              <label>Data Fine: </label>
              <input type="date" className="btnData" value={APIRequest.dataFineValidita} onChange={(e) => handleChange(e, "dataFineValidita")} required/>
            </div>
  
            {(utility == "GAS") ? null : <>
              <div className="input-box" style={{ display: (utility != "GAS") ? "block" : "none" }}>
                <input inputMode="numeric" type="number" placeholder="Potenza Impiegata"
                  value={APIRequest.potenzaImp} onChange={(e) => handleChange(e, "potenzaImp")} required/>
              </div>
              <div className="input-box" style={{ display: (utility != "GAS") ? "block" : "none" }}>
                <input inputMode="numeric" type="number" placeholder="Potenza Disponibile"
                  value={APIRequest.potenzaDisp} onChange={(e) => handleChange(e, "potenzaDisp")} required/>
              </div>
              <div className="input-box" style={{ display: (utility != "GAS") ? "block" : "none" }}>
                <input inputMode="numeric" type="number" placeholder="Energia Anno"
                  value={APIRequest.energiaAnno} onChange={(e) => handleChange(e, "energiaAnno")} required/>
              </div>
            </>}
            {(utility == "EE") ? null : <>
              <div className="input-box">
                <input inputMode="numeric" type="number" placeholder="Gas Anno"
                  value={APIRequest.gasAnno} onChange={(e) => handleChange(e, "gasAnno")} required/>
              </div>
              <label><input type="checkbox"
                  value={APIRequest.usoCotturaCibi} onChange={(e) => handleChange(e, "usoCotturaCibi")}/>
                Uso Cottura Cibi
              </label>
              <br/>
              <label><input type="checkbox"
                  value={APIRequest.produzioneAcquaCalda} onChange={(e) => handleChange(e, "produzioneAcquaCalda")}/>
                Produzione Acqua Calda
              </label>
              <br/>
              <label><input type="checkbox"
                  value={APIRequest.riscaldamentoIndividuale} onChange={(e) => handleChange(e, "riscaldamentoIndividuale")}/>
                Riscaldamento Individuale
              </label>
              <br/>
              <label><input type="checkbox"
                  value={APIRequest.usoCommerciale} onChange={(e) => handleChange(e, "usoCommerciale")}/>
                Uso Commerciale
              </label>
            </>}
            <button type="submit" className="btn">Registra Contratto</button>
            <br></br>
          </form>
        </div>
      </>
    )
  };
  
  const Sede = () => {
    return (
      <>
        <div className="wrapper">
          <form onSubmit={e => {e.preventDefault(); setCurrentPage("Pagamento")}}>
            <h1>Registrazione Sede</h1>
  
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
  
            <button type="submit" className="btn">Registra Sede</button>
            <br></br>
            <button type="button" className="btn" onClick={() => setCurrentPage("Contratto")}>Indietro</button>
          </form>
        </div>
      </>
    )
  };
  
  const Pagamento = () => {
    return (
      <>
        <div className="wrapper" id="wrapperPagamento">
          <form onSubmit={e => {e.preventDefault(); submitRequest();}}>
            <h1>Metodo di Pagamento</h1>
  
              <label className="labelPagamento">Scegli il tipo di Pagamento: </label>
              <br/>
              <select className="tipoPagamento" value={APIRequest.tipoPagamento} onChange={(e) => handleChange(e, "tipoPagamento")} required>
                <option style={{ display: "none" }} value="">Seleziona</option>
                <option value="Carta di credito">Carta di Credito</option>
                <option value="Bonifico">Bonifico</option>
                <option value="IBAN">IBAN</option>
                <option value="Bollettino">Bollettino</option>
              </select>
  
            <button type="submit" className="btn">Conferma metodo di Pagamento</button>
            <br></br>
            <button type="button" className="btn" onClick={() => setCurrentPage("Sede")}>Indietro</button>
          </form>
        </div>
      </>
    )
  };

  return (
    <div className="page-CreazioneOfferta">
      <Helmet>
        <title>Tynamo - Creazione Offerta</title>
        <body className="body-Form"/>
      </Helmet>
      {(currentPage == "Options") ? Options() : null}
      {(currentPage == "Contratto") ? Contratto() : null}
      {(currentPage == "Sede") ? Sede() : null}
      {(currentPage == "Pagamento") ? Pagamento() : null}
    </div>
  )
}
