import React from 'react';
import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from "react-router-dom";

import Navbar from './components/Navbar';
import NavbarAreaPersonale from './components/NavbarAreaPersonale';

export default function Layout({path}) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })

    const chooseNavbar = () => {
        switch (path) {
        case "/":
            return <Navbar windowWidth={windowWidth}/>
        case "/area-personale":
            return <NavbarAreaPersonale windowWidth={windowWidth}/>
        }
    };

    return (
        <div className = { windowWidth > 865 ? "root-Desktop" : "root-Mobile" }>
            {chooseNavbar()}
            <ScrollRestoration/>
            <Outlet windowWidth={windowWidth}/>
        </div>
    );
}
