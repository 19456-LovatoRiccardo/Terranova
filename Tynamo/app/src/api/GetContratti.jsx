import axios from "axios"

async function GetContratti() {
    if (!window.sessionStorage.getItem("token")) {
        return null
    }

    const API = axios.create({
        baseURL: "http://localhost:9091/api",
    });
    
    let contratti = [];
    try {
        const res = await API.get("/privateArea/contratti", {
            headers: {
                "Authorization" : window.sessionStorage.getItem("token")
            }
        }).then((res) => {
            contratti = res.data;
        });
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        } else {
            console.log("Authorization failed: " + err.response.data);
        }
    }
    let htmlContratti = [];
    for (let i in contratti) {
        let contratto = contratti[i];
        let utility = "";
        if ("energiaAnno" in contratto) {
            if ("gasAnno" in contratto) {
                utility = "EE and GAS"
            } else {
                utility = "EE"
            }
        } else {
            utility = "GAS"
        }
        htmlContratti[i] = (<li key={contratto.id}>
            <p>Tipo Contratto: {utility}</p>
            <p>Descrizione: {contratto.descrizioneOfferta}</p>
            <p>Stato: {contratto.stato}</p>
            <p>Tipo Pagamento: {contratto.tipoPagamento}</p>
            <p style={{display: (utility != "GAS") ? "block" : "none"}}>
                Energia Anno: {contratto.energiaAnno} kWh
            </p>
            <p style={{display: (utility != "EE") ? "block" : "none"}}>
                Gas Anno: {contratto.gasAnno} mc
            </p>
        </li>)
    }
    return <ul>{htmlContratti}</ul>;
};

export default GetContratti;