import React from 'react'
import NavMenu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import './Sobre.css'
import ImagemPerfil1 from '../assets/Barbaha.png'
import ImagemPerfil2 from '../assets/cleyton.png'
import ImagemPerfil3 from '../assets/eliza.png'
import ImagemLinkedin from '../assets/linkedin.png'

function Sobre() {
    return (
        <div>
            <NavMenu />
            <div>
                    <div className="primeiroTitulo">
                    <h1>SOBRE O PROJETO</h1></div>

                    <div className="segundoTitulo"><p>POKÉDEX FEITA POR TRÊS ESTUDANTES DE FRONT-END COM ÊNFASE EM REACT COMO UM PROJETO FINAL (TCC) DO CURSO START LATAM RECIFE.</p>
                    </div>

                    <section className="imagens"> 
                    
                         <img className="primeiraFoto"src={ImagemPerfil1}/>

                         <h3 className="nomePrimeiro">BARBAHA SANTOS </h3>

                         <img className="linkedinFoto" src={ImagemLinkedin}/>
                    
                    </section>

                    <section className="imagens">
                            <img className="segundaFoto" src={ImagemPerfil2}/>

                            <h3 className="nomeSegundo">CLEYTON SOUSA</h3>

                            <img className="linkedinFoto" src={ImagemLinkedin}/>
                            
                    </section>

                    <section className="imagens">
                            <img className="terceiraFoto" src={ImagemPerfil3}/>

                            <h3 className="nomeTerceiro">MARIA ELIZA</h3>

                            <img className="linkedinFoto" src={ImagemLinkedin}/>

                    </section>



            </div>
           <Footer />
        </div>
    
    )
}

export default Sobre 