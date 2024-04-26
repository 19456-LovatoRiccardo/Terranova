import axios from "axios"

async function Authorize() {
    let email = null;
    if (!window.sessionStorage.getItem("token")) {
        return null
    }

    const API = axios.create({
        baseURL: "http://localhost:9091/api",
    });
    
    try {
        const res = await API.get("/auth/validateToken", {
            headers: {
                "Authorization" : window.sessionStorage.getItem("token")
            }
        }).then((res) => {
            email = res.data.email;
        });
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        }
    }
    return email;
};

export default Authorize;