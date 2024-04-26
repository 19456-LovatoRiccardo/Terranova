import { useState, useEffect } from "react";
import LOGO from '../assets/LOGO.png'
import './Navbar.css'

function Navbar() {
  const [minimize, setMinimize] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 865) {
      setMinimize(true)
    } else {
      setMinimize(false)
      setShowMenu(false)
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <nav>
        <a href="index.html" class="logoHome">
          <img src={LOGO} class="logoHomeImage" alt="LOGO"/>
        </a>
        <ul>
          <li class='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Chi siamo</a></li>
          <li class='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Offerte</a></li>
          <li class='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Contattaci</a></li>
          <div id='iconsDiv'>
            <div class="dropdown">
              <li id="menu" class="dropbtn" style={{ display: minimize ? "block" : "none" }}>
                <a onClick={() => setShowMenu(showMenu => !showMenu)} class='bx bx-fw bx-menu bx-md'/>
              </li>
              <div class="dropdown-content" style={{ display: showMenu ? "block" : "none" }}>
                <a href="#">Chi siamo</a>
                <a href="#">Offerte</a>
                <a href="#">Contattaci</a>
                <a href="login.html">Login</a>
              </div>
            </div>
            <li id="login" style={{ display: minimize ? "none" : "block" }}>
              <a href="login.html" class='bx bx-fw bxs-user bx-md'/>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
