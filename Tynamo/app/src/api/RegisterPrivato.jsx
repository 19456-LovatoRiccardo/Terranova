import axios from "axios"

async function RegisterPrivato() {
    const API = axios.create({
        baseURL: "http://localhost:9091/api",
    });

    let email = document.getElementById("privatoEmail").value
    let password = document.getElementById("privatoPassword").value
    let cognome = document.getElementById("privatoCognome").value
    let nome = document.getElementById("privatoNome").value
    let ragSociale = document.getElementById("privatoRagSociale").value
    let codiceFiscale = document.getElementById("privatoCodiceFiscale").value
    let indirizzo = document.getElementById("privatoIndirizzo").value
    let numCivico = document.getElementById("privatoNumCivico").value
    let cap = document.getElementById("privatoCap").value
    let localita = document.getElementById("privatoLocalita").value
    let provincia = document.getElementById("privatoProvincia").value
    let nazione = document.getElementById("privatoNazione").value
    let numTelefonico = document.getElementById("privatoNumTelefonico").value
    try {
        const res = await API.post("/auth/register/privato", {
            email, password, cognome, nome,
            ragSociale, codiceFiscale, numTelefonico,
            indirizzo, numCivico, cap, localita, provincia, nazione
        }).then((res) => {
            window.sessionStorage.setItem("token", "Bearer " + res.data.token);
            window.location.href = "/area-personale/informazioni-personali.html"
            return true;
        });
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        } else {
            console.log("Registration failed: " + err.response.data);
        }
    }
    return false;
};

export default RegisterPrivato;