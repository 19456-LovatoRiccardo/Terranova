import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from '../assets/LOGO.png'
import Authorize from '../api/Authorize.jsx'
import LogoutAPI from '../api/Logout.jsx'
import './NavbarAreaPersonale.css'

export default function NavbarAreaPersonale({windowWidth}) {
  const [minimize, setMinimize] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function asyncFunction() {
      const authorizationResult = await Authorize()
      if (authorizationResult == null) {
        navigate('/')
      }
    }
    asyncFunction()
  }, []);

  useEffect(() => {
    let minimumWidth = 1030
    if (windowWidth < minimumWidth) {
      setMinimize(true)
    } else {
      setMinimize(false)
      setShowMenu(false)
    }
  }, [windowWidth]);

  const logout = async () => {
    const logoutResult = await LogoutAPI();
    if (logoutResult) {
      navigate(0)
    }
  };

  return (
    <div className="component-NavbarPersonale">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <nav>
        <Link to="/" className="logoHome">
          <img src={LOGO} className="logoHomeImage" alt="LOGO"/>
        </Link>
        <ul>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><Link to="/area-personale/informazioni-personali">
            Informazioni Personali
          </Link></li>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><Link to="#">Carbon Footprint</Link></li>
          <div id='iconsDiv'>
            <div className="dropdown">
              <li id="menu" className="icona" style={{ display: minimize ? "block" : "none" }}>
                <a onClick={() => setShowMenu(showMenu => !showMenu)} className='bx bx-fw bx-menu bx-md'/>
              </li>
              <div className="dropdown-content" onClick={() => (setShowMenu(false))} style={{ display: showMenu ? "block" : "none" }}>
                <Link to="/area-personale/informazioni-personali">Informazioni Personali</Link>
                <Link to="#">Carbon Footprint</Link>
                <a id="logout-dropdown" onClick={() => logout()}>
                  Logout
                </a>
              </div>
            </div>
            <li id="logout" className="icona" style={{ display: minimize ? "none" : "block" }}>
              <a onClick={() => logout()} className='bx bx-fw bx-log-out bx-md'/>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}
