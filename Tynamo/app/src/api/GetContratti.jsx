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
                utility = "EE e GAS"
            } else {
                utility = "EE"
            }
        } else {
            utility = "GAS"
        }
        htmlContratti[i] = (<tr key={contratto.id}>
            <td>{utility}</td>
            <td>{contratto.descrizioneOfferta}</td>
            <td>{contratto.stato}</td>
            <td>{contratto.dataInizioValidita}</td>
            <td>{contratto.dataFineValidita}</td>
            <td>{contratto.tipoPagamento}</td>
            <td style={{opacity: (utility != "GAS") ? "none" : "0.0"}}>{contratto.energiaAnno} kWh</td>
            <td style={{opacity: (utility != "EE") ? "none" : "0.0"}}>{contratto.gasAnno} mc</td>
        </tr>)
    }
    return htmlContratti;
};

export default GetContratti;