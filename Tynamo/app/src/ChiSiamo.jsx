import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import CookiePrompt from './components/CookiePrompt.jsx'
import './ChiSiamo.css'

function PageContent() {
  return (
    <>
    <div className="riquadro1">
      <h1 className="riquadroTestoTitolo">Chi Siamo</h1>
      <h3 className="riquadroTesto">Benvenuti in Tynamo, un'azienda dedicata a fornire soluzioni energetiche sostenibili per le comunità di oggi e di domani. Fondata con la visione di 
                                creare un futuro energetico più pulito e più accessibile per tutti, ci impegniamo a guidare il settore verso una transizione ecologica.</h3>
    </div>


    <div className="riquadro3"><h1 className="riquadroTestoTitolo">La nostra missione</h1>
      <h3 className="riquadroTesto">La nostra missione è di fornire energia affidabile, efficiente e sostenibile per soddisfare le esigenze dei nostri clienti, preservando al contempo 
                                il nostro pianeta per le generazioni future. Ci impegniamo a offrire servizi energetici innovativi 
                                che migliorino la qualità della vita, riducano l'impatto ambientale e promuovano la responsabilità sociale e ambientale.</h3>
    </div>
    <div className="riquadro2">
    <h1 className="riquadroTestoTitolo">Trasparenza</h1>
      <h3 className="riquadroTesto">La trasparenza e l'integrità sono i pilastri su cui si basa il nostro operato. Ci impegniamo a operare in modo etico, responsabile 
                                e trasparente in tutte le nostre attività, rispettando sempre gli standard più elevati di comportamento aziendale.</h3>

    </div>
    <div className="riquadro3"><h1 className="riquadroTestoTitolo">La nostra missione</h1>
      <h3 className="riquadroTesto">La nostra missione è di fornire energia affidabile, efficiente e sostenibile per soddisfare le esigenze dei nostri clienti, preservando al contempo 
                                il nostro pianeta per le generazioni future. Ci impegniamo a offrire servizi energetici innovativi 
                                che migliorino la qualità della vita, riducano l'impatto ambientale e promuovano la responsabilità sociale e ambientale.</h3>
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
