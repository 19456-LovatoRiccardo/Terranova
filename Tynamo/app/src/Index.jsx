import React from 'react'
import ReactDOM from 'react-dom/client'
import croppedBG from './assets/cropped-bg.png'
import Navbar from './components/Navbar.jsx'
import './Index.css'

function PageContent() {
  return (
    <>
      <img className="cropped-bg" src={croppedBG}/>
      <div className="separatore"/>
      <div className="titolo">
        <p>Benvenuto in</p>
        <h1>Tynamo</h1>
      </div>
      <div className="evidenziatore">
        <p className="descrizione">
          Benvenuti nell'era dell'energia sostenibile:
          dove innovazione e responsabilità
          ambientale si incontrano per illuminare il
          tuo domani
        </p>
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
