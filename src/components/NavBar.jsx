import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <header id="header">
            <nav role="navigation">
                <ul>
                    <li><a href="https://www.instagram.com/forever_young_voluntariado/" target="_blank">Instagram</a></li>
                    <li><Link to="/juegos">Juegos</Link></li>
                    <li><Link to= "/home">  <img src="public/logo-foreveryoung.png" alt="Company Logo"></img> </Link></li>
                    <li><Link to="/recursos">Recursos</Link></li>
                    <li><a href="https://drive.google.com/drive/folders/1gNpCWpx-Tmdrjx7DPJAfCOhkjSf6tyLJ?usp=sharing" target="_blank">Diseños</a></li>
                </ul> 
            </nav>
        </header>
    )
}
export default NavBar