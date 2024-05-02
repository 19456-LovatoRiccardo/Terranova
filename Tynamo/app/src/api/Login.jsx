import axios from "axios"

async function Login() {
    let retRequestAccepted = false;

    const API = axios.create({
        baseURL: "http://localhost:9091/api",
    });

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    try {
        const res = await API.post("/auth/authenticate", {
            email,
            password,
        }).then((res) => {
            window.sessionStorage.setItem("token", "Bearer " + res.data.token);
            retRequestAccepted = true;
        });
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        } else {
            console.log("Login failed: " + err.response.data);
        }
    }
    return retRequestAccepted;
};

export default Login;