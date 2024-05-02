import axios from "axios"

async function Logout() {
    const API = axios.create({
        baseURL: "http://localhost:9091/api",
    });
    
    try {
        const res = await API.get("/auth/logout");
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        }
    }

    window.sessionStorage.setItem("token", null);
    return true;
};

export default Logout;