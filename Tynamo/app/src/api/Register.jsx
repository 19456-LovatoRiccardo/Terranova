import axios from "axios"

export default async function Register(request, endpoint) {
    let retRequestAccepted = false;
    await axios.post(`http://localhost:9091/api/auth/register/${endpoint.toLowerCase()}`, request)
        .then((res) => {
            window.sessionStorage.setItem("token", "Bearer " + res.data.token);
            retRequestAccepted = true;
        }).catch((err) => {
            if (!err?.response) {
                console.log("No server response");
            } else {
                console.log("Registration failed: " + err.response.data);
            }
        });
    return retRequestAccepted;
};
