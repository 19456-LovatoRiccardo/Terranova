import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import CookiePrompt from './components/CookiePrompt.jsx'
import './Offerte.css'
function PageContent() {
  const a = "HEY";
  return (
    <>
    <div class="riquadro1">
      <h1 class="riquadroTestoTitolo">Easy Energy</h1>
      <h3 class="riquadroElenco1">• Tariffe semplici e trasparenti senza costi nascosti.</h3> <br />
      <h3 class="riquadroElenco2">• Assistenza clienti dedicata per risolvere rapidamente qualsiasi problema.</h3>  <br />
      <h3 class="riquadroElenco3">• Opzioni flessibili di pagamento per adattarsi alle tue esigenze finanziarie.</h3>
      <a class="sceltaOfferta" href="/dettagli-offerta.html?descrizione=Easy Energy"><p>Seleziona</p></a>
    </div>

    <div class="riquadro2">
    <h1 class="riquadroTestoTitolo">Family</h1>
    <h3 class="riquadroElenco1">• Sconti speciali per le famiglie per risparmiare sui costi energetici.</h3> <br />
    <h3 class="riquadroElenco2">• Consulenza energetica personalizzata per ottimizzare i consumi domestici.</h3>  <br />
    <h3 class="riquadroElenco3">• Programmi di fidelizzazione con vantaggi esclusivi per i membri della famiglia.</h3>
    <a class="sceltaOfferta" href="/dettagli-offerta.html?descrizione=Family"><p>Seleziona</p></a>

    </div>
    <div class="riquadro3"><h1 class="riquadroTestoTitolo">Full Power</h1>
    <h3 class="riquadroElenco1">• Energia garantita 100% proveniente da fonti rinnovabili.</h3> <br />
    <h3 class="riquadroElenco2">• Monitoraggio avanzato dei consumi per massimizzare l'efficienza energetica.</h3>  <br />
    <h3 class="riquadroElenco3">• Soluzioni tecnologiche all'avanguardia per ridurre l'impatto ambientale.</h3>
    <a class="sceltaOfferta" href="/dettagli-offerta.html?descrizione=Full Power"><p>Seleziona</p></a>
    </div>

    <div class="riquadro4"><h1 class="riquadroTestoTitolo">Super Power</h1>
    <h3 class="riquadroElenco1">• Pacchetto completo con servizi premium e vantaggi esclusivi.</h3> <br />
    <h3 class="riquadroElenco2">• Analisi approfondita dei flussi energetici dell'azienda per identificare opportunità di risparmio.</h3>  <br />
    <h3 class="riquadroElenco3">• Accesso prioritario a programmi di incentivazione e incentivi governativi per l'energia sostenibile.</h3>
    <a class="sceltaOfferta" href="/dettagli-offerta.html?descrizione=Super Power"><p>Seleziona</p></a>
    </div>


      
      
      


      
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <PageContent/>
    <CookiePrompt/>
  </React.StrictMode>,
)
