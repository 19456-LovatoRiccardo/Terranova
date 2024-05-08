import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from "react-router-dom";

import Navbar from './components/Navbar';
import NavbarAreaPersonale from './components/NavbarAreaPersonale';

export default function Layout({path}) {
    const chooseNavbar = () => {
        switch (path) {
        case "/":
            return <Navbar/>
        case "/area-personale":
            return <NavbarAreaPersonale/>
        }
    };

    return (
        <div className = { window.innerWidth > 865 ? "root-Desktop" : "root-Mobile" }>
            {chooseNavbar()}
            <ScrollRestoration/>
            <Outlet/>
        </div>
    );
}
