import React from 'react'
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NavbarAreaPersonale from './components/NavbarAreaPersonale.jsx'
import GetInformazioniPersonali from './api/GetInformazioniPersonali.jsx';
import GetContratti from './api/GetContratti.jsx';
import './InformazioniPersonali.css'

export default function InformazioniPersonali() {
  const [isPrivato, setIsPrivato] = useState(true);
  const [anagrafica, setAnagrafica] = useState({});
  const [contratti, setContratti] = useState(false);

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
    <div className="page-InformazioniPersonali">
      <Helmet>
        <title>Tynamo - Informazioni Personali</title>
        <body className="page-InformazioniPersonali"/>
      </Helmet>
      <NavbarAreaPersonale/>

      <div className="containerInformazioni">
        <div className="header">
          <i className='bx bx-fw bxs-user bx-md'/>
          <h1>Informazioni Personali</h1>
        </div>
        <p style={{ display: isPrivato ? "block" : "none" }}>Nome: {anagrafica.nome}</p>
        <p style={{ display: isPrivato ? "block" : "none" }}>Cognome: {anagrafica.cognome}</p>
        <p style={{ display: isPrivato ? "none" : "block" }}>Ragione Sociale: {anagrafica.ragSociale}</p>
        <p style={{ display: isPrivato ? "none" : "block" }}>Partita IVA: {anagrafica.partitaIVA}</p>
        <p>Codice Fiscale: {anagrafica.codiceFiscale}</p>
        <p>Indirizzo: {anagrafica.indirizzo} n. {anagrafica.numCivico}, {anagrafica.cap} {anagrafica.localita} ({anagrafica.provincia})</p>
        <p>Email: {anagrafica.email}</p>
        <p>Telefono: {anagrafica.numTelefonico}</p>
        <br/>
      </div>
      <div className="containerContratti">
        <div className="header">
          <i className='bx bx-fw bxs-notepad bx-md'></i>
          <h1>Contratti</h1>
        </div>
        <table style={{display: (!contratti) ? "none" : "block"}}>
          <thead><tr>
            <th>Tipo</th>
            <th>Offerta</th>
            <th>Stato</th>
            <th>Data Inizio</th>
            <th>Data Fine</th>
            <th>Tipo Pagamento</th>
            <th>Energia Anno</th>
            <th>Gas Anno</th>
          </tr></thead>
          <tbody>
            {contratti}
          </tbody>
        </table> 
      </div>
    </div>
  );
}
