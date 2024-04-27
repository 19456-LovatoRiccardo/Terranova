import React from 'react'
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import NavbarAreaPersonale from './components/NavbarAreaPersonale.jsx'
import CookiePrompt from './components/CookiePrompt.jsx'
import GetInformazioniPersonali from './api/GetInformazioniPersonali.jsx';
import GetContratti from './api/GetContratti.jsx';
import './InformazioniPersonali.css'

function PageContent() {
  const [isPrivato, setIsPrivato] = useState(true);
  const [anagrafica, setAnagrafica] = useState({});
  const [contratti, setContratti] = useState(<></>);

  useEffect(() => {
    async function asyncFunction() {
      const authorizationResult = await GetInformazioniPersonali()
      setIsPrivato(!("partitaIVA" in authorizationResult));
      setAnagrafica(authorizationResult);
      const risultatoContratti = await GetContratti()
      setContratti(risultatoContratti);
    }
    asyncFunction()
  }, []);

  return (
    <>
      <div className="containerInformazioni">
        <i className='bx bx-fw bxs-user bx-md'/>
        <h1>Informazioni Personali</h1>
        <p style={{ display: isPrivato ? "block" : "none" }}>Nome: {anagrafica.nome}</p>
        <p style={{ display: isPrivato ? "block" : "none" }}>Cognome: {anagrafica.cognome}</p>
        <p style={{ display: isPrivato ? "none" : "block" }}>Ragione Sociale: {anagrafica.ragSociale}</p>
        <p style={{ display: isPrivato ? "none" : "block" }}>Partita IVA: {anagrafica.partitaIVA}</p>
        <p>Codice Fiscale: {anagrafica.codiceFiscale}</p>
        <p>Indirizzo: {anagrafica.indirizzo} n. {anagrafica.numCivico}, {anagrafica.cap} {anagrafica.localita} {anagrafica.provincia} </p>
        <p>Email: {anagrafica.email}</p>
        <p>Telefono: {anagrafica.numTelefonico}</p>
        <br/>
      </div>
      <div className="containerContratti">
        {contratti}
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarAreaPersonale/>
    <PageContent/>
    <CookiePrompt/>
  </React.StrictMode>,
)
