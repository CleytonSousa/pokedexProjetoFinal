import React, { useState } from 'react'
import NavMenu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import './SobreStyle.js'

import ImagemPerfil1 from '../../assets/Barbaha.png'
import ImagemPerfil3 from '../../assets/eliza.png'
import ImagemLinkedin from '../../assets/linkedin.png'
import ImagemGithub from '../../assets/github.png'

import PokeballClick from '../../components/PokeballClick/PokeballClick'

// IMPORTANDO CONST DO STYLED COMPONENTS

import {
    Container
} from './SobreStyle.js';


function Sobre() {
    const [name, setName] = useState('flex')
    const [disp, setDisp] = useState('none')

    setTimeout(() => {
        setName('none')
        setDisp('flex')
    }, 1000)

    return (
        <>
            <NavMenu sobre="active" />
            <PokeballClick name={name}></PokeballClick>
                <Container style={{display: disp}}>
                    <header className="titulo">
                        <h1>Sobre a Equipe Rocket</h1>
                        <p>
                            POKÉDEX FEITA POR TRÊS ESTUDANTES DE FRONT-END COM ÊNFASE EM REACT COMO UM PROJETO FINAL (TCC) DO CURSO START RECIFE.
                        </p>
                    </header>
                        
                    <section className="alunos">
                        <section className="detalhes">
                            <img className="imgPerfil" src={ImagemPerfil1} alt="" />
                            <h1>Barbaha Santos</h1>
                            <div className="redesSociais">
                                <a rel="noreferrer" href="https://github.com/barbaha" target="_blank" className="icon">
                                    <img alt='' src={ImagemGithub}/>  
                                </a>
            
                                <a rel="noreferrer" href="https://www.linkedin.com/in/barbahasantos/" target="_blank" className="icon">
                                    <img  alt='' src={ImagemLinkedin}/>
                                </a>
                            </div>
                        </section>

                        <section className="detalhes">
                            <img className="imgPerfil-link" src={"https://avatars.githubusercontent.com/u/83567005?v=4"} alt=""/>
                            <h1>Cleyton Sousa</h1>
                            <div className="redesSociais">
                                <a rel="noreferrer" href="https://github.com/CleytonSousa" target="_blank" className="icon">
                                    <img alt='' src={ImagemGithub}/>  
                                </a>
            
                                <a rel="noreferrer" href="https://www.linkedin.com/in/cleyton-sousa-3626a11a5/" target="_blank" className="icon">
                                    <img alt='' src={ImagemLinkedin}/>
                                </a>
                            </div>
                        </section>

                        <section className="detalhes">
                            <img className="imgPerfil" src={ImagemPerfil3} alt=""/>
                            <h1>Maria Eliza</h1>
                            <div className="redesSociais">
                                <a rel="noreferrer" href="https://github.com/MariaEliiza"  target="_blank" className="icon">
                                    <img alt='' src={ImagemGithub}/>  
                                </a>
            
                                <a rel="noreferrer"   href="https://www.linkedin.com/in/maria-eliza-047765196/" target="_blank" className="icon">
                                    <img alt='' src={ImagemLinkedin}/>
                                </a>
                            </div>
                        </section>
                    </section>  
                </Container>
            <Footer />
        </>    
    )
}

export default Sobre 



