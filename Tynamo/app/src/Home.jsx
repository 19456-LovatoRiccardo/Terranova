import React from 'react'
import { Helmet } from "react-helmet";
import croppedBG from './assets/cropped-bg.png'
import Navbar from './components/Navbar.jsx'
import './Home.css'

export default function Home() {
  return (
    <div className="page-Home">
      <Helmet>
        <title>Tynamo - Home</title>
        <body className="body-Home"/>
      </Helmet>
      <Navbar/>

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
    </div>
  );
}
