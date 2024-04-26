import axios from "axios"

async function Logout() {
    window.sessionStorage.setItem("token", null);

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

    // Reload Page
    window.location.reload(true)
};

export default Logout;