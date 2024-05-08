import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import './Offerte.css'

export default function Offerte() {
  return (
    <div className="page-Offerte">
      <Helmet>
        <title>Tynamo - Offerte</title>
        <body className="body-Default"/>
      </Helmet>

      <div className="riquadro" id="r1">
        <h1>Easy Energy</h1>
        <ul>
          <li>Tariffe semplici e trasparenti senza costi nascosti.</li>
          <li>Assistenza clienti dedicata per risolvere rapidamente qualsiasi problema.</li>
          <li>Opzioni flessibili di pagamento per adattarsi alle tue esigenze finanziarie.</li>
        </ul>
        <Link to="/creazione-offerta?descrizione=Easy Energy">
          <div className="sceltaOfferta">
            Seleziona
          </div>
        </Link>
      </div>

      <div className="riquadro" id="r2">
        <h1>Family</h1>
        <ul>
          <li>Sconti speciali per le famiglie per risparmiare sui costi energetici.</li>
          <li>Consulenza energetica personalizzata per ottimizzare i consumi domestici.</li>
          <li>Programmi di fidelizzazione con vantaggi esclusivi per i membri della famiglia.</li>
        </ul>
        <Link to="/creazione-offerta?descrizione=Family">
          <div className="sceltaOfferta">
              Seleziona
          </div>
        </Link>
      </div>
      
      <div className="riquadro" id="r3">
        <h1>Full Power</h1>
        <ul>
          <li>Energia garantita 100% proveniente da fonti rinnovabili.</li>
          <li>Monitoraggio avanzato dei consumi per massimizzare l'efficienza energetica.</li>
          <li>Soluzioni tecnologiche all'avanguardia per ridurre l'impatto ambientale.</li>
        </ul>
        <Link to="/creazione-offerta?descrizione=Full Power">
          <div className="sceltaOfferta">
              Seleziona
          </div>
        </Link>
      </div>

      <div className="riquadro" id="r4">
        <h1>Super Power</h1>
        <ul>
          <li>Pacchetto completo con servizi premium e vantaggi esclusivi.</li>
          <li>Analisi approfondita dei flussi energetici dell'azienda per identificare opportunità di risparmio.</li>
          <li>Accesso prioritario a programmi di incentivazione e incentivi governativi per l'energia sostenibile.</li>
        </ul>
        <Link to="/creazione-offerta?descrizione=Super Power">
          <div className="sceltaOfferta">
              Seleziona
          </div>
        </Link>
      </div>
    </div>
  );
}
