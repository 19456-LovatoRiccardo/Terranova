import axios from "axios"

export default async function CreateContract(request, utility) {
    let retRequestAccepted = false;
    request.utility = utility;
    await axios.post('http://localhost:9091/api/privateArea/registerContratto', request, {
            headers: {"Authorization" : window.sessionStorage.getItem("token")}
        })
        .then((res) => {
            retRequestAccepted = true;
        }).catch((err) => {
            if (!err?.response) {
                console.log("No server response");
            } else {
                console.log("Contract creation failed: " + err.response.data);
            }
        });
    return retRequestAccepted;
};
