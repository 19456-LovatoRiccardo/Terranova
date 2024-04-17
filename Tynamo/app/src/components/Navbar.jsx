import LOGO from '../assets/LOGO.png'
import './Navbar.css'

function Navbar() {
    return (
      <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <nav>
            <input type="image" src={LOGO} class="logoHome" alt="LOGO"/>
            <ul>
                <li><a href="#">Chi siamo</a></li>
                <li><a href="#">Offerte</a></li>
                <li><a href="#">Contattaci</a></li>
                <li class="login"><a href="login.html" class='bx bxs-user'></a></li>
            </ul>
        </nav>
      </>
    )
}

export default Navbar
