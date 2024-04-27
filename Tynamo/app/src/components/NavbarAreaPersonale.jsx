import { useState, useEffect } from "react";
import LOGO from '../assets/LOGO.png'
import Authorize from '../api/Authorize.jsx'
import Logout from '../api/Logout.jsx'
import './NavbarAreaPersonale.css'

function NavbarAreaPersonale() {
  const [minimize, setMinimize] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 1030) {
      setMinimize(true)
    } else {
      setMinimize(false)
      setShowMenu(false)
    }
  };

  useEffect(() => {
    async function asyncFunction() {
      const authorizationResult = await Authorize()
      if (!authorizationResult) {
        window.location.href = "/index.html"
      }
      handleWindowSizeChange();
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    }
    asyncFunction()
  }, []);

  return (
    <>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <nav>
        <a href="/index.html" className="logoHome">
          <img src={LOGO} className="logoHomeImage" alt="LOGO"/>
        </a>
        <ul>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="/area-personale/informazioni-personali.html">
            Informazioni Personali
          </a></li>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Carbon Footprint</a></li>
          <div id='iconsDiv'>
            <div className="dropdown">
              <li id="menu" className="dropbtn" style={{ display: minimize ? "block" : "none" }}>
                <a onClick={() => setShowMenu(showMenu => !showMenu)} className='bx bx-fw bx-menu bx-md'/>
              </li>
              <div className="dropdown-content" style={{ display: showMenu ? "block" : "none" }}>
                <a href="/area-personale/informazioni-personali.html">Informazioni Personali</a>
                <a href="#">Carbon Footprint</a>
                <a id="logout-dropdown" onClick={() => Logout()}>
                  Logout
                </a>
              </div>
            </div>
            <li id="logout" style={{ display: minimize ? "none" : "block" }}>
              <a onClick={() => Logout()} className='bx bx-fw bx-log-out bx-md'/>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default NavbarAreaPersonale
