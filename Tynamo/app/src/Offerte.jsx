import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import './Offerte.css'

function PageContent() {
  return (
    <>
      <div className="riquadro" id="r1">
        <h1>Easy Energy</h1>
        <ul>
          <li>Tariffe semplici e trasparenti senza costi nascosti.</li>
          <li>Assistenza clienti dedicata per risolvere rapidamente qualsiasi problema.</li>
          <li>Opzioni flessibili di pagamento per adattarsi alle tue esigenze finanziarie.</li>
        </ul>
        <a href="/dettagli-offerta.html?descrizione=Easy Energy">
          <div className="sceltaOfferta">
            Seleziona
          </div>
        </a>
      </div>

      <div className="riquadro" id="r2">
        <h1>Family</h1>
        <ul>
          <li>Sconti speciali per le famiglie per risparmiare sui costi energetici.</li>
          <li>Consulenza energetica personalizzata per ottimizzare i consumi domestici.</li>
          <li>Programmi di fidelizzazione con vantaggi esclusivi per i membri della famiglia.</li>
        </ul>
        <a href="/dettagli-offerta.html?descrizione=Family">
          <div className="sceltaOfferta">
              Seleziona
          </div>
        </a>
      </div>
      
      <div className="riquadro" id="r3">
        <h1>Full Power</h1>
        <ul>
          <li>Energia garantita 100% proveniente da fonti rinnovabili.</li>
          <li>Monitoraggio avanzato dei consumi per massimizzare l'efficienza energetica.</li>
          <li>Soluzioni tecnologiche all'avanguardia per ridurre l'impatto ambientale.</li>
        </ul>
        <a href="/dettagli-offerta.html?descrizione=Full Power">
          <div className="sceltaOfferta">
              Seleziona
          </div>
        </a>
      </div>

      <div className="riquadro" id="r4">
        <h1>Super Power</h1>
        <ul>
          <li>Pacchetto completo con servizi premium e vantaggi esclusivi.</li>
          <li>Analisi approfondita dei flussi energetici dell'azienda per identificare opportunità di risparmio.</li>
          <li>Accesso prioritario a programmi di incentivazione e incentivi governativi per l'energia sostenibile.</li>
        </ul>
        <a href="/dettagli-offerta.html?descrizione=Super Power">
          <div className="sceltaOfferta">
              Seleziona
          </div>
        </a>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <PageContent/>
  </React.StrictMode>,
)
