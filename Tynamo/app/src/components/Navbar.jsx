import LOGO from '../assets/LOGO.png'
import './Navbar.css'

function Navbar() {
    return (
      <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <nav>
            <input type="image" src={LOGO} class="logoHome" alt="LOGO"/>
            <ul>
                <li class='navbarLink'><a href="#">Chi siamo</a></li>
                <li class='navbarLink'><a href="#">Offerte</a></li>
                <li class='navbarLink'><a href="#">Contattaci</a></li>
                <li id="menu" hidden><a href="#" class='bx bx-menu'></a></li>
                <li id="login"><a href="login.html" class='bx bxs-user'></a></li>
            </ul>
        </nav>
      </>
    )
}

export default Navbar
