import axios from "axios"

async function GetInformazioniPersonali() {
    let anagrafica = null;
    if (!window.sessionStorage.getItem("token")) {
        return null
    }

    const API = axios.create({
        baseURL: "http://localhost:9091/api",
    });
    
    try {
        const res = await API.get("/privateArea/anagrafica", {
            headers: {
                "Authorization" : window.sessionStorage.getItem("token")
            }
        }).then((res) => {
            anagrafica = res.data;
        });
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        } else {
            console.log("Authorization failed: " + err.response.data);
        }
    }
    return anagrafica;
};

export default GetInformazioniPersonali;