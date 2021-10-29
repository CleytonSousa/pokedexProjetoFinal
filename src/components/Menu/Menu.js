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
                
                    <a className="navItemRespo" href="#">HOME</a>
                    <a className="navItemRespo" href="#">GERAÇÃO</a>
                    <a className="navItemRespo" href="#">CATEGORIA</a>
                    <Link className="navItemRespo" to='/sobre'>SOBRE</Link>

                </div>

                    <Link to="/">HOME</Link>
                    <a href="#">GERAÇÃO</a>
                    <a href="#">CATEGORIA</a>
                    <Link to='/sobre'>SOBRE</Link>
                <input id="menu__toggle" type="checkbox" />

                <label onClick={() => {
                    setMode(!active)
                }} className="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

            </nav>
        </div>
    );
}

export default NavMenu