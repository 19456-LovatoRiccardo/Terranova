import axios from "axios"

async function RegisterAzienda() {
    const API = axios.create({
        baseURL: "http://localhost:9091/api",
    });

    let email = document.getElementById("aziendaEmail").value
    let password = document.getElementById("aziendaPassword").value
    let partitaIVA = document.getElementById("aziendaPartitaIVA").value
    let ragSociale = document.getElementById("aziendaRagSociale").value
    let codiceFiscale = document.getElementById("aziendaCodiceFiscale").value
    let indirizzo = document.getElementById("aziendaIndirizzo").value
    let numCivico = document.getElementById("aziendaNumCivico").value
    let cap = document.getElementById("aziendaCap").value
    let localita = document.getElementById("aziendaLocalita").value
    let provincia = document.getElementById("aziendaProvincia").value
    let nazione = document.getElementById("aziendaNazione").value
    let numTelefonico = document.getElementById("aziendaNumTelefonico").value
    try {
        const res = await API.post("/auth/register/azienda", {
            email, password, partitaIVA,
            ragSociale, codiceFiscale, numTelefonico,
            indirizzo, numCivico, cap, localita, provincia, nazione
        }).then((res) => {
            console.log("Token: " + res["data"]["token"]);
            // window.location.href = "index.html"
        });
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        } else {
            console.log("Registration failed");
        }
    }
};

export default RegisterAzienda;