import axios from "axios"

async function RegisterContratto(utility, descrizioneOfferta) {
    const API = axios.create({
        baseURL: "http://localhost:9091/api",
    });

    // Contratto
        let dataInizioValidita = document.getElementById("dataInizio").value;
        let dataFineValidita = document.getElementById("dataFine").value;
        let tipoPagamento = document.getElementById("tipoPagamento").value;

        // EE
        let potenzaImp = 0;
        let potenzaDisp = 0;
        let energiaAnno = 0;
        try {
            potenzaImp = document.getElementById("potenzaImp").value;
            potenzaDisp = document.getElementById("potenzaDisp").value;
            energiaAnno = document.getElementById("energiaAnno").value;
        } catch (err) {

        }
            
        // GAS
        let gasAnno = 0;
        let usoCotturaCibi = false;
        let produzioneAcquaCalda = false;
        let riscaldamentoIndividuale = false;
        let usoCommerciale = false;
        try {
            gasAnno = document.getElementById("gasAnno").value;
            usoCotturaCibi = document.getElementById("usoCotturaCibi").checked;
            produzioneAcquaCalda = document.getElementById("produzioneAcquaCalda").checked;
            riscaldamentoIndividuale = document.getElementById("riscaldamentoIndividuale").checked;
            usoCommerciale = document.getElementById("usoCommerciale").checked;
        } catch (err) {

        }

    // Sede
        let indirizzo = document.getElementById("indirizzo").value;
        let numCivico = document.getElementById("numCivico").value;
        let cap = document.getElementById("cap").value;
        let localita = document.getElementById("localita").value;
        let provincia = document.getElementById("provincia").value;
        let nazione = document.getElementById("nazione").value;
    
    try {
        const res = await API.post("/privateArea/registerContratto", {
            utility, dataInizioValidita, dataFineValidita, descrizioneOfferta, tipoPagamento,
            potenzaImp, potenzaDisp, energiaAnno,
            gasAnno, usoCotturaCibi, produzioneAcquaCalda, riscaldamentoIndividuale, usoCommerciale,
            indirizzo, numCivico, cap, localita, provincia, nazione
        }, {
            headers: {"Authorization" : window.sessionStorage.getItem("token")}
        }).then((res) => {
            return true;
        });
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        } else {
            console.log("Contract creation failed: "  + err.response.data);
        }
    }
    return false;
};

export default RegisterContratto;