import React, {useState} from "react";
import './Menu.css'
import pokebola from '../../assets/pokebola.png'
import { Link } from "react-router-dom";


function NavMenu(){

    let [active, setMode] = useState(false)

    const toggleMode= () => {
        setMode(!active)
    }

    return(
        <div>
            <nav>
                <img id="pokebola" src={pokebola} alt="a" />

                <div className={active ? 'navRespo' : 'noShow'} id="navRespo">
                
                    <Link className="navItemRespo" to="/">HOME</Link>
                    <Link className="navItemRespo" to="/geracao">GERAÇÃO</Link>
                    <Link className="navItemRespo" to='/categorias'>CATEGORIA</Link>
                    <Link className="navItemRespo" to='/sobre'>SOBRE</Link>

                </div>

                    <Link to="/">HOME</Link>
                    <Link to="/geracao">GERAÇÃO</Link>
                    <Link to='/categorias'>CATEGORIA</Link>
                    <Link to='/sobre'>SOBRE</Link>
                <input id="menu__toggle" type="checkbox" />

                <label onClick={() => {
                    setMode(!active)
                }} className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

            </nav>
        </div>
    );
}

export default NavMenu