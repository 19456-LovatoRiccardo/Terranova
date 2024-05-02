import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from '../assets/LOGO.png'
import Authorize from '../api/Authorize.jsx'
import LogoutAPI from '../api/Logout.jsx'
import './Navbar.css'

export default function Navbar() {
  const [minimize, setMinimize] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

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

  const logout = async () => {
    const logoutResult = await LogoutAPI();
    if (logoutResult) {
      navigate(0)
    }
  };

  return (
    <div className="component-Navbar">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <nav>
        <Link to="/" className="logoHome">
          <img src={LOGO} className="logoHomeImage" alt="LOGO"/>
        </Link>
        <ul>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><Link to="/chi-siamo">Chi siamo</Link></li>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><Link to="/offerte">Offerte</Link></li>
          <li className='navbarLink' style={{ display: minimize ? "none" : "block" }}><Link to="/contattaci">Contattaci</Link></li>
          <div id='iconsDiv'>
            <div className="dropdown">
              <li id="menu" className="icona" style={{ display: minimize ? "block" : "none" }}>
                <a onClick={() => setShowMenu(showMenu => !showMenu)} className='bx bx-fw bx-menu bx-md'/>
              </li>
              <div className="dropdown-content" style={{ display: showMenu ? "block" : "none" }}>
                <Link to="/area-personale/informazioni-personali" style={{ display: authenticated ? "block" : "none" }}>
                  Area Personale
                </Link>
                <Link to="/chi-siamo">Chi siamo</Link>
                <Link to="/offerte">Offerte</Link>
                <Link to="/contattaci">Contattaci</Link>
                <Link to="/login" style={{ display: authenticated ? "none" : "block" }}>
                  Login
                </Link>
                <a id="logout-dropdown" onClick={() => logout()} style={{ display: authenticated ? "block" : "none" }}>
                  Logout
                </a>
              </div>
            </div>
            <li id="areaPersonale" style={{ display: (minimize || !authenticated) ? "none" : "block" }}>
              <Link to="/area-personale/informazioni-personali">Area Personale</Link>
            </li>
            <li id="login" className="icona" style={{ display: (minimize || authenticated) ? "none" : "block" }}>
              <Link to="/login" className='bx bx-fw bxs-user bx-md'/>
            </li>
            <li id="logout" className="icona" style={{ display: (minimize || !authenticated) ? "none" : "block" }}>
              <a onClick={() => logout()} className='bx bx-fw bx-log-out bx-md'/>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}
