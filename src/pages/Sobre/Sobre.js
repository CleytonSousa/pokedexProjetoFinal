import React from 'react'
import NavMenu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import './Sobre.css'
import ImagemPerfil1 from '../../assets/Barbaha.png'
import ImagemPerfil2 from '../../assets/cleyton.png'
import ImagemPerfil3 from '../../assets/eliza.png'
import ImagemLinkedin from '../../assets/linkedin.png'
import ImagemGithub from '../../assets/github.png'

function Sobre() {
    return (
        
        <div>
            <NavMenu />
        <section className="container">

             
                <section className="primeiroTitulo">
                    
                    <h1>Sobre o Projeto</h1>

                </section>

                 <section className="segundoTitulo"> 
            
            <p>POKÉDEX FEITA POR TRÊS ESTUDANTES DE FRONT-END COM ÊNFASE EM REACT COMO UM PROJETO FINAL (TCC) DO CURSO START LATAM RECIFE.</p>
            
            
                </section>

         </section>
                 
             <section className="container1">
                    <section className="imagem1"> 
                    
                                 <img className="primeiraFoto" src={ImagemPerfil1} alt=''/>

                                         <h3 className="nomePrimeiro">BARBAHA SANTOS </h3>

            <section className="redesSociais">

                          <a href="https://github.com/barbaha">

                                <img className="githubFoto" alt='' src={ImagemGithub}/>  
                            </a>
                            
                            <a href="https://www.linkedin.com/in/barbahasantos/">

                                 <img className="linkedinFoto" alt='' src={ImagemLinkedin}/>
                            </a>
            </section>
            
                    </section>

                </section>

                <section className="container2">
                    <section className="imagem2">
                                <img className="segundaFoto" alt='' src={ImagemPerfil2}/>

                                    <h3 className="nomeSegundo">CLEYTON SOUSA</h3>

                <div className="redesSociais">

                            <a href="https://github.com/CleytonSousa">  

                                <img className="githubFoto" alt='' src={ImagemGithub}/>
                            </a>

                            <a href="https://www.linkedin.com/in/cleyton-sousa-3626a11a5/">

                                <img className="linkedinFoto" alt='' src={ImagemLinkedin}/>
                            </a>
                </div>
                    </section>    
                            
                </section>

                <section className="container3">

                    <section className="imagem3">

                                <img className="terceiraFoto" alt='' src={ImagemPerfil3}/>

                                    <h3 className="nomeTerceiro">MARIA ELIZA</h3>

                <section className="redesSociais">      

                            <a href="https://github.com/MariaEliiza">   

                                <img className="githubFoto" alt='' src={ImagemGithub}/>

                            </a>

                            <a href="https://www.linkedin.com/in/maria-eliza-047765196/">

                                <img className="linkedinFoto" alt='' src={ImagemLinkedin}/>
                                
                            </a>
                </section>
                        </section>
                    </section>

               


         
           <Footer />
        </div>    
    
    )
}

export default Sobre 



