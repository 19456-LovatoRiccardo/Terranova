import { useState, useEffect } from "react";
import LOGO from '../assets/LOGO.png'
import Authorize from '../api/Authorize.jsx'
import Logout from '../api/Logout.jsx'
import './Navbar.css'

function Navbar() {
  const [minimize, setMinimize] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleWindowSizeChangeNotAuthenticated = () => {
    if (window.innerWidth < 865) {
      setMinimize(true)
    } else {
      setMinimize(false)
      setShowMenu(false)
    }
  };

  const handleWindowSizeChangeAuthenticated = () => {
    if (window.innerWidth < 1165) {
      setMinimize(true)
    } else {
      setMinimize(false)
      setShowMenu(false)
    }
  };

  useEffect(() => {
    async function asyncFunction() {
      const authorizationResult = await Authorize()
      if (authorizationResult != null) {
        setAuthenticated(true);
        handleWindowSizeChangeAuthenticated();
        window.addEventListener('resize', handleWindowSizeChangeAuthenticated);
        return () => {
          window.removeEventListener('resize', handleWindowSizeChangeAuthenticated);
        }
      } else {
        setAuthenticated(false);
        handleWindowSizeChangeNotAuthenticated();
        window.addEventListener('resize', handleWindowSizeChangeNotAuthenticated);
        return () => {
          window.removeEventListener('resize', handleWindowSizeChangeNotAuthenticated);
        };
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
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Chi siamo</a></li>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Offerte</a></li>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Contattaci</a></li>
          <div id='iconsDiv'>
            <div className="dropdown">
              <li id="menu" className="dropbtn" style={{ display: minimize ? "block" : "none" }}>
                <a onClick={() => setShowMenu(showMenu => !showMenu)} className='bx bx-fw bx-menu bx-md'/>
              </li>
              <div className="dropdown-content" style={{ display: showMenu ? "block" : "none" }}>
                <a href="area-personale/informazioni-personali.html" style={{ display: authenticated ? "block" : "none" }}>
                  Area Personale
                </a>
                <a href="#">Chi siamo</a>
                <a href="#">Offerte</a>
                <a href="#">Contattaci</a>
                <a href="/login.html" style={{ display: authenticated ? "none" : "block" }}>
                  Login
                </a>
                <a id="logout-dropdown" onClick={() => Logout()} style={{ display: authenticated ? "block" : "none" }}>
                  Logout
                </a>
              </div>
            </div>
            <li id="areaPersonale" style={{ display: (minimize || !authenticated) ? "none" : "block" }}>
              <a href="/area-personale/informazioni-personali.html">Area Personale</a>
            </li>
            <li id="login" style={{ display: (minimize || authenticated) ? "none" : "block" }}>
              <a href="/login.html" className='bx bx-fw bxs-user bx-md'/>
            </li>
            <li id="logout" style={{ display: (minimize || !authenticated) ? "none" : "block" }}>
              <a onClick={() => Logout()} className='bx bx-fw bx-log-out bx-md'/>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
