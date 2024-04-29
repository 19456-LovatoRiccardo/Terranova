import { useEffect } from "react";
import './CookiePrompt.css'

function CookiePrompt() {
  useEffect(() => {
    const cookieBox = document.querySelector(".cookie"),
    buttons = document.querySelectorAll(".cookieBtn");
    const executeCodes = () => {
      if (document.cookie.includes("codinglab")) {
        return;
      }
      cookieBox.classList.add("show");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          cookieBox.classList.remove("show");
          if (button.id == "acceptBtn") {
            document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
          }
        });
      });
    };
    window.addEventListener("load", executeCodes);
  }, []);

  return (
    <>
      <div className="cookie">
        <header>
          <i className='bx bxs-cookie' ></i>
          <h2>Consenso Cookies</h2>
        </header>
        <div className="cookieData">
          <p>Questo sito web utilizza i cookie per aiutarti a avere un'esperienza di navigazione superiore e più pertinente sul sito. </p>
        </div>
        <div className="cookieBtn">
          <button className="button" id="acceptBtn">Accept</button>
          <button className="button" id="declineBtn">Decline</button>
        </div>
      </div>
    </>
  )
}

export default CookiePrompt
