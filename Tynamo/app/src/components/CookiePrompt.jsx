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
      <div class="cookie">
        <header>
          <i class='bx bxs-cookie' ></i>
          <h2>Consenso Cookies</h2>
        </header>
        <div class="cookieData">
          <p>Questo sito web utilizza i cookie per aiutarti a avere un'esperienza di navigazione superiore e più pertinente sul sito. </p>
        </div>
        <div class="cookieBtn">
          <button class="button" id="acceptBtn">Accept</button>
          <button class="button" id="declineBtn">Decline</button>
        </div>
      </div>
    </>
  )
}

export default CookiePrompt
