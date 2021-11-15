import React, {useState} from "react";
import { MenuRocket } from './MenuStyle.js'
import pokebola from '../../assets/pokebola.png'
import { Link } from "react-router-dom";


function NavMenu(){

    let [active, setMode] = useState(false)

    const toggleMode= () => {
        setMode(!active)
    }

    return(
        <>
            <MenuRocket>
                <Link className="navItemRespo" id="img-menu" to='/'>
                    <img id="pokebola" src={pokebola} alt="menu" />
                </Link>

                {/* Menu responsivo */}
                <div className={active ? 'navRespo' : 'noShow'} id="navRespo">
                    <Link className="navItemRespo navItem" to="/">HOME</Link>
                    <Link className="navItemRespo navItem" to="/geracao">GERAÇÃO</Link>
                    <Link className="navItemRespo navItem" to='/categorias'>CATEGORIA</Link>
                    <Link className="navItemRespo navItem" to='/sobre'>SOBRE</Link> 

                </div>

                    <Link className="navItem" to="/">HOME</Link>
                    <Link className="navItem" to="/geracao">GERAÇÃO</Link>
                    <Link className="navItem" to='/categorias'>CATEGORIA</Link>
                    <Link className="navItem" to='/sobre'>SOBRE</Link>
                <input id="menu__toggle" type="checkbox" />

                <label onClick={() => {
                    setMode(!active)
                }} className="menu__btn" htmlFor="menu__toggle">
                    <span style={{marginTop: '10px', padding: '1px'}}></span>
                    <span style={{padding: '1px'}} id="item"></span>
                </label>

            </MenuRocket>
        </>
    );
}

export default NavMenu