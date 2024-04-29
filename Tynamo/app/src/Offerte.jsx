import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import './Offerte.css'

function PageContent() {
  return (
    <>
      <div className="riquadro1">
        <h1 className="riquadroTestoTitolo">Easy Energy</h1>
        <h3 className="riquadroElenco">• Tariffe semplici e trasparenti senza costi nascosti.</h3> <br />
        <h3 className="riquadroElenco">• Assistenza clienti dedicata per risolvere rapidamente qualsiasi problema.</h3>  <br />
        <h3 className="riquadroElenco">• Opzioni flessibili di pagamento per adattarsi alle tue esigenze finanziarie.</h3>
        <a className="sceltaOfferta" href="/dettagli-offerta.html?descrizione=Easy Energy"><p>Seleziona</p></a>
      </div>

      <div className="riquadro2">
        <h1 className="riquadroTestoTitolo">Family</h1>
        <h3 className="riquadroElenco">• Sconti speciali per le famiglie per risparmiare sui costi energetici.</h3> <br />
        <h3 className="riquadroElenco">• Consulenza energetica personalizzata per ottimizzare i consumi domestici.</h3>  <br />
        <h3 className="riquadroElenco">• Programmi di fidelizzazione con vantaggi esclusivi per i membri della famiglia.</h3>
      <a className="sceltaOfferta" href="/dettagli-offerta.html?descrizione=Family"><p>Seleziona</p></a>

      </div>
        <div className="riquadro3"><h1 className="riquadroTestoTitolo">Full Power</h1>
        <h3 className="riquadroElenco">• Energia garantita 100% proveniente da fonti rinnovabili.</h3> <br />
        <h3 className="riquadroElenco">• Monitoraggio avanzato dei consumi per massimizzare l'efficienza energetica.</h3>  <br />
        <h3 className="riquadroElenco">• Soluzioni tecnologiche all'avanguardia per ridurre l'impatto ambientale.</h3>
        <a className="sceltaOfferta" href="/dettagli-offerta.html?descrizione=Full Power"><p>Seleziona</p></a>
      </div>

      <div className="riquadro4"><h1 className="riquadroTestoTitolo">Super Power</h1>
        <h3 className="riquadroElenco">• Pacchetto completo con servizi premium e vantaggi esclusivi.</h3> <br />
        <h3 className="riquadroElenco">• Analisi approfondita dei flussi energetici dell'azienda per identificare opportunità di risparmio.</h3>  <br />
        <h3 className="riquadroElenco">• Accesso prioritario a programmi di incentivazione e incentivi governativi per l'energia sostenibile.</h3>
        <a className="sceltaOfferta" href="/dettagli-offerta.html?descrizione=Super Power"><p>Seleziona</p></a>
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
