import { useState, useEffect } from "react";
import LOGO from '../assets/LOGO.png'
import './Navbar.css'

function Navbar() {
    const [minimize, setMinimize] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
      if (window.innerWidth < 900) {
        setMinimize(true)
      } else {
        setMinimize(false)
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
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <nav>
            <input type="image" src={LOGO} class="logoHome" alt="LOGO"/>
            <ul>
                <li class='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Chi siamo</a></li>
                <li class='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Offerte</a></li>
                <li class='navbarLink' style={{ display: minimize ? "none" : "block" }}><a href="#">Contattaci</a></li>
                <div id='iconsDiv'>
                    <li id="menu" style={{ display: minimize ? "block" : "none" }}><a href="#" class='bx bx-fw bx-menu bx-md'></a></li>
                    <li id="login"><a href="login.html" class='bx bx-fw bxs-user bx-md'></a></li>
                </div>
            </ul>
        </nav>
      </>
    )
}

export default Navbar
