import React from 'react'
import ReactDOM from 'react-dom/client'
import croppedBG from './assets/cropped-bg.png'
import Navbar from './components/Navbar.jsx'
import CookiePrompt from './components/CookiePrompt.jsx'
import './Index.css'

function PageContent() {
  return (
    <>
      <img class="cropped-bg" src={croppedBG}/>
      <div class="separatore"/>
      <div class="titolo">
        <p>Benvenuto in</p>
        <p class="titolo2">Tynamo</p>
      </div>
      <div class="evidenziatore">
        <p class="descrizione">
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
    <CookiePrompt/>
  </React.StrictMode>,
)
