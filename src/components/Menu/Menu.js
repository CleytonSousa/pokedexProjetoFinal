import React, {useState} from "react";
import './Menu.css'
import pokebola from '../../assets/pokebola.png'

function NavMenu(){

    let [active, setMode] = useState(false)

    const toggleMode= () => {
        setMode(!active)
    }

    return(
        <nav>
        <img id="pokebola" src={pokebola} alt="a" />

            <div className={active ? 'navRespo' : 'noShow'} id="navRespo">
                <a className="navItemRespo" href="#">HOME</a>
                <a className="navItemRespo" href="#">GERAÇÃO</a>
                <a className="navItemRespo" href="#">CATEGORIA</a>
                <a className="navItemRespo" href="#">SOBRE</a>
            </div>

                <a href="#">HOME</a>
                <a href="#">GERAÇÃO</a>
                <a href="#">CATEGORIA</a>
                <a href="#">SOBRE</a>
            <input id="menu__toggle" type="checkbox" />

            <label onClick={() => {
                setMode(!active)
            }} className="menu__btn" for="menu__toggle">
                <span></span>
            </label>

        </nav>
    );
}

export default NavMenu