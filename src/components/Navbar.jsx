import React from 'react';
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/create'>Criar</a></li>
                <li><a href='/#about'>Sobre</a> </li>
            </ul>
        </nav>
    );
}

export default Navbar;