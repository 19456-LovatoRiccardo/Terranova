import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx"
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import ChiSiamo from "./ChiSiamo.jsx"
import Offerte from "./Offerte.jsx"
import CreazioneOfferta from "./CreazioneOfferta.jsx"
import Contattaci from "./Contattaci.jsx"
import InformazioniPersonali from "./InformazioniPersonali.jsx"

import "./index.css"

export default function App() {
    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/login" Component={Login}/>
            <Route path="/register" Component={Register}/>
            <Route path="chi-siamo" Component={ChiSiamo}/>
            <Route path="/offerte" Component={Offerte}/>
            <Route path="/creazione-offerta" Component={CreazioneOfferta}/>
            <Route exact path="/contattaci" Component={Contattaci}/>
            <Route path="/area-personale/informazioni-personali" Component={InformazioniPersonali}/>
            <Route path="*" Component={Home}/>
        </Routes>
    </BrowserRouter>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    // <RouterProvider router={App()} />
    <App/>
);