import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import CookiePrompt from './components/CookiePrompt.jsx'
import './Offerte.css'
function PageContent() {
  const a = "HEY";
  return (
    <>
      <a href="/dettagli-offerta.html?descrizione=Easy Energy"><button>Easy Energy</button></a>
      <a href="/dettagli-offerta.html?descrizione=Family"><button>Family</button></a>
      <a href="/dettagli-offerta.html?descrizione=Full Power"><button>Full Power</button></a>
      <a href="/dettagli-offerta.html?descrizione=Super Power"><button>Super Power</button></a>
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
