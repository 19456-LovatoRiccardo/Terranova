import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import CookiePrompt from './components/CookiePrompt.jsx'
import './Contattaci.css'

function PageContent() {
  return (
    <>
    <div class="riquadro1">
    <i class='bx bxs-home-alt-2' ></i>
    <p>+39 02 12345678</p>
    <i class='bx bx-devices'></i>
    <p>+39 347 9876543</p>
    </div>

    <div class="riquadro2">
    <i class='bx bxs-location-plus' ></i>
    <p>Verona, Italy</p>
    <iframe class= "mappa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0660318602972!2d10.9692262766284!3d45.42817023584146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f61f8852227%3A0xfab7331910c8e071!2sITIS%20Guglielmo%20Marconi!5e0!3m2!1sit!2sit!4v1714310186579!5m2!1sit!2sit" 
    width="100" 
    height="450" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </div>

    <div class="riquadro3">
    <i class='bx bxs-envelope' ></i>
    <p>tynamo@assistenza.com</p>
    <i class='bx bxs-info-circle' ></i>
    <p>tynamo@info.com</p>
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
