import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar.jsx'
import './Contattaci.css'

export default function Contattaci() {
  return (
    <div className="page-Contattaci">
      <Helmet>
        <title>Tynamo - Contattaci</title>
        <body className="page-Contattaci"/>
      </Helmet>
      <Navbar/>

      <div className="riquadro" id="r1">
        <i className='bx bxs-home-alt-2'/>
        <p>+39 02 12345678</p>
        <i className='bx bx-devices'/>
        <p>+39 347 9876543</p>
      </div>

      <div className="riquadro" id="r2">
        <i className='bx bxs-location-plus'/>
        <p>Verona, Italy</p>
        <iframe className= "mappa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0660318602972!2d10.9692262766284!3d45.42817023584146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f61f8852227%3A0xfab7331910c8e071!2sITIS%20Guglielmo%20Marconi!5e0!3m2!1sit!2sit!4v1714310186579!5m2!1sit!2sit" 
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className="riquadro" id="r3">
        <i className='bx bxs-envelope'/>
        <p>tynamo@assistenza.com</p>
        <i className='bx bxs-info-circle'/>
        <p>tynamo@info.com</p>
      </div>
    </div>
  );
}
