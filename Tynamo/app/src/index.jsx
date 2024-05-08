import ReactDOM from "react-dom/client";
import { 
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route
} from "react-router-dom";

import Home from "./Home.jsx"
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import ChiSiamo from "./ChiSiamo.jsx"
import Offerte from "./Offerte.jsx"
import CreazioneOfferta from "./CreazioneOfferta.jsx"
import Contattaci from "./Contattaci.jsx"
import InformazioniPersonali from "./InformazioniPersonali.jsx"
import PageNotFound from "./PageNotFound.jsx";

import Layout from "./layout.jsx";
import "./index.css"

const router = createBrowserRouter([
    { path: "*", element: <Root/> },
]);

export default function App() {
    return (<RouterProvider router={router}/>)
}

function Root() {
    return (
        <Routes>
            <Route element={<Layout path="/"/>}>
                <Route index Component={Home}/>
                <Route path="/login" Component={Login}/>
                <Route path="/register" Component={Register}/>
                <Route path="chi-siamo" Component={ChiSiamo}/>
                <Route path="/offerte" Component={Offerte}/>
                <Route path="/creazione-offerta" Component={CreazioneOfferta}/>
                <Route path="/contattaci" Component={Contattaci}/>
            </Route>

            <Route element={<Layout path="/area-personale"/>}>
                <Route path="/area-personale/informazioni-personali" Component={InformazioniPersonali}/>
            </Route>

            <Route path="*" Component={PageNotFound}/>
        </Routes>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
