import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar.jsx'
import './ChiSiamo.css'

export default function ChiSiamo() {
  return (
    <div className="page-ChiSiamo">
      <Helmet>
        <title>Tynamo - Chi Siamo</title>
        <body className="body-Default"/>
      </Helmet>
      <Navbar/>
      
      <div className="riquadro" id="r1">
        <h1 >Chi Siamo</h1>
        <p>
            Benvenuti in Tynamo, un'azienda dedicata a fornire soluzioni energetiche sostenibili per le comunità di oggi e di domani.
            Fondata con la visione di creare un futuro energetico più pulito e più accessibile per tutti,
            ci impegniamo a guidare il settore verso una transizione ecologica.
        </p>
      </div>

      <div className="riquadro" id="r2">
        <h1>Trasparenza</h1>
        <p>
          La trasparenza e l'integrità sono i pilastri su cui si basa il nostro operato.
          Ci impegniamo a operare in modo etico, responsabile e trasparente in tutte le nostre attività,
          rispettando sempre gli standard più elevati di comportamento aziendale.
        </p>
      </div>

      <div className="riquadro" id="r3">
        <h1>La nostra missione</h1>
        <p>
          La nostra missione è di fornire energia affidabile, efficiente e sostenibile per soddisfare le esigenze dei nostri clienti,
          preservando al contempo il nostro pianeta per le generazioni future.
          Ci impegniamo a offrire servizi energetici innovativi che migliorino la qualità della vita,
          riducano l'impatto ambientale e promuovano la responsabilità sociale e ambientale.
        </p>
      </div>
    </div>
  );
}
