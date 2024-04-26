import axios from "axios"

async function Login() {
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
            window.location.href = "index.html"
        });
    } catch (err) {
        if (!err?.response) {
            console.log("No server response");
        } else {
            console.log("Login failed: " + err.response.data);
        }
    }
};

export default Login;