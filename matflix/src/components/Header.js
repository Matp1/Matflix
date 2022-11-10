import React from "react";
import './Header.css'
import logoMatflix from '../MATFLIX.png'
import favIcon from '../logos/fav-icon.jpeg'

export default function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img src={logoMatflix} alt="logo do matflix" />
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={favIcon} alt="usuario" />
                </a>
            </div>
        </header>
    )
}
